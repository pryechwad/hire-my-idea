import { useState } from "react";

const faqs = [
  { q: "What is the Food Scanner App and how does it work?", a: "Simply open Olive and scan any product barcode. The app instantly analyzes ingredients against our comprehensive database and flags harmful additives, allergens, or controversial substances in seconds." },
  { q: "How does Olive ensure the accuracy of the Food Scanner App results?", a: "Our database is maintained by nutrition experts and updated in real-time as new research and regulatory changes emerge, ensuring you always have the most accurate information." },
  { q: "Which products can I scan with the Food Scanner App?", a: "You can scan any packaged food product with a barcode available in the US market. Our database covers hundreds of thousands of products across all major grocery categories." },
  { q: "Can the Food Scanner App be customized to my family's dietary needs?", a: "Yes. You can create personalized profiles for each family member with their specific dietary needs, allergies, and health goals for tailored recommendations." },
  { q: "Is my data secure when I use the Olive?", a: "Absolutely. We never sell your data to third parties. Your scan history and health profiles are encrypted and stored securely on our servers." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#fdf6e8] py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading row */}
        <div className="relative flex items-start justify-center mb-6">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 text-center leading-tight">
            Frequently Asked<br />Questions by Parents
          </h2>
          <img
            src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png"
            alt="mascot"
            className="absolute -top-4 right-0 w-20 h-20 object-contain"
          />
        </div>

        {/* Download button */}
        <div className="flex justify-center mb-14">
          <button className="flex items-center gap-2 bg-[#2a3d14] text-white font-medium px-8 py-4 rounded-full text-sm hover:bg-[#3d5a1e] transition">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download for iOS
          </button>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-gray-300 border-t border-gray-300">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full flex items-center justify-between py-6 text-left gap-6"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-gray-700 text-base">{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-[#2a3d14] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg leading-none">{open === i ? "−" : "+"}</span>
                </div>
              </button>
              {open === i && (
                <p className="pb-6 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
