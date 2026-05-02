import { useState } from "react";

const faqs = [
  {
    q: "How does the Olive Food Scanner work?",
    a: "Simply scan any product barcode with your phone camera. Olive instantly analyzes the ingredients against our comprehensive database and flags any harmful additives, allergens, or controversial substances.",
  },
  {
    q: "Is Olive available on Android?",
    a: "Olive is currently available on iOS. An Android version is in development and will be released soon.",
  },
  {
    q: "How often is the ingredient database updated?",
    a: "Our database is updated in real-time as new research and regulatory changes emerge, ensuring you always have the most current information.",
  },
  {
    q: "Can I use Olive for my whole family?",
    a: "Yes. You can create personalized profiles for each family member with their specific dietary needs, allergies, and health goals.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. We never sell your data to third parties. Your scan history and health profiles are encrypted and stored securely.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#fdf8f0] py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center leading-tight">
            Frequently Asked<br />Questions by Parents
          </h2>
          <img
            src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png"
            alt="mascot"
            className="w-16 h-16 object-contain flex-shrink-0"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-0 divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-gray-800 font-medium text-base">{faq.q}</span>
                <span className="text-gray-400 text-xl flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
