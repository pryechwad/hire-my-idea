const avatars = [
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
];

const TrustBadge = () => (
  <div className="flex items-center justify-center gap-2.5 mb-7">
    <div className="flex -space-x-2.5">
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
          style={{ border: "2.5px solid #eef3e2" }}
        />
      ))}
    </div>
    <span
      className="text-[13px] text-[#555] font-[500]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      Trusted by thousands of healthy families
    </span>
  </div>
);

const Hero = () => (
  <section className="bg-[#eef3e2] text-center px-6 pt-10 pb-0">
    <div className="max-w-[680px] mx-auto">
      <TrustBadge />

      <h1
        className="font-extrabold text-[#1a2a0a] leading-[1.08] tracking-[-2px] mb-5"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(42px, 6vw, 64px)",
        }}
      >
        The Safest Way to<br />Shop for Groceries
      </h1>

      <p
        className="text-[#666] max-w-[430px] mx-auto mb-8 leading-[1.65]"
        style={{ fontFamily: "'Inter', sans-serif", fontSize: "15.5px" }}
      >
        Use the Olive Food Scanner App to Instantly Eliminate
        Harmful Ingredients from Your Family's Diet and Get
        Expert-Backed Food Insights
      </p>

      <div className="flex items-center justify-center gap-5 flex-wrap">
        {/* iOS button */}
        <a
          href="#"
          className="flex items-center gap-2 text-white text-[14px] font-semibold px-5 py-3 rounded-full transition-colors"
          style={{ backgroundColor: "#1e2f0e", fontFamily: "'Inter', sans-serif" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download for iOS
        </a>

        {/* Community link */}
        <a
          href="#"
          className="flex items-center gap-1 text-[14px] font-semibold text-[#1e2f0e] hover:underline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Join the Olive Community
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
