# css-baseline
KERNAMON baseline.css was inspired by normalize.css v8.0.1 of Nicolas Gallagher, but unique additions and optimisations were made that go beyond simple normalization. So, we have decided to create our own version, "baseline.css"

The changes we added go beyond simple normalization by addressing:

¤ Specific user agent style removal.
¤ Detailed handling of form elements and multimedia content.
¤ Accessibility improvements.
¤ More focus on mobile-first design and consistency.

1. User Agent Styles Removal
   We included a rule to specifically remove user-agent styles for elements, except for the display property. This is an advanced way of ensuring that the browser's default styles (like margins, padding, etc.) don’t affect your layout while keeping the necessary display behavior intact. This isn't part of most normalization approaches, which typically preserve user-agent styles. We have opted for a cleaner slate for most elements but without affecting display properties.
2. Additional Media and Form Element Resets
   We added specific resets for form elements and input fields, such as restoring focus styles on buttons and input fields, which also prevents some unexpected behavior with form elements like select, textarea and button in specific browsers (Safari or older versions of Chrome). These tweaks were added to enhance consistency across form fields, providing more control over how input elements behave. For example, resetting padding and margin, and ensuring proper scaling and inheritance of font styles across browsers.
3. Multimedia Resets
   img and video elements were set to not exceed their container size, ensuring a responsive layout by adding max-width: 100%; height: auto; This is an additional feature not found in many normalization resets and it helps ensure multimedia content stays within their containers responsively, which is essential in modern designs.
4. Accessibility and Focus
   We added explicit focus styles for interactive elements like buttons and links (i.e., the dashed outline on focus). While many normalize resets include focus styles, having visible focus indicators (with a dashed outline) is an important accessibility improvement that ensures users can easily navigate the website using keyboard-only controls.
5. HTML5 Elements and Semantic HTML
   A rule for main, article and section ensures the semantic HTML5 elements are styled consistently. These changes aren't in traditional normalization files but are aimed at improving consistency for HTML5 elements, especially when working with older browsers that might not render these elements as blocks by default.
6. Text and Typography
   We have added rules for small text, superscript/subscript elements and code-related text to handle typography in a consistent manner across browsers. These rules ensure the readability of text elements like code and small fonts, which is often missed in traditional resets.

LEGAL DISCLAIMER:

The MIT license of normalize.css is compatible with our AGPLv3-licensed KERNAMON CMS & WorkStation. We just need to ensure proper attribution for the MIT-licensed file and remember that the overall distribution will still need to meet AGPLv3 requirements.
