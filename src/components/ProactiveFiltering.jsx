const goodTags = ["Low PFAS", "Organic Ingredients", "Cholesterol-Free", "100% Whole Grain", "Plant Based"];
const badTags = ["Potassium Sorbate", "Monosodium Glutamate", "Aspartame", "Potassium Bromate", "Sodium Benzoate", "Palm Oil", "Saccharin", "TBHQ", "MSG", "Xanthan Gum"];

export default function ProactiveFiltering() {
  return (
    <>
      <style>{`
        @keyframes floatTag {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <section className="bg-[#f0f4e8] py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-start">

            {/* Left */}
            <div className="md:w-1/2 flex flex-col justify-between min-h-[420px]">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8">Proactive Ingredient Filtering</h3>
              <ul className="space-y-5 mt-auto">
                {[
                  "Olive flags harmful additives and controversial ingredients before they become mainstream concerns.",
                  "Keeps you ahead of potential food safety concerns.",
                  "Gives busy parents the confidence to make safer food choices every time.",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                    <span className="mt-0.5 w-6 h-6 rounded-full bg-[#2a3d14] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - pink panel */}
            <div className="md:w-1/2 bg-[#fce8e8] rounded-2xl p-6 relative overflow-hidden min-h-[420px]">
              <div className="flex flex-wrap gap-3">
                {goodTags.map((tag, i) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 bg-white rounded-full px-4 py-2 text-sm text-gray-800 shadow-sm font-medium"
                    style={{ animation: `floatTag ${2 + i * 0.3}s ease-in-out infinite`, animationDelay: `${i * 0.2}s` }}
                  >
                    <span className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs">✓</span>
                    {tag}
                  </span>
                ))}
                {badTags.map((tag, i) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 bg-white rounded-full px-4 py-2 text-sm text-gray-800 shadow-sm font-medium"
                    style={{ animation: `floatTag ${2.5 + i * 0.25}s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }}
                  >
                    <span className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs">✕</span>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
