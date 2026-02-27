import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Accessibility Statement | TechSupport4",
  description:
    "Accessibility commitment of TechSupport4 website. Learn about our WCAG compliance efforts and how to report accessibility issues.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {

  const sections = [
    {
      id: "commitment",
      title: "Our Commitment to Accessibility",
      content:
        "TechSupport4 is committed to ensuring that our website and services are accessible to all individuals, including people with disabilities. We believe that every customer deserves equal access to technical support services, regardless of physical, visual, auditory, cognitive, or neurological abilities. Our accessibility efforts are guided by the Web Content Accessibility Guidelines (WCAG) 2.1, and we continuously work to improve the accessibility and usability of our website to meet or exceed Level AA conformance standards.",
    },
    {
      id: "measures",
      title: "Accessibility Measures We Take",
      content:
        "To ensure accessibility, TechSupport4 has implemented the following measures: (1) We use semantic HTML markup throughout our website, including proper heading hierarchy (H1, H2, H3), landmark regions, and ARIA labels where appropriate. (2) All interactive elements including buttons, forms, and navigation links are keyboard-accessible and can be operated without a mouse. (3) We maintain sufficient color contrast ratios between text and background colors to ensure readability for users with visual impairments. (4) Our website supports both light and dark color themes for user comfort. (5) All images include descriptive alt text for screen readers. (6) Form fields include visible labels and error messages that are announced by assistive technologies. (7) We avoid content that flashes rapidly, which can cause seizures in photosensitive individuals.",
    },
    {
      id: "assistive-technology",
      title: "Assistive Technology Support",
      content:
        "Our website is designed to be compatible with a range of assistive technologies. This includes screen readers such as JAWS, NVDA, and VoiceOver; screen magnification software; speech recognition software such as Dragon NaturallySpeaking; and keyboard-only navigation. We regularly test our website with these tools to identify and resolve accessibility barriers. If you use assistive technology and encounter difficulties accessing any part of our website, please contact us so we can provide alternative access or make improvements.",
    },
    {
      id: "standards",
      title: "Conformance Standards",
      content:
        "TechSupport4 aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines cover a wide range of recommendations for making web content more accessible. Conformance with these guidelines helps ensure that content is accessible to a wider range of people with disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement, speech disabilities, photosensitivity, and combinations of these. We also strive to comply with Section 508 of the Rehabilitation Act and the Americans with Disabilities Act (ADA) as they apply to websites and digital services.",
    },
    {
      id: "ongoing-efforts",
      title: "Ongoing Accessibility Efforts",
      content:
        "Accessibility is not a one-time effort but an ongoing commitment. We continuously evaluate and improve our website to ensure it meets current accessibility standards. Our ongoing efforts include: regular accessibility audits using both automated tools and manual testing; training our development team on accessible coding practices; incorporating accessibility considerations into every new feature and content update; updating our website design to maintain compliance with evolving WCAG standards; and actively seeking feedback from users with disabilities to identify areas for improvement.",
    },
    {
      id: "known-limitations",
      title: "Known Limitations",
      content:
        "Despite our best efforts, some parts of our website may not yet be fully accessible. Known limitations may include: some older blog content that may not yet have been updated to meet current accessibility standards; third-party content or embedded tools that may not be fully accessible and are outside our direct control; and PDF documents that may not be fully compatible with all screen readers. We are actively working to address these limitations and welcome reports of any additional accessibility barriers you may encounter.",
    },
    {
      id: "feedback",
      title: "Accessibility Feedback & Support",
      content:
        "We welcome your feedback on the accessibility of our website. If you experience any accessibility barriers, encounter difficulties using any part of our site, or have suggestions for improvement, please contact us through any of the following methods: Email: support@techsupport4.com (include 'Accessibility' in the subject line); Phone: Call our support line at any time — we are available 24/7; Contact Form: Use our online contact form at techsupport4.com/contact. When reporting an accessibility issue, please include the URL of the page, a description of the issue, the assistive technology you were using (if applicable), and your preferred method of contact. We aim to respond to accessibility feedback within 2 business days and will work to resolve reported issues as quickly as possible.",
    },
    {
      id: "third-party",
      title: "Third-Party Content & Extensions",
      content:
        "Our website may incorporate content, plugins, or services from third parties, including analytics tools, font libraries, and embedded media. While we strive to select third-party providers that prioritize accessibility, we cannot guarantee full accessibility compliance for content or functionality that is outside our direct control. If you encounter accessibility issues with third-party content on our website, we encourage you to report it to us so we can evaluate alternatives or provide accessible alternatives to affected content.",
    },
    {
      id: "legal-compliance",
      title: "Legal & Regulatory Compliance",
      content:
        "TechSupport4 is committed to complying with applicable accessibility laws and regulations, including the Americans with Disabilities Act (ADA), Section 508 of the Rehabilitation Act, the European Accessibility Act, and relevant UK accessibility requirements under the Equality Act 2010. We view accessibility compliance not merely as a legal obligation but as a fundamental aspect of providing inclusive and equitable services to all customers worldwide.",
    },
    {
      id: "updates",
      title: "Updates to This Statement",
      content:
        "This accessibility statement was last updated in February 2026. We review and update this statement regularly to reflect our ongoing accessibility improvements and any changes in accessibility standards or regulations. Previous versions of this statement are available upon request. We encourage you to check this page periodically for the latest information about our accessibility practices and commitment.",
    },
  ];

  return <LegalLayout title="Accessibility Statement" sections={sections} version="v2.0.0" />;
}
