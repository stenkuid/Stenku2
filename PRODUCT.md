# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack
Astro (Hybrid SSR), Cloudflare Pages, Cloudflare D1 Database.

## Users
Operations managers, business owners, and administrative staff who need to automate repetitive manual tasks, data entry, and information tracking, particularly focusing on resolving operational data currently trapped in informal conversation channels (like WhatsApp).

## Product Purpose
To automate back-office operations by intercepting raw conversational text, understanding its semantic intent, extracting structured data, and executing system operations (e.g. updating inventory databases, creating CRM logs, scheduling task tickets).

## Positioning
"We don't sell generic AI tools. We build AI agents around how your business actually works."
Unlike boxed SaaS chatbot templates, Stenku designs custom automation pipelines centered around the user's existing data schemas and workflows: Conversation → Intelligence → Operation.

## Operating Context
A high-fidelity marketing landing page for B2B product showcase and inbound lead capture, paired with a secure administrative console dashboard showing real-time form inquiry records.

## Capabilities and Constraints
* Hybrid SSR routing (pre-rendered landing page, dynamic database API routes and dashboard views).
* Cloudflare D1 Database integration for persistence.
* Cookie-based admin authentication (HttpOnly, SameSite=Strict).
* Zero-dependency native CSS design system.
* Fast Core Web Vitals (lightweight bundle payload).

## Brand Commitments
* Logo: `STENKU`
* Tone: Confident, premium, minimal, technical, enterprise-ready.
* Visuals: High-contrast layout, Outfit displays, Inter sans fonts, thin borders, high whitespace density.
* Centralized business email: `hello@stenku.biz.id`.

## Evidence on Hand
* Local SQLite database migrations and Cloudflare APAC region D1 database active.
* Configured sitemap index maps and search crawler guidelines (`robots.txt`).
* Generated branding OpenGraph card asset (`public/images/og-image.jpg`).

## Product Principles
1. **Fit the Workflow:** Adapt directly to how teams already communicate; do not force workers to adopt complex new software interfaces.
2. **Model Flexibility:** Select the optimal AI models (Claude, OpenAI, Gemini, DeepSeek) depending on the target speed, cost, and reasoning difficulty.
3. **Conversational Action:** Convert plain chat messages into verified, machine-executable databases or task records.
4. **Structured Security:** Isolate operational data, apply server-side checks, and maintain session authorization boundaries.
