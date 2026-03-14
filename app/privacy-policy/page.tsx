import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo-utils'

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Thedeckman LLC. Learn how we collect, use, and protect your personal information.',
  url: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-dark text-wood-light/90">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark/98 backdrop-blur-md border-b border-accent/30 shadow-xl shadow-accent/10">
        <nav className="container-custom py-3">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="The Deck Man"
                width={160}
                height={80}
                className="brightness-0 invert h-14 w-auto"
                priority
              />
            </Link>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-wood-light font-montserrat font-medium hover:text-accent transition-colors"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              Back to Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-16 pb-20">

        <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-wood-light/50 mb-12">Effective Date: March 14, 2026 &nbsp;|&nbsp; Last Updated: March 14, 2026</p>

        <p className="mb-4">
          <strong className="text-white">Thedeckman LLC</strong> (&ldquo;<strong className="text-white">Company</strong>,&rdquo; &ldquo;<strong className="text-white">we</strong>,&rdquo; &ldquo;<strong className="text-white">us</strong>,&rdquo; or &ldquo;<strong className="text-white">our</strong>&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information when you visit <a href="https://thedeckmansd.com" className="text-accent hover:underline">thedeckmansd.com</a> (the &ldquo;<strong className="text-white">Site</strong>&rdquo;) or submit a request through our contact form.
        </p>
        <p className="mb-4">By using the Site or submitting any form, you agree to the practices described in this Privacy Policy.</p>

        <Section title="1. Information We Collect">
          <p className="mb-4">When you fill out our estimate request or contact form, we collect the following information:</p>
          <ul className="ml-5 my-2.5 mb-4 list-disc">
            <li className="mb-1.5"><strong className="text-white">Name</strong> — to identify you and personalize our communications.</li>
            <li className="mb-1.5"><strong className="text-white">Phone number</strong> — to contact you regarding your project inquiry and to send appointment reminders or follow-up messages (see TCPA section below).</li>
            <li className="mb-1.5"><strong className="text-white">Email address</strong> — to respond to your inquiry and send relevant project information.</li>
            <li className="mb-1.5"><strong className="text-white">Zip code</strong> — to verify that your location falls within our service area.</li>
            <li className="mb-1.5"><strong className="text-white">Project description</strong> — details you voluntarily provide about your remodeling or construction project.</li>
          </ul>
          <p className="mb-4">We may also automatically collect certain technical data when you visit the Site, including:</p>
          <ul className="ml-5 my-2.5 mb-4 list-disc">
            <li className="mb-1.5">IP address and general geographic location</li>
            <li className="mb-1.5">Browser type and version</li>
            <li className="mb-1.5">Pages visited and time spent on the Site</li>
            <li className="mb-1.5">Referring website or advertisement</li>
            <li className="mb-1.5">Device type and operating system</li>
          </ul>
          <p className="mb-4">This technical data is collected through cookies and similar tracking technologies (see Section 7).</p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p className="mb-4">We use the information you provide to:</p>
          <ul className="ml-5 my-2.5 mb-4 list-disc">
            <li className="mb-1.5">Contact you to discuss your project and schedule a free estimate;</li>
            <li className="mb-1.5">Send you follow-up communications related to your inquiry;</li>
            <li className="mb-1.5">Improve our website and marketing efforts;</li>
            <li className="mb-1.5">Comply with applicable laws and regulations;</li>
            <li className="mb-1.5">Prevent fraud and protect the security of our business and users.</li>
          </ul>
          <p className="mb-4">We do not sell your personal information to third parties for their own marketing purposes.</p>
        </Section>

        <Section title="3. Consent to Be Contacted — TCPA Notice">
          <div className="bg-accent/10 border-l-4 border-accent p-4 px-5 rounded my-6 text-[0.95rem]">
            <strong className="text-white">Important:</strong> By submitting our contact form, you expressly consent to receive calls and/or text messages (SMS) from Thedeckman LLC and its authorized representatives at the phone number you provide — including calls or texts sent using an automatic telephone dialing system (ATDS) or a prerecorded/artificial voice — for the purpose of discussing your project estimate, scheduling, and related services. You understand that your consent is not a condition of purchase. Message and data rates may apply. You may opt out at any time by replying <strong className="text-white">STOP</strong> to any text message or by notifying us using the contact information in Section 10.
          </div>
          <p className="mb-4">This consent is provided in accordance with the Telephone Consumer Protection Act (TCPA), 47 U.S.C. § 227.</p>
        </Section>

        <Section title="4. How We Share Your Information">
          <p className="mb-4">We may share your personal information with:</p>
          <ul className="ml-5 my-2.5 mb-4 list-disc">
            <li className="mb-1.5"><strong className="text-white">Service providers and subcontractors</strong> — companies we work with to fulfill your project inquiry (e.g., CRM software, email platforms, scheduling tools), who are contractually bound to keep your information confidential.</li>
            <li className="mb-1.5"><strong className="text-white">Business partners</strong> — if we refer your project to a trusted partner contractor in your area, we may share your contact details so they can follow up with you. We will only do so with your knowledge.</li>
            <li className="mb-1.5"><strong className="text-white">Legal requirements</strong> — if required by law, court order, or governmental authority, or to protect the rights, property, or safety of our company or others.</li>
            <li className="mb-1.5"><strong className="text-white">Business transfers</strong> — in connection with a merger, acquisition, or sale of all or substantially all of our assets, your information may be transferred as part of that transaction.</li>
          </ul>
          <p className="mb-4">We do not sell, rent, or trade your personal information to third-party marketers.</p>
        </Section>

        <Section title="5. Email Communications — CAN-SPAM Compliance">
          <p className="mb-4">If we send you marketing or promotional emails, we comply with the CAN-SPAM Act. Each such email will include:</p>
          <ul className="ml-5 my-2.5 mb-4 list-disc">
            <li className="mb-1.5">Our physical mailing address: 35165 Citron Ln, Fallbrook, CA 92028</li>
            <li className="mb-1.5">A clear and conspicuous way to opt out of future emails</li>
            <li className="mb-1.5">Honest subject lines that accurately reflect the content of the email</li>
          </ul>
          <p className="mb-4">You may opt out of marketing emails at any time by clicking the &ldquo;unsubscribe&rdquo; link in any email we send, or by emailing us at <a href="mailto:thedeckmansd@gmail.com" className="text-accent hover:underline">thedeckmansd@gmail.com</a>. Transactional emails related to a specific project inquiry may still be sent.</p>
        </Section>

        <Section title="6. Data Retention">
          <p className="mb-4">We retain your personal information for as long as necessary to fulfill the purposes described in this Policy or as required by law. If you request that we delete your information, we will do so within a reasonable time, except where we are required to retain it for legal or business compliance purposes.</p>
        </Section>

        <Section title="7. Cookies and Tracking Technologies">
          <p className="mb-4">Our Site may use cookies, pixels, and similar technologies to enhance your browsing experience and to analyze Site traffic. These technologies may be set by us or by third-party services we use (such as Google Analytics, Facebook Pixel, or similar advertising platforms).</p>
          <p className="mb-4">You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the Site. For more information about how Google Analytics handles data, visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">policies.google.com/privacy</a>.</p>
        </Section>

        <Section title="8. Your Privacy Rights">
          <p className="mb-4">Depending on your state of residence, you may have certain rights regarding your personal information:</p>
          <p className="mb-4"><strong className="text-white">California Residents (CCPA / CPRA):</strong> You have the right to:</p>
          <ul className="ml-5 my-2.5 mb-4 list-disc">
            <li className="mb-1.5">Know what personal information we collect, use, share, or sell;</li>
            <li className="mb-1.5">Request deletion of your personal information;</li>
            <li className="mb-1.5">Opt out of the sale or sharing of your personal information (we do not sell your data);</li>
            <li className="mb-1.5">Non-discrimination for exercising your privacy rights.</li>
          </ul>
          <p className="mb-4">To submit a request, contact us at <a href="mailto:thedeckmansd@gmail.com" className="text-accent hover:underline">thedeckmansd@gmail.com</a> or <a href="tel:+14423789771" className="text-accent hover:underline">(442) 378-9771</a>. We will respond within 45 days.</p>
          <p className="mb-4"><strong className="text-white">Virginia, Colorado, Connecticut, and other state residents</strong> may have similar rights under applicable state law. Contact us to exercise any applicable rights.</p>
        </Section>

        <Section title="9. Third-Party Links">
          <p className="mb-4">Our Site may contain links to third-party websites (e.g., social media profiles, review platforms). We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policy of any third-party site you visit.</p>
        </Section>

        <Section title="10. Children&rsquo;s Privacy">
          <p className="mb-4">Our Site is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If we learn that we have inadvertently collected information from a child under 13, we will promptly delete it.</p>
        </Section>

        <Section title="11. Security">
          <p className="mb-4">We take reasonable technical and administrative measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="12. Changes to This Privacy Policy">
          <p className="mb-4">We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last Updated&rdquo; date at the top. Your continued use of the Site after any changes constitutes your acceptance of the updated Policy. We encourage you to review this Policy periodically.</p>
        </Section>

        <Section title="13. Contact Us">
          <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
          <p className="mb-4">
            <strong className="text-white">Thedeckman LLC</strong><br />
            35165 Citron Ln, Fallbrook, CA 92028<br />
            Phone: <a href="tel:+14423789771" className="text-accent hover:underline">(442) 378-9771</a><br />
            Email: <a href="mailto:thedeckmansd@gmail.com" className="text-accent hover:underline">thedeckmansd@gmail.com</a>
          </p>
        </Section>

        <footer className="mt-16 pt-5 border-t border-accent/20 text-sm text-wood-light/40 text-center">
          &copy; 2026 Thedeckman LLC. All rights reserved.
        </footer>

      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-lg font-bold text-white mt-10 mb-2.5 pb-1.5 border-b-2 border-accent/20">{title}</h2>
      {children}
    </>
  )
}
