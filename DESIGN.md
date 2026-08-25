---
name: Stenku
description: Custom AI Agents for Business Operations
colors:
  primary: "#0EA5E9"
  primary-hover: "#38BDF8"
  primary-dark: "#0F172A"
  neutral-bg: "#05070F"
  neutral-bg-secondary: "#0B0E17"
  neutral-text: "#CBD5E1"
  neutral-text-primary: "#F8FAFC"
  border-subtle: "#1E293B"
  error: "#EF4444"
  error-bg: "rgba(239, 68, 68, 0.1)"
  success: "#10B981"
  success-bg: "rgba(16, 185, 129, 0.1)"
typography:
  display:
    fontFamily: "Outfit, Inter, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.5
  label-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  container: "1.5rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#05070F"
    rounded: "{rounded.md}"
    padding: "0.75rem 2rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
---

# Design System: Stenku

## Overview

**Creative North Star: "The Technical Ledger"**

"The Technical Ledger" is a design system that presents complex automation capabilities with the extreme clarity of an engineering document or accounting ledger. The interface is optimized for decision-makers and operations managers, avoiding distracting decorations, curved gradients, or floating layers. Instead, it relies on high information density, precise alignment, thin structural dividers, and generous, purposeful whitespace.

By default, pages appear in dark mode to reflect technical depth, using deep slate-blue bases and crisp white texts, highlighted by vivid cyan/sky-blue elements representing operational data flows. Light mode offers a clean paper-white rendering for high-ambient workspace viewing.

**Key Characteristics:**
* **Technical Rigor:** Strict 1px dividers separate content blocks rather than card margins or floating offsets.
* **Typographic Contrast:** Large, geometric Outfit headlines paired with clean, readable Inter body copy.
* **Information Density:** Clean tables, node connection charts, and data rows present complexity with pride.

## Colors

The palette is named "Tech Slate & Sky Blue". It anchors on deep, cold slate tones for backgrounds, using sharp sky-blue and cyan accents to symbolize intelligence and active operational paths.

