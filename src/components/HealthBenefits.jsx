export default function HealthBenefits() {
  return (
    <section className="bg-[#3d5a1e] px-6 pt-24 pb-0">
      <div className="max-w-6xl mx-auto">

        {/* Top: heading left, text+button right */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 mb-20">
          <h2 className="text-5xl font-light text-white leading-tight md:w-1/2">
            Health Benefits of Using Olive
          </h2>
          <div className="md:w-1/2 flex flex-col items-start gap-6">
            <p className="text-white/80 text-lg leading-relaxed">
              Olive proactively flags harmful ingredients and offers personalized
              recommendations, empowering you to make better choices for your
              family's health.
            </p>
            <button className="flex items-center gap-2 bg-white text-[#3d5a1e] font-medium px-6 py-3 rounded-full hover:bg-[#f0f4e8] transition text-sm">
              🍎 Download for iOS
            </button>
          </div>
        </div>

        {/* White card — overlaps into next section */}
        <div className="bg-white rounded-t-3xl px-10 pt-10 pb-0 flex flex-col md:flex-row gap-0 min-h-64">
          {/* Left: title + checklist */}
          <div className="md:w-1/2 pb-10">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">
              Achieve Nutritional Clarity
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#3d5a1e] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                Olive breaks down every ingredient into easy-to-understand information.
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#3d5a1e] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                Get instant alerts on harmful additives and allergens.
              </li>
              <li className="flex items-start gap-3 text-gray-600 text-sm">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#3d5a1e] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                Personalized recommendations based on your family's dietary needs.
              </li>
            </ul>
          </div>

          {/* Right: light green image panel */}
          <div className="md:w-1/2 bg-[#f0f4e8] rounded-2xl flex items-center justify-center p-8 mb-0">
            <div className="flex gap-2 items-end">
              <div className="w-24 h-32 rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center text-5xl -rotate-6">🥛</div>
              <div className="w-28 h-36 rounded-xl bg-gray-300 overflow-hidden flex items-center justify-center text-6xl z-10">🍓</div>
              <div className="w-24 h-32 rounded-xl bg-gray-200 overflow-hidden flex items-center justify-center text-5xl rotate-6">🍦</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
