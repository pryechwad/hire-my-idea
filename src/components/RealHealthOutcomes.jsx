export default function RealHealthOutcomes() {
  return (
    <section className="bg-[#f0f4e8] py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl p-10 flex flex-col md:flex-row gap-10 items-start">

          {/* Left */}
          <div className="md:w-1/2 flex flex-col justify-between min-h-[420px]">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Real Health Outcomes for Your Family</h3>
            <ul className="space-y-5 mt-auto">
              {[
                "Empowers parents to feel more in control of their family's health.",
                "Delivers personalized suggestions for healthier food choices.",
                "Promotes long-term well-being through informed, balanced decisions.",
              ].map((text) => (
                <li key={text} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-[#2a3d14] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - warm yellow panel with avocado family */}
          <div className="md:w-1/2 bg-[#fdf6e3] rounded-2xl flex items-center justify-center min-h-[420px] relative overflow-hidden">
            {/* Kitchen background tiles */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 gap-1 p-4 h-full">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="bg-[#c8b89a] rounded-sm" />
                ))}
              </div>
            </div>
            {/* Avocado family */}
            <div className="relative flex items-end justify-center gap-2 pb-4">
              {/* Dad - tall with hat */}
              <div className="flex flex-col items-center" style={{ animation: "float 3s ease-in-out infinite" }}>
                <div className="text-xs mb-1">🎩</div>
                <div className="text-7xl">🥑</div>
              </div>
              {/* Mom - with bow */}
              <div className="flex flex-col items-center" style={{ animation: "float 3s ease-in-out infinite 0.5s" }}>
                <div className="text-xs mb-1">🎀</div>
                <div className="text-7xl">🥑</div>
              </div>
              {/* Kids */}
              <div className="flex flex-col items-end gap-1">
                <div className="text-5xl" style={{ animation: "float 3s ease-in-out infinite 0.3s" }}>🥑</div>
                <div className="text-4xl" style={{ animation: "float 3s ease-in-out infinite 0.7s" }}>🥑</div>
              </div>
            </div>
            <style>{`
              @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-8px); }
              }
            `}</style>
          </div>

        </div>
      </div>
    </section>
  );
}
