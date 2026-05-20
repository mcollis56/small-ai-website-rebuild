import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Lunar Almanac | small-ai',
  description: 'Privacy Policy for the Lunar Almanac iOS app by small-ai.',
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-24 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-[#BDBDBD] mb-12">
        Lunar Almanac &mdash; Effective date: 20 May 2026
      </p>

      <div className="space-y-10 text-[#D1D5DB] leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Overview</h2>
          <p>
            Lunar Almanac is an iOS app published by small-ai (Air Message Pty Ltd, ABN 35 617 317 576).
            We are committed to protecting your privacy. This policy explains what data is collected
            when you use Lunar Almanac and how it is handled.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Data We Collect</h2>
          <p className="mb-4">
            Lunar Almanac itself does not collect, store, or transmit any personal information.
            We do not operate servers that receive your data, and we do not track usage behaviour.
          </p>
          <p>
            The following data may be collected by Apple and RevenueCat on our behalf as part
            of standard iOS app infrastructure:
          </p>
          <ul className="mt-3 space-y-2 list-none pl-0">
            <li>
              <span className="text-white font-medium">Apple:</span> Purchase receipts, App Store
              analytics (if you opt in to sharing with developers), and crash reports. This data
              is governed by{' '}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c96a3b] hover:underline"
              >
                Apple&apos;s Privacy Policy
              </a>
              .
            </li>
            <li>
              <span className="text-white font-medium">RevenueCat:</span> Subscription and
              purchase status, anonymised device identifiers used to verify entitlements. RevenueCat
              does not receive your name, email, or payment details. See the{' '}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c96a3b] hover:underline"
              >
                RevenueCat Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Subscription Management</h2>
          <p>
            In-app purchases and subscriptions are processed entirely by Apple through the
            App Store. We never see or store your payment details. You can manage or cancel
            your subscription at any time in{' '}
            <span className="text-white">Settings &rarr; Apple ID &rarr; Subscriptions</span>{' '}
            on your iPhone, or via your Apple ID account page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Data Sharing</h2>
          <p>
            We do not sell, rent, or share your data with third parties beyond Apple and
            RevenueCat, as described above. We have no advertising partners and do not use
            any third-party analytics SDKs inside the app.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Children&apos;s Privacy</h2>
          <p>
            Lunar Almanac is not directed at children under 13. We do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be reflected on this
            page with an updated effective date. Continued use of the app after changes are
            posted constitutes acceptance of the revised policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-white mb-3">Contact</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{' '}
            <a href="mailto:info@small-ai.com" className="text-[#c96a3b] hover:underline">
              info@small-ai.com
            </a>
            .
          </p>
          <p className="mt-3 text-sm text-[#BDBDBD]">
            Air Message Pty Ltd &mdash; ABN 35 617 317 576
          </p>
        </section>

      </div>
    </div>
  )
}
