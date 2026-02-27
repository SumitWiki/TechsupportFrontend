import LegalLayout from "../../components/LegalLayout";

export const metadata = {
  title: "Disclaimer | TechSupport4",
  description:
    "Legal disclaimer regarding TechSupport4 remote support services, trademark usage, and third-party affiliations.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {

  const sections = [
    {
      id: "independent-service",
      title: "Independent Service Provider",
      content:
        "TechSupport4 is an independent technical support provider. We are not affiliated with, endorsed by, or sponsored by any third-party hardware or software manufacturers, internet service providers, or technology companies. Any brand names, logos, trademarks, or product names mentioned on this website are used solely for identification and reference purposes. Our technicians provide independent troubleshooting and support services based on publicly available knowledge, industry best practices, and professional expertise. We do not claim to be authorized representatives or official service partners of any third-party companies unless explicitly stated.",
    },
    {
      id: "trademarks",
      title: "Trademarks & Intellectual Property",
      content:
        "All logos, trademarks, trade names, service marks, and brand identifiers mentioned on this website are the property of their respective owners. This includes but is not limited to names such as HP, Canon, Epson, Brother, Microsoft, Apple, Google, Netgear, TP-Link, Linksys, Asus, Samsung, LG, Sony, Roku, Amazon, and any other brands referenced on our site. The use of these names does not imply any affiliation, endorsement, or partnership. TechSupport4 respects the intellectual property rights of all third parties and expects the same from its users and visitors.",
    },
    {
      id: "no-guarantee",
      title: "No Guarantee of Results",
      content:
        "While TechSupport4 strives to resolve every technical issue efficiently, we do not guarantee that every problem can be resolved. The outcome of technical support depends on multiple factors including the nature of the issue, the condition of the customer's hardware, software compatibility, internet connectivity, and the customer's ability to follow instructions. Some issues may require physical hardware repair, manufacturer intervention, or professional on-site service that is beyond the scope of remote support. We provide our best professional effort and will clearly communicate if a particular issue falls outside our area of expertise.",
    },
    {
      id: "website-accuracy",
      title: "Website Content Accuracy",
      content:
        "The information provided on this website, including troubleshooting guides, blog articles, service descriptions, and FAQ answers, is published in good faith and intended for general informational purposes. We make every effort to keep content accurate, current, and up-to-date; however, technology evolves rapidly, and some information may become outdated over time. TechSupport4 does not warrant the completeness, reliability, or accuracy of any content on this website. Users should verify critical information independently and consult official manufacturer documentation when necessary. We are not liable for any errors, omissions, or outdated information.",
    },
    {
      id: "external-links",
      title: "External Links & Third-Party Resources",
      content:
        "Our website may contain links to external websites, third-party tools, or resources that we believe may be helpful to our visitors. These links are provided for convenience and informational purposes only. TechSupport4 does not control, endorse, or assume responsibility for the content, privacy policies, or practices of any third-party websites. Visiting external links is at the user's own risk. We recommend reviewing the terms of service and privacy policies of any third-party sites before sharing personal information or downloading software.",
    },
    {
      id: "liability-limitation",
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by applicable law, TechSupport4, its owners, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising from or related to the use of our services, website, or any content provided herein. This includes, without limitation, damages for loss of data, loss of profits, business interruption, or any other commercial or personal damages or losses. Our maximum aggregate liability for any claim shall not exceed the total amount paid by the customer for the specific service that gave rise to the claim.",
    },
    {
      id: "remote-access-risks",
      title: "Remote Access Disclaimer",
      content:
        "Remote technical support requires temporary access to the customer's computer or device. By authorizing a remote session, the customer acknowledges and accepts the inherent risks associated with granting remote access. TechSupport4 uses industry-standard encryption and secure connection protocols to protect customer data during sessions. However, we are not responsible for pre-existing security vulnerabilities, malware infections, or issues caused by third-party software already installed on the customer's device. Customers should ensure they have current backups of important data before initiating any remote support session.",
    },
    {
      id: "pricing-changes",
      title: "Pricing & Service Changes",
      content:
        "TechSupport4 reserves the right to modify service offerings, pricing, and promotional terms at any time without prior notice. All prices and service descriptions are subject to change. Service charges are communicated to the customer before any work begins, and payment constitutes acknowledgment and acceptance of the stated fees. Promotional offers are valid only for the duration specified and may be subject to additional terms and conditions. Historical pricing does not guarantee future rates.",
    },
    {
      id: "user-responsibility",
      title: "User Responsibility",
      content:
        "By using our services or visiting our website, you agree that you are solely responsible for the decisions you make based on the information or support provided. TechSupport4 provides professional technical assistance, but the final decision to implement any changes, install software, or modify system settings rests entirely with the user. We strongly recommend creating system restore points and backing up important files before making any changes to your device. Users are also responsible for maintaining the security of their own devices, including keeping antivirus software updated and using strong, unique passwords.",
    },
    {
      id: "changes-disclaimer",
      title: "Changes to This Disclaimer",
      content:
        "TechSupport4 reserves the right to update, modify, or replace any part of this disclaimer at any time. Changes become effective immediately upon being posted on this page. It is your responsibility to check this page periodically for updates. Continued use of our website or services after any changes to this disclaimer constitutes your acceptance of the revised terms. If you do not agree with any part of this disclaimer, we recommend discontinuing use of our website and services.",
    },
  ];

  return <LegalLayout title="Disclaimer" sections={sections} />;
}
