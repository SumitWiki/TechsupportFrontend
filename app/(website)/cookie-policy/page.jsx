import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Cookie Policy | TechSupport4",
  description:
    "How TechSupport4 uses cookies and tracking technologies to improve your browsing experience and ensure website functionality.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicy() {

  const sections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies",
      content:
        "Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work efficiently, provide a better browsing experience, and supply information to website owners. Cookies can be 'persistent' (remaining on your device until deleted or until they expire) or 'session-based' (deleted automatically when you close your browser). Cookies are essential to the modern web and help websites remember your preferences, login information, and browsing behavior across visits.",
    },
    {
      id: "types",
      title: "Types of Cookies We Use",
      content:
        "TechSupport4 uses several categories of cookies: (1) Essential Cookies — These are strictly necessary for the website to function properly. They enable core features like page navigation, secure access, and form submissions. Without these cookies, the website cannot operate correctly. (2) Analytics Cookies — We use anonymized analytics tools to understand how visitors interact with our website, including page views, bounce rates, and user flow. This helps us improve website content and user experience. (3) Performance Cookies — These cookies collect information about how visitors use our website, such as which pages are visited most often and whether error messages are displayed. Data collected is aggregated and anonymous. (4) Functionality Cookies — These remember your preferences such as theme settings (dark/light mode), language preferences, and region selection to provide a more personalized experience.",
    },
    {
      id: "third-party-cookies",
      title: "Third-Party Cookies",
      content:
        "Some cookies on our website are set by third-party services that appear on our pages. These include analytics providers (such as Google Analytics), font delivery networks (Google Fonts), and security services. TechSupport4 does not control these third-party cookies and recommends reviewing the respective privacy and cookie policies of these providers. Third-party cookies may collect information about your browsing activity across different websites and may be used for targeted advertising or analytics purposes. We limit the use of third-party cookies to only those necessary for website functionality and analytics.",
    },
    {
      id: "cookie-consent",
      title: "Cookie Consent & Your Choices",
      content:
        "When you first visit our website, a cookie consent banner is displayed, informing you about our use of cookies. By clicking 'Accept' you consent to the use of cookies as described in this policy. Most web browsers allow you to manage cookie preferences through browser settings. You can configure your browser to block all cookies, delete existing cookies, or notify you when a cookie is being set. Please note that blocking essential cookies may affect website functionality, and some features may not work as intended. You can also opt out of specific analytics cookies by using browser extensions or privacy tools.",
    },
    {
      id: "cookie-duration",
      title: "Cookie Duration & Storage",
      content:
        "Session cookies are automatically deleted when you close your browser. Persistent cookies remain on your device for a set period or until you manually delete them. Essential cookies typically last for the duration of your browsing session. Functionality cookies (such as theme preference) may persist for up to 1 year. Analytics cookies typically expire within 2 years. We regularly review our cookie usage and remove any cookies that are no longer necessary for website operation or improvement.",
    },
    {
      id: "data-collected",
      title: "Information Collected by Cookies",
      content:
        "Cookies used on TechSupport4 may collect the following types of information: your IP address (anonymized where possible), browser type and version, operating system, referring URL, pages visited on our site, time and date of visits, time spent on each page, click patterns and navigation behavior, and device type (desktop, tablet, mobile). This information is used solely for improving website performance, understanding user behavior, and enhancing service quality. We do not use cookies to collect personally identifiable information such as names, email addresses, or payment details.",
    },
    {
      id: "gdpr-ccpa",
      title: "GDPR & CCPA Compliance",
      content:
        "TechSupport4 is committed to complying with the General Data Protection Regulation (GDPR) for users in the European Economic Area and the California Consumer Privacy Act (CCPA) for California residents. Under GDPR, you have the right to access, rectify, delete, and restrict the processing of your personal data, including data collected via cookies. Under CCPA, California residents have the right to know what personal information is collected, request its deletion, and opt out of the sale of personal information. TechSupport4 does not sell personal information collected through cookies. To exercise any of these rights, contact us at support@techsupport4.com.",
    },
    {
      id: "do-not-track",
      title: "Do Not Track (DNT) Signals",
      content:
        "Some browsers include a 'Do Not Track' (DNT) feature that sends a signal to websites indicating that you do not want your browsing activity tracked. There is currently no universally accepted standard for how websites should respond to DNT signals. TechSupport4 respects user privacy and limits tracking to essential analytics. If you prefer not to be tracked, we recommend using browser privacy settings, incognito mode, or installing tracking prevention extensions.",
    },
    {
      id: "manage-cookies",
      title: "How to Manage & Delete Cookies",
      content:
        "You can manage, disable, or delete cookies at any time through your browser settings. Here are instructions for popular browsers: Google Chrome — Settings > Privacy and Security > Cookies and other site data. Mozilla Firefox — Settings > Privacy & Security > Cookies and Site Data. Safari — Preferences > Privacy > Manage Website Data. Microsoft Edge — Settings > Privacy, search, and services > Clear browsing data. For mobile devices, access cookie settings through the browser app's settings menu. Clearing cookies will sign you out of websites and may reset your preferences. For more information, visit your browser's help documentation.",
    },
    {
      id: "updates",
      title: "Changes to This Cookie Policy",
      content:
        "TechSupport4 may update this Cookie Policy periodically to reflect changes in technology, legislation, or our business practices. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy regularly to stay informed about how we use cookies. Continued use of our website after any changes indicates your acceptance of the updated Cookie Policy. If you have questions about our use of cookies, please contact us at support@techsupport4.com.",
    },
  ];

  return <LegalLayout title="Cookie Policy" sections={sections} version="v2.0.0" />;
}