### Primary
* **Vivid Sky Blue** (#0EA5E9 / `oklch(67.88% 0.188 238.4)`): Used for main interactive buttons, link highlights, and flow indicators. In light mode, this falls back to Slate Dark (#0F172A) for maximum readability.
* **Sky Blue Hover** (#38BDF8 / `oklch(78.58% 0.141 235.82)`): Hover state feedback for buttons and accents.

### Neutral
* **Deep Space Blue** (#05070F / `oklch(6.46% 0.026 250)`): The main canvas color for dark mode.
* **Slate Navy** (#0B0E17 / `oklch(10.22% 0.027 251.2)`): Secondary background color for cards, panels, and side drawers.
* **Slate Light** (#F1F5F9 / `oklch(96.25% 0.01 228.32)`): Light mode base background and dark mode accent panels.
* **Slate White** (#F8FAFC / `oklch(98.81% 0.005 220)`): Headings and primary text in dark mode.
* **Slate Muted** (#CBD5E1 / `oklch(85.83% 0.015 224.23)`): Body copy and non-critical label text.
* **Slate Muted Dark** (#64748B / `oklch(53.25% 0.038 237)`): Text description captions, placeholders, and inactive states.

### Status/Error
* **Error Red** (#EF4444 / `oklch(62.8% 0.25 29.2)`): Used for validation error texts, alert state outlines, and background container fills in negative states. In light mode, it resolves to #DC2626 for contrast.
* **Success Green** (#10B981 / `oklch(72.7% 0.191 150)`): Used for positive feedback alerts and successful form submission indicators. In light mode, it resolves to #059669 for contrast.

### Named Rules
**The Accent Rarity Rule.** The vivid sky-blue color (`#0EA5E9`) must represent less than 5% of any page's visible area. It is reserved exclusively for primary actions, focus indicators, and data-flow pipelines.

## Typography

**Display Font:** Outfit (fallback: Inter, sans-serif)  
**Body Font:** Inter (fallback: system-ui, sans-serif)

The display face is mechanical and wide, utilizing tight letter-spacing to build strong anchor points for headings. The body copy is tuned for dense reads, maintaining a generous line-height to reduce cognitive strain.

### Hierarchy
* **Display** (800 weight, `clamp(2.25rem, 6vw, 3.75rem)`, 1.1 line-height): Used for main hero statements and section titles.
* **Headline** (700 weight, `1.75rem`, 1.2 line-height): Used for panel titles and major workflow labels.
* **Title** (600 weight, `1.25rem`, 1.3 line-height): Used for cards and individual capability items.
* **Body** (400 weight, `1rem`, 1.6 line-height): Main paragraph text and lists. Standardized line length is limited to a maximum of 75 characters.
* **Body Small** (400 weight, `0.85rem`, 1.5 line-height): Captions, system descriptions, inline metadata, and auxiliary form labels.
* **Label** (600 weight, `0.75rem`, uppercase, `0.05em` letter-spacing): Used for section indicators, button text, tables, and dates.
* **Label Small** (600 weight, `0.75rem`, normal case, `0.05em` letter-spacing): Badges and internal count indicators.

## Layout

The layout uses a standard 12-column grid with a maximum container width of `1200px` and side paddings of `1.5rem` (`24px`). 
* **Rhythm:** Spacing between sections is fixed at `6rem` (`96px`) on desktop and `4rem` (`64px`) on mobile to establish a clean breathing cadence.
* **Alignment:** Items in lists, grids, and tables align strictly along the vertical grid lines. Borders connect cards directly to boundaries.

## Elevation & Depth

This system is flat-by-default. It rejects floating cards with shadows.

### Depth Vocabulary
* **Border Boundary:** Thin `1px` borders (`#1E293B` in dark mode, `#E2E8F0` in light mode) outline containers, inputs, and section boundaries.
* **Interactive Tonal Shift:** Elements lighten their background tone (`#121824`) on hover or select states rather than rising.
* **Focused Glow (Hover):** A subtle, local blur effect appears around active interactive buttons or focus states.

### Named Rules
**The Flat-Grid Rule.** All panels and cards rest on the same visual plane. Do not use drop-shadows to separate surfaces at rest.

## Shapes

Shapes are geometric, maintaining sharp, low-radius curves to align with the technical theme.

* **Radius:** A standard corner radius of `6px` is applied to buttons, input fields, cards, and feedback alerts.
* **Pill Radius:** A full pill boundary corner radius of `9999px` is applied exclusively to numeric notification badges, indicator labels, and status pills.
* **Decorative Accents:** Core card structures (like the Homepage CTA card and the admin login card) feature a top-aligned `3px` solid accent stripe colored with `var(--accent)`. This is purely decorative, anchoring block segments visually.
* **Focus Indicators:** Elements use a sharp `2px` focus outline with a `2px` offset on keyboard focus.

## Components

### Buttons
* **Shape:** Rounded corners with a `6px` radius.
* **Primary Button:** Background is Vivid Sky Blue (`#0EA5E9`), text is Deep Space Blue (`#05070F`), padding is `0.75rem 2rem` (`12px 32px`).
* **Hover State:** Background lightens to `#38BDF8` with a minor scale translation (`scale(0.98)` on active tap).
* **Secondary Button:** Background is Slate Navy (`#0B0E17`), text is Slate White (`#F8FAFC`), bordered with `#475569`.

### Cards
* **Corner Style:** `6px` radius.
* **Background:** Slate Navy (`#0B0E17`) at rest.
* **Border:** `1px solid var(--border-subtle)` (`#1E293B`).
* **Interactive Cards:** Background shifts to `#121824` on hover.

### Inputs / Fields
* **Style:** Background is Slate Navy (`#0B0E17`), border is `1px solid var(--border-subtle)`.
* **Focus:** Border shifts to Vivid Sky Blue (`#0EA5E9`) with a `0 0 0 2px rgba(14, 165, 233, 0.2)` glow ring.

## Do's and Don'ts

### Do:
* **Do** keep cards flat and separate them using thin `1px` borders instead of floating shadows.
* **Do** use strict uppercase labels with `0.05em` letter-spacing for all small labels and headers.
* **Do** ensure line lengths for paragraphs do not exceed `75ch` for readability.

### Don't:
* **Don't** use gradients or multi-colored backgrounds inside layout sections.
* **Don't** mix circular rounded buttons (pill style) with rectangular inputs; keep all elements at a uniform `6px` radius.
* **Don't** add arbitrary shadows to suggest elevation hierarchies.
