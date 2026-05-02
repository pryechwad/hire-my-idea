const rows = [
  { feature: "Detailed Product Breakdown", olive: true, yuka: true, busted: true },
  { feature: "Comprehensive Water Data", olive: true, yuka: false, busted: false },
  { feature: "Proactive Ingredient Filtering", olive: true, yuka: false, busted: false },
  { feature: "Personalized Family Profiles", olive: true, yuka: false, busted: false },
  { feature: "Real-time Database Updates", olive: true, yuka: true, busted: false },
  { feature: "Holistic Health Expert Guidance", olive: true, yuka: false, busted: false },
];

function Check({ yes }) {
  return yes ? (
    <span className="w-8 h-8 rounded-full bg-[#6b8f3e] flex items-center justify-center text-white text-sm mx-auto">✓</span>
  ) : (
    <span className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-sm mx-auto">✕</span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-[#f0f4e8] py-10 px-6">
      <div className="max-w-5xl mx-auto bg-[#3d5a1e] rounded-3xl px-10 py-14">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light text-white text-center leading-tight mb-8">
          Olive Food Scanner App<br />vs. The Rest
        </h2>

        {/* CTA */}
        <div className="flex justify-center mb-12">
          <button className="flex items-center gap-2 bg-white text-[#3d5a1e] font-medium px-8 py-3 rounded-full text-sm hover:bg-[#f0f4e8] transition">
            🍎 Download for iOS
          </button>
        </div>

        {/* Table */}
        <div className="w-full">
          {/* App icons header */}
          <div className="grid grid-cols-4 mb-6">
            <div />
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-[#6b8f3e] flex items-center justify-center text-2xl">🥑</div>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-2xl">🥕</div>
            </div>
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white font-bold text-lg">B</div>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 py-4 items-center ${i < rows.length - 1 ? "border-b border-white/20" : ""}`}
            >
              <span className="text-white/90 text-sm">{row.feature}</span>
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
