export default function FamilySafety() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ minHeight: "480px" }}
        >
          {/* Background photo */}
          <img
            src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=1200&q=80"
            alt="family dining"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Decorative circles */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-white/30" />
          <div className="absolute right-12 bottom-12 w-32 h-40 rounded-full border border-white/20" />

          {/* Content */}
          <div className="relative z-10 p-12 flex flex-col justify-center h-full" style={{ minHeight: "480px" }}>
            <h2 className="text-4xl font-bold text-white mb-8 leading-tight max-w-md">
              Keep your family<br />safe with Olive
            </h2>

            <ul className="space-y-3 mb-8">
              {["Effortless food scanning", "Peace of mind for parents", "Healthy product recommendations"].map(item => (
                <li key={item} className="flex items-center gap-3 text-white text-base">
                  <div className="w-6 h-6 rounded-full bg-[#8aab3c] flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 bg-white text-[#3d5a1e] font-medium px-7 py-3.5 rounded-full text-sm w-fit hover:bg-[#f0f4e8] transition">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
