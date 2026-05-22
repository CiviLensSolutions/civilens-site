from playwright.sync_api import sync_playwright
import json

URL = "https://civilens.solutions"

def audit(url):
    results = {}
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})
        page.goto(url, wait_until='networkidle', timeout=30000)

        # --- Meta tags ---
        results['title'] = page.title()
        results['meta_description'] = page.evaluate(
            "() => document.querySelector('meta[name=\"description\"]')?.content || 'MISSING'"
        )
        results['meta_viewport'] = page.evaluate(
            "() => document.querySelector('meta[name=\"viewport\"]')?.content || 'MISSING'"
        )

        # --- OG tags ---
        og_keys = ['og:title', 'og:description', 'og:image', 'og:url', 'og:type']
        results['og'] = {}
        for key in og_keys:
            results['og'][key] = page.evaluate(
                f"() => document.querySelector('meta[property=\"{key}\"]')?.content || 'MISSING'"
            )

        # --- Twitter card tags ---
        tw_keys = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']
        results['twitter'] = {}
        for key in tw_keys:
            results['twitter'][key] = page.evaluate(
                f"() => document.querySelector('meta[name=\"{key}\"]')?.content || 'MISSING'"
            )

        # --- Favicon ---
        results['favicon'] = page.evaluate("""
            () => {
                const links = Array.from(document.querySelectorAll('link[rel*=\"icon\"]'));
                return links.map(l => ({ rel: l.rel, href: l.href, sizes: l.sizes?.value || '' }));
            }
        """)

        # --- Images missing alt text ---
        results['images_missing_alt'] = page.evaluate("""
            () => Array.from(document.querySelectorAll('img')).map(img => ({
                src: img.src,
                alt: img.alt,
                missing: img.alt === '' && !img.hasAttribute('role')
            }))
        """)

        # --- Headings ---
        results['headings'] = page.evaluate("""
            () => Array.from(document.querySelectorAll('h1,h2,h3,h4')).map(h => ({
                tag: h.tagName,
                text: h.innerText.trim().slice(0, 100)
            }))
        """)

        # --- CTA buttons / links above fold ---
        results['cta_buttons'] = page.evaluate("""
            () => Array.from(document.querySelectorAll('a, button')).filter(el => {
                const r = el.getBoundingClientRect();
                return r.top < 1080 && r.height > 0 && r.width > 0;
            }).map(el => ({
                tag: el.tagName,
                text: el.innerText.trim().slice(0, 80),
                href: el.href || null,
                top: Math.round(el.getBoundingClientRect().top),
                height: Math.round(el.getBoundingClientRect().height),
                width: Math.round(el.getBoundingClientRect().width)
            }))
        """)

        # --- Check for horizontal scroll at mobile ---
        page2 = browser.new_page(viewport={'width': 375, 'height': 812})
        page2.goto(url, wait_until='networkidle', timeout=30000)
        results['mobile_horizontal_scroll'] = page2.evaluate(
            "() => document.documentElement.scrollWidth > 375"
        )
        results['mobile_scroll_width'] = page2.evaluate(
            "() => document.documentElement.scrollWidth"
        )
        results['mobile_body_font_size'] = page2.evaluate(
            "() => getComputedStyle(document.body).fontSize"
        )
        results['mobile_h1_visible'] = page2.evaluate("""
            () => {
                const h1 = document.querySelector('h1');
                if (!h1) return false;
                const r = h1.getBoundingClientRect();
                return r.top >= 0 && r.top < 812;
            }
        """)
        results['mobile_cta_visible_above_fold'] = page2.evaluate("""
            () => {
                const btns = Array.from(document.querySelectorAll('a, button'))
                    .filter(el => {
                        const r = el.getBoundingClientRect();
                        return r.top >= 0 && r.top < 812 && r.height > 40 && r.width > 80;
                    });
                return btns.map(b => ({ text: b.innerText.trim().slice(0,60), top: Math.round(b.getBoundingClientRect().top) }));
            }
        """)

        # CSS custom property resolution check
        results['css_bg_var_resolved'] = page2.evaluate(
            "() => getComputedStyle(document.documentElement).getPropertyValue('--bg-0').trim()"
        )

        browser.close()
    return results

r = audit(URL)
print(json.dumps(r, indent=2))
