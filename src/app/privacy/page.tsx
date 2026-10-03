import type { Metadata } from "next";
import { ReactNode } from "react";
import { Section, SectionLabel } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy - Tresto",
  description:
    "How Tresto collects, uses, shares and deletes personal data, including WhatsApp messages processed through Meta's WhatsApp Business Platform.",
};

const LAST_UPDATED = "4 October 2026";
const CONTACT_EMAIL = "hitesh.mehta638@gmail.com";
const CONTACT_PHONE = "+91 99166 68331";
const CONTACT_PHONE_HREF = "tel:+919916668331";

const sections = [
  { id: "who-we-are", title: "Who we are" },
  { id: "data-we-collect", title: "Data we collect" },
  { id: "how-we-use-it", title: "Why we use it" },
  { id: "sharing", title: "Sharing with Meta and other providers" },
  { id: "opt-out", title: "Opting out of messages" },
  { id: "retention", title: "How long we keep data" },
  { id: "deletion", title: "Deleting your data" },
  { id: "your-rights", title: "Your rights" },
  { id: "security", title: "Security" },
  { id: "children", title: "Children" },
  { id: "changes", title: "Changes to this policy" },
  { id: "contact", title: "Contact us" },
];

function PolicySection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-[90px] border-t border-border-light pt-8">
      <h2 className="font-display text-xl font-bold text-ink md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-4 text-[15px] leading-[1.7] text-text-strong [&_a]:font-medium [&_a]:text-violet [&_a:hover]:underline [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

