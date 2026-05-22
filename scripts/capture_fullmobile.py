from playwright.sync_api import sync_playwright

def capture_full(url, output_path, viewport_width=375, viewport_height=812):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle', timeout=30000)
        page.screenshot(path=output_path, full_page=True)
        browser.close()

capture_full("https://civilens.solutions", "/Users/sheascott/Civilens/dev/civilens-site-nextjs/screenshots/fullpage_mobile.png", 375, 812)
print("Done")
