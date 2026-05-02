const rows = [
  { feature: "Detailed Product Breakdown",      olive: true,  yuka: true,  busted: true  },
  { feature: "Comprehensive Water Data",         olive: true,  yuka: false, busted: false },
  { feature: "Seed Oil Free Dining Map",         olive: true,  yuka: false, busted: false },
  { feature: "Seed Oil Flagging",                olive: true,  yuka: false, busted: true  },
  { feature: "Certified Lab-Testing Data",       olive: true,  yuka: false, busted: false },
];

function Check({ yes }) {
  return yes ? (
    <div className="w-8 h-8 rounded-full bg-[#8aab3c] flex items-center justify-center mx-auto">
      <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" /></svg>
    </div>
  ) : (
    <div className="flex items-center justify-center mx-auto w-8 h-8">
      <svg viewBox="0 0 20 20" fill="#ef4444" className="w-7 h-7"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-[#eef3e2] py-10 px-6">
      <div className="max-w-5xl mx-auto bg-[#3d5a1e] rounded-3xl px-10 py-14">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-white text-center leading-tight mb-8">
          Olive Food Scanner App<br />vs. The Rest
        </h2>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <button className="flex items-center gap-2 bg-white text-[#3d5a1e] font-medium px-10 py-3 rounded-full text-sm hover:bg-[#f0f4e8] transition">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download for iOS
          </button>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* App icons header */}
          <div className="grid grid-cols-4 mb-8 border-b border-white/20 pb-6">
            <div />
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-[#6b8f3e] border-2 border-white/30 flex items-center justify-center text-2xl overflow-hidden">
                <img src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png" alt="olive" className="w-8 h-8 object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl overflow-hidden">
                <img src="https://em-content.zobj.net/source/apple/354/carrot_1f955.png" alt="yuka" className="w-8 h-8 object-contain" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-bold text-lg">B</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 py-6 items-center ${i < rows.length - 1 ? "border-b border-white/20" : ""}`}
            >
              <span className="text-white/90 text-sm font-light">{row.feature}</span>
              <div className="flex justify-center"><Check yes={row.olive} /></div>
              <div className="flex justify-center"><Check yes={row.yuka} /></div>
              <div className="flex justify-center"><Check yes={row.busted} /></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