/** Public privacy policy — linked from the footer and used as the Privacy Policy URL for Meta's WhatsApp Business Platform. */
export default function PrivacyPage() {
  return (
    <Section bg="white" className="hero-offset-top">
      <SectionLabel>Legal</SectionLabel>
      <h1 className="mt-2 text-section-title text-ink">Privacy Policy</h1>
      <p className="mt-3 text-sm text-text-faint">Last updated: {LAST_UPDATED}</p>
      <p className="mt-6 max-w-3xl text-base leading-[1.7] text-text-muted">
        This policy explains what personal data Tresto collects when you contact us through our website or
        message us on WhatsApp, why we use it, who we share it with, and how you can stop messages or ask us
        to delete your data.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[240px_1fr]">
        <nav aria-label="On this page" className="lg:sticky lg:top-[110px] lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.06em] text-text-faint">On this page</p>
          <ol className="mt-4 space-y-2.5 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-text-muted hover:text-violet">
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="max-w-3xl space-y-10">
          <PolicySection id="who-we-are" title="Who we are">
            <p>
              Tresto (TRESTO.IO, a proprietorship; &ldquo;Tresto&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a software and AI automation
              studio based in India. We are responsible for the personal data described in this policy.
            </p>
            <ul>
              <li>
                Registered office: TRESTO.IO (Proprietorship), House No. 520, Rajeev Nagar, Mandi Dabwali, Sirsa, Haryana
                125104, India
              </li>
              <li>Email: {mail}</li>
              <li>
                Phone / WhatsApp: <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
              </li>
            </ul>
          </PolicySection>

          <PolicySection id="data-we-collect" title="Data we collect">
            <p>We collect only what we need to talk to you and serve you:</p>
            <ul>
              <li>
                <strong>Contact details:</strong> your name and phone number, and your email address if you give
                it to us.
              </li>
              <li>
                <strong>WhatsApp messages:</strong> the messages, media and replies you send to us on WhatsApp,
                along with message timestamps and delivery/read status.
              </li>
              <li>
                <strong>Website enquiries:</strong> what you enter in our contact form (name, email, phone,
                project details) and whether you opted in to WhatsApp updates.
              </li>
              <li>
                <strong>Preferences:</strong> whether you have opted in to or out of marketing messages.
              </li>
              <li>
                <strong>Basic technical data:</strong> standard server logs (such as IP address and browser
                type) created when you visit our website.
              </li>
            </ul>
          </PolicySection>

          <PolicySection id="how-we-use-it" title="Why we use it">
            <ul>
              <li>
                <strong>Replying to you</strong>: answering your questions and enquiries on WhatsApp, email or
                phone.
              </li>
              <li>
                <strong>Running our chatbot</strong>: our automated WhatsApp assistant reads your messages so it
                can reply instantly and pass the conversation to a person when needed.
              </li>
              <li>
                <strong>Sending updates</strong>: service updates, appointment or order information, and other
                messages related to what you asked us for.
              </li>
              <li>
                <strong>Sending campaigns</strong>: offers and announcements, only if you have opted in. You can
                opt out at any time (see below).
              </li>
              <li>
                <strong>Keeping things working</strong>: preventing spam and abuse, fixing problems, and meeting
                our legal obligations.
              </li>
            </ul>
            <p>We do not sell your personal data.</p>
          </PolicySection>

          <PolicySection id="sharing" title="Sharing with Meta and other providers">
            <p>
              Our WhatsApp messages are sent and received through <strong>Meta&apos;s WhatsApp Business
              Platform</strong>. This means your phone number and the content of messages you exchange with us
              are processed by Meta Platforms, Inc. and its affiliates (including WhatsApp LLC) to deliver them.
              Meta&apos;s handling of this data is covered by the{" "}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                WhatsApp Privacy Policy
              </a>{" "}
              and the{" "}
              <a href="https://www.whatsapp.com/legal/business-terms" target="_blank" rel="noopener noreferrer">
                WhatsApp Business Terms
              </a>
              .
            </p>
            <p>We also share data with service providers that help us run our services, only as needed:</p>
            <ul>
              <li>Cloud hosting and database providers that store our data and run our applications.</li>
              <li>Email delivery providers that send our replies and notifications.</li>
              <li>AI service providers that help our chatbot understand and answer messages.</li>
            </ul>
            <p>
              These providers may process data outside India. They may only use it to provide their service to
              us. We may also disclose data where the law requires it.
            </p>
          </PolicySection>

          <PolicySection id="opt-out" title="Opting out of messages">
            <p>
              You can stop marketing messages at any time by replying <strong>STOP</strong> to any of our
              WhatsApp messages. Our system records this automatically and stops sending you marketing
              campaigns straight away.
            </p>
            <p>
              We may still reply when you message us, and send messages you need about a service you asked for.
              You can also block our number in WhatsApp, or email {mail} to opt out.
            </p>
          </PolicySection>

          <PolicySection id="retention" title="How long we keep data">
            <p>
              We keep your data only as long as we need it for the purposes above, for example while we are
              talking to you or providing a service, and then for as long as the law requires. After that we
              delete or anonymise it. We keep a record of your opt-out so that we don&apos;t message you again.
            </p>
          </PolicySection>

          <PolicySection id="deletion" title="Deleting your data">
            <p>To ask us to delete your data:</p>
            <ul>
              <li>
                Email {mail} or <a href="mailto:hitesh@tresto.io">hitesh@tresto.io</a> with the subject <strong>&ldquo;Data deletion request&rdquo;</strong> and include
                the phone number you used to message us.
              </li>
              <li>Or send us a WhatsApp message asking for your data to be deleted.</li>
            </ul>
            <p>
              We may ask you to confirm the request comes from you. We will delete your name, phone number,
              messages and other personal data from our systems within 30 days, and confirm when it&apos;s
              done. We may keep a minimal record where the law requires it, or to honour your opt-out.
            </p>
          </PolicySection>

          <PolicySection id="your-rights" title="Your rights">
            <p>
              Under India&apos;s Digital Personal Data Protection Act, 2023 and other applicable laws, you can
              ask to access, correct or delete your personal data, withdraw your consent, and raise a complaint
              about how we handle it. Email {mail} and we will respond within 30 days.
            </p>
          </PolicySection>

          <PolicySection id="security" title="Security">
            <p>
              We use reasonable technical and organisational measures, such as encrypted connections and
              restricted access, to protect your data. No system is completely secure, but we work to keep your
              data safe and will act promptly if something goes wrong.
            </p>
          </PolicySection>

          <PolicySection id="children" title="Children">
            <p>
              Our services are not meant for children under 18, and we do not knowingly collect their data. If
              you believe a child has sent us personal data, email {mail} and we will delete it.
            </p>
          </PolicySection>

          <PolicySection id="changes" title="Changes to this policy">
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows
              when it last changed.
            </p>
          </PolicySection>

          <PolicySection id="contact" title="Contact us">
            <p>For any privacy question, request or complaint, contact Tresto:</p>
            <ul>
              <li>Email: {mail}</li>
              <li>
                Phone / WhatsApp: <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE}</a>
              </li>
              <li>
                Post: TRESTO.IO (Proprietorship), House No. 520, Rajeev Nagar, Mandi Dabwali, Sirsa, Haryana 125104, India
              </li>
            </ul>
          </PolicySection>
        </div>
      </div>
    </Section>
  );
}
