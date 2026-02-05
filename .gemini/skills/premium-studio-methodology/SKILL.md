---
name: Premium Studio Methodology
description: A framework for building high-end, strategic One Page websites with an editorial tone and high-precision execution.
---

# Premium Studio Methodology (v1.0)

This framework defines the "Studio" way of working for high-end boutique digital projects. It focuses on the **process and delivery format** rather than specific branding assets.

## 1. Engagement Model: One Page Premium
- **Format**: All high-impact content is delivered on a single, seamlessly flowing page.
- **Narrative Flow**: Focus on a "Scrollytelling" experience where information is revealed with cinematic rhythm.
- **Strategic Starting Point**: Every project begins with a deep diagnosis of the problem, not just visual execution.

## 2. Editorial Standards
- **Typography Hierarchy**: Use a high-contrast pairing (Serif for narrative/headers, San-Serif for technical/data).
- **Narrative Bridge**: Include high-contrast visual breaks (Narrative Bridges) to separate strategic sections and give the user room to breathe.
- **Micro-Copy**: Use a professional, strategic, and restrained tone. Avoid marketing fluff; focus on "Protocol," "Logic," and "Criterio."

## 3. High-Precision UI Patterns
- **Cinematic Backgrounds**: Keep interactive elements (kinetic, particles, ORB) that respond to scroll or mouse movement to create "Silent Luxury."
- **Minimalist Architecture**: 
  - Inputs with bottom-border only (`border-b`).
  - Buttons with `inline-flex items-center` for perfect typographic alignment.
  - Generous whitespace (`py-32`, `py-48`) to elevate the perceived value.
- **Specific Iconography**: Avoid generic icons. Use high-precision, technical-looking icons (Lucide or custom SVG).

## 4. Technical Efficiency
- **Native Implementation**: Aim for maximum speed without heavy backend dependencies. 
- **Frontend Logic**: Use services like EmailJS or Formspree to handle interaction without building complex Laravel/PHP backends.
- **Clean Build**: Ensure every project is optimized for deployment by using relative paths (`base: ''` in Vite) for universal hosting compatibility.

## 5. Development Workflow
1. **Planning**: Define the "Criterio" (strategy) and narrative bridge first.
2. **Foundational Design**: Set the editorial typography and palette tokens early.
3. **Interactive Implementation**: Build the scrollytelling components with smooth transitions.
4. **Publishing**: Use static build generators (`npm run build`) for high-performance delivery.
