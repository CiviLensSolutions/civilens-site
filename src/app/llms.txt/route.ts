import { NextResponse } from "next/server";

const CONTENT = `# CiviLens

CiviLens is a veteran-owned AI consulting and software development firm based in Denton, Texas. We specialize in AI integration, process automation, and custom web application development for U.S. government agencies and nonprofit organizations.

## Founder

Shea Scott — Founder & Principal Consultant. 17-year government technology professional and U.S. military veteran. Deep expertise in public sector IT, AI integration, and accessible web development.

## Services

- AI Integration: Embedding practical AI into existing government and nonprofit workflows to reduce repetitive work and improve service delivery
- Process Automation: Reducing manual overhead so teams can focus on people, not paperwork — mapping processes before touching code
- Web & Software Development: Modern, accessible web applications built to government scale; citizen-facing portals, internal tools, and compliance-ready systems

## Contact

Email: shea@civilens.solutions
Address: 608 E Hickory St Suite 128, Denton, TX 76205
Website: https://www.civilens.solutions
Schedule a free 30-minute consultation: https://cal.com/shea-civilens

## About

CiviLens was founded in 2026 to bring practical AI tools and modern web development to public sector organizations. We believe government agencies and nonprofits deserve the same technology advantages as the private sector — without vendor complexity or enterprise overhead.

The consult is free, no pitch. Bring a real workflow problem and leave with concrete next steps.
`;

export async function GET() {
  return new NextResponse(CONTENT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
