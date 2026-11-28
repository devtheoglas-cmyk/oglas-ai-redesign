import { pageMetadata } from "@/lib/page-metadata";
import { PageHero } from "@/components/page-hero";
import { staticPageSeo } from "@/content/seo";

const seo = staticPageSeo["/privacy"];

export const metadata = pageMetadata({
  title: "Privacy Policy | Oglas AI",
  description: seo.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Privacy Policy" />
      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[820px] px-4">
          <div className="space-y-12 text-base leading-8 text-steel md:text-lg">
            <p className="text-sm text-steel/80">Last updated: 28 November 2026</p>

            <div>
              <h2 className="text-3xl text-onyx md:text-4xl">Privacy Policy</h2>
              <p className="mt-5">
                Oglas AI respects your privacy. This Privacy Policy explains how
                Oglas AI collects, uses, stores and protects information when you
                visit this website, submit a business enquiry, request a
                consultation or communicate with us about our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Information We Collect</h2>
              <p className="mt-4">
                We may collect information that you choose to provide through the
                website, including your name, email address, phone number, company
                details, project requirements and any other information included in
                your message. We may also receive basic technical information such
                as browser type, device information, approximate location and pages
                visited when you use the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">How We Use Information</h2>
              <p className="mt-4">We may use information to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to enquiries and consultation requests.</li>
                <li>Understand your business requirements and prepare proposals.</li>
                <li>Communicate with you about relevant services and project discussions.</li>
                <li>Improve the website, content and user experience.</li>
                <li>Protect the website and prevent misuse, fraud or security issues.</li>
                <li>Meet applicable legal, regulatory or record-keeping requirements.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Cookies and Analytics</h2>
              <p className="mt-4">
                The website may use cookies or similar technologies to keep the site
                working, understand aggregate website usage and improve performance.
                You can control or block cookies through your browser settings.
                Blocking some cookies may affect parts of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Sharing Information</h2>
              <p className="mt-4">
                We do not sell enquiry information. Information may be shared with
                trusted service providers who help us operate the website, process
                communications, maintain security or deliver requested services.
                These providers may access information only as reasonably required
                for their services and are expected to protect it.
              </p>
              <p className="mt-4">
                We may also disclose information where required by law, to protect
                our rights or the safety of users, or as part of a business
                transaction such as a reorganization, acquisition or sale of assets.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Data Retention and Security</h2>
              <p className="mt-4">
                We retain information only for as long as reasonably necessary for
                the purposes described in this policy, including responding to your
                enquiry, maintaining business records and meeting legal obligations.
                We use reasonable administrative and technical measures to protect
                information, but no internet transmission or storage system can be
                guaranteed to be completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Your Choices and Requests</h2>
              <p className="mt-4">
                You may ask us to provide more information about the personal
                information we hold about you, correct inaccurate information or
                remove enquiry information where appropriate. To make a request,
                contact us at <a className="content-link" href="mailto:admin@oglasglobal.com">admin@oglasglobal.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Third-Party Links</h2>
              <p className="mt-4">
                This website may contain links to third-party websites or services.
                Those websites have their own privacy policies and terms. Oglas AI
                is not responsible for the privacy practices or content of third-party
                websites.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Changes to This Policy</h2>
              <p className="mt-4">
                We may update this Privacy Policy when our website, services or
                legal obligations change. The updated version will be posted on this
                page with a revised date.
              </p>
            </div>

            <div className="border-t border-black/10 pt-12">
              <h2 className="text-3xl text-onyx md:text-4xl">Terms &amp; Conditions</h2>
              <p className="mt-5">
                By using this website, you agree to use it lawfully and in a way
                that does not disrupt the website, compromise security or infringe
                the rights of Oglas AI or others. If you do not agree with these
                terms, please do not use the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Website Content</h2>
              <p className="mt-4">
                The content on this website is provided for general information
                about Oglas AI, its capabilities and its services. Website content
                may change without notice and does not constitute a project quote,
                technical specification, legal advice or guarantee of a particular
                result. Project scope, deliverables, timelines and fees are agreed
                separately in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Intellectual Property</h2>
              <p className="mt-4">
                Unless stated otherwise, website text, graphics, branding, design
                and other materials belong to Oglas AI or its licensors. You may
                view the website for personal or business evaluation, but you may
                not copy, reproduce, republish, modify, distribute or commercially
                exploit website materials without written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Acceptable Use</h2>
              <p className="mt-4">
                You must not use the website to submit unlawful, harmful, abusive,
                misleading or malicious content; attempt unauthorized access; probe
                or test the security of the website; introduce malicious code; or
                interfere with the availability or operation of the website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Disclaimer and Limitation</h2>
              <p className="mt-4">
                The website is provided on an availability basis. To the extent
                permitted by applicable law, Oglas AI does not guarantee that the
                website will always be uninterrupted, error-free or complete. Oglas
                AI will not be responsible for losses arising from reliance on
                general website content, third-party links or temporary website
                unavailability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-onyx md:text-3xl">Contact</h2>
              <p className="mt-4">
                If you have questions about this Privacy Policy or these Terms &amp;
                Conditions, please use our <a className="content-link" href="/contact">contact page</a> or email admin@oglasglobal.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
