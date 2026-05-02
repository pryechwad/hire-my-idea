import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Scan & Detect",
    desc: "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive's intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
  },
  {
    title: "Data Analysis & Validation",
    desc: "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
  },
  {
    title: "Actionable Insights & Recommendations",
    desc: "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
  },
];

function ScanCard() {
  return (
    <div className="relative flex items-center justify-center h-44 w-full">
      {/* Scanner corners */}
      <div className="absolute top-4 left-8 w-7 h-7 border-t-[3px] border-l-[3px] border-gray-500 rounded-tl-md" />
      <div className="absolute top-4 right-8 w-7 h-7 border-t-[3px] border-r-[3px] border-gray-500 rounded-tr-md" />
      <div className="absolute bottom-4 left-8 w-7 h-7 border-b-[3px] border-l-[3px] border-gray-500 rounded-bl-md" />
      <div className="absolute bottom-4 right-8 w-7 h-7 border-b-[3px] border-r-[3px] border-gray-500 rounded-br-md" />

      {/* Avocado */}
      <span className="text-6xl select-none" style={{ animation: "float 3s ease-in-out infinite" }}>🥑</span>

      {/* Scan line */}
      <div
        className="absolute left-10 right-10 h-0.5 bg-gray-700 rounded opacity-80"
        style={{ animation: "scanline 2s ease-in-out infinite" }}
      />

      {/* Sparkles */}
      <span className="absolute top-8 left-12 text-gray-400 text-xs" style={{ animation: "twinkle 1.5s ease-in-out infinite" }}>✦</span>
      <span className="absolute top-14 left-10 text-gray-400 text-xs" style={{ animation: "twinkle 2s ease-in-out infinite 0.3s" }}>✦</span>
      <span className="absolute top-10 right-12 text-gray-400 text-xs" style={{ animation: "twinkle 1.8s ease-in-out infinite 0.6s" }}>✦</span>
    </div>
  );
}

function AnalysisCard() {
  return (
    <div className="flex flex-col items-center justify-center h-44 gap-4">
      <div className="flex gap-2 items-center">
        <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center text-3xl"
          style={{ animation: "fadeSlide 2s ease-in-out infinite" }}>🥫</div>
        <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center text-4xl shadow-sm"
          style={{ animation: "fadeSlide 2s ease-in-out infinite 0.3s" }}>🥫</div>
        <div className="w-14 h-14 rounded-xl bg-white/60 flex items-center justify-center text-3xl"
          style={{ animation: "fadeSlide 2s ease-in-out infinite 0.6s" }}>🥫</div>
      </div>
      <div
        className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 shadow text-sm font-medium text-gray-700"
        style={{ animation: "popIn 2s ease-in-out infinite 0.8s" }}
      >
        <span className="text-[#3d5a1e]">✔</span> Safe to consume
      </div>
    </div>
  );
}

function InsightsCard() {
  return (
    <div className="relative flex items-center justify-center h-44">
      {/* Top label */}
      <div
        className="absolute top-2 left-4 right-4 bg-white rounded-lg shadow px-3 py-1 text-xs text-gray-500 text-center"
        style={{ animation: "slideDown 3s ease-in-out infinite" }}
      >
        Lentil &amp; Spinach Soup
      </div>

      {/* Stacked product images */}
      <div className="flex gap-1 items-end mt-4">
        <div className="w-14 h-20 rounded-xl bg-white/60 flex items-center justify-center text-3xl"
          style={{ transform: "rotate(-8deg)", animation: "float 3s ease-in-out infinite 0.2s" }}>🥗</div>
        <div className="w-16 h-24 rounded-xl bg-white flex items-center justify-center text-4xl shadow z-10"
          style={{ animation: "float 3s ease-in-out infinite" }}>🥩</div>
        <div className="w-14 h-20 rounded-xl bg-white/60 flex items-center justify-center text-3xl"
          style={{ transform: "rotate(8deg)", animation: "float 3s ease-in-out infinite 0.4s" }}>🥦</div>
      </div>

      {/* Bottom label */}
      <div
        className="absolute bottom-2 left-4 right-4 bg-white rounded-lg shadow px-3 py-1 text-xs text-gray-500 text-center"
        style={{ animation: "slideUp 3s ease-in-out infinite 0.5s" }}
      >
        Dairy free
      </div>
    </div>
  );
}

const visuals = [<ScanCard />, <AnalysisCard />, <InsightsCard />];

export default function HowItWorks() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes scanline {
          0% { top: 30%; }
          50% { top: 70%; }
          100% { top: 30%; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes fadeSlide {
          0%, 100% { opacity: 0.5; transform: translateY(4px); }
          50% { opacity: 1; transform: translateY(0); }
        }
        @keyframes popIn {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes slideDown {
          0%, 100% { transform: translateY(-4px); opacity: 0.7; }
          50% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
          0%, 100% { transform: translateY(4px); opacity: 0.7; }
          50% { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* Centered heading with avocado to the right */}
          <div className="flex items-start justify-center gap-4 mb-16">
            <h2 className="text-5xl font-light text-gray-800 leading-tight text-center">
              How the Olive Food<br />Scanner App Works
            </h2>
            <img
              src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png"
              alt="avocado"
              className="w-20 h-20 object-contain flex-shrink-0"
            />
          </div>

          {/* 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="bg-[#f0f4e8] rounded-2xl p-6 flex flex-col">
                <h3 className="text-base font-semibold text-gray-800 mb-2">{step.title}</h3>
                {visuals[i]}
                <p className="text-gray-500 text-sm leading-relaxed mt-3">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
