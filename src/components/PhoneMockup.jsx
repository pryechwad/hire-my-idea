const HeartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="#ccc" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="#ccc" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
  </svg>
);

const ProductCard = () => (
  <div className="bg-white w-full">
    {/* Product hero image */}
    <div
      className="w-full flex items-center justify-center"
      style={{ background: "linear-gradient(160deg,#f7f2e8 0%,#ede5d0 100%)", height: "148px" }}
    >
      <img
        src="https://images.openfoodfacts.org/images/products/068/826/710/5100/front_en.6.400.jpg"
        alt="Fig and Olive Crackers"
        className="h-28 w-auto object-contain drop-shadow-md"
        onError={(e) => {
          e.target.style.display = "none";
          e.target.parentNode.innerHTML =
            '<div style="font-size:52px;line-height:1">🍘</div>';
        }}
      />
    </div>

    {/* Card body */}
    <div className="px-4 pt-3 pb-4">
      {/* Product title row */}
      <div className="flex items-start gap-2.5 mb-2.5">
        <img
          src="https://images.openfoodfacts.org/images/products/068/826/710/5100/front_en.6.400.jpg"
          alt=""
          className="w-9 h-9 rounded-lg object-cover flex-shrink-0 border border-gray-100"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <div className="flex-1 min-w-0">
          <p
            className="text-[12.5px] font-bold text-[#111] leading-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Fig and Olive Crackers, Fig and Olive
          </p>
          <p
            className="text-[11px] text-[#aaa] mt-0.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Lesley Stowe
          </p>
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
          <HeartIcon />
          <ShareIcon />
        </div>
      </div>

      {/* Score row */}
      <div className="flex items-end gap-1 mb-3">
        <span style={{ color: "#e07b39", fontSize: "13px" }}>⚠</span>
        <span
          className="font-extrabold leading-none"
          style={{ color: "#e07b39", fontSize: "26px", fontFamily: "'Inter', sans-serif" }}
        >
          46
        </span>
        <div className="mb-0.5">
          <span
            className="text-[10.5px] text-[#aaa] leading-tight block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            /100
          </span>
          <span
            className="text-[10.5px] text-[#aaa] leading-tight block"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Score
          </span>
        </div>
      </div>

      {/* Oliver Says */}
      <div
        className="rounded-2xl p-3"
        style={{ backgroundColor: "#f9f8f4" }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <span style={{ fontSize: "14px" }}>🫒</span>
          <span
            className="text-[11.5px] font-bold text-[#222]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Oliver Says:
          </span>
        </div>
        <p
          className="text-[10.5px] text-[#777] leading-[1.6]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          "This product's low score mainly comes from the processed sugars, like honey and brown sugar, which can impact your family's health when consumed frequently, especially for kids still developing. Additionally, there are several additives that aren't ideal for your goal of avoiding processed foods, making this a choice to consider more carefully."
        </p>
      </div>

      {/* Breakdown */}
      <div className="mt-3 text-center">
        <span
          className="text-[11px] font-semibold text-[#999] tracking-widest uppercase"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Breakdown
        </span>
      </div>
    </div>
  </div>
);

/* A blurred ghost phone shown on left/right */
const GhostPhone = ({ side }) => (
  <div
    className="absolute bottom-0 hidden md:block"
    style={{
      [side === "left" ? "right" : "left"]: "calc(50% + 148px)",
      width: "220px",
      filter: "blur(3px)",
      opacity: 0.45,
      transform: side === "left" ? "scale(0.88) translateX(-20px)" : "scale(0.88) translateX(20px)",
      transformOrigin: "bottom center",
      zIndex: 1,
    }}
  >
    {/* Phone shell */}
    <div
      className="bg-white shadow-xl overflow-hidden"
      style={{ borderRadius: "36px", border: "3px solid #e0e0e0" }}
    >
      {/* Notch */}
      <div className="flex justify-center pt-2.5 pb-1 bg-white">
        <div className="w-16 h-4 bg-gray-900 rounded-full" />
      </div>
      {/* Placeholder content */}
      <div style={{ background: "linear-gradient(160deg,#f7f2e8,#ede5d0)", height: "110px" }} />
      <div className="p-3 space-y-2">
        <div className="h-2.5 bg-gray-200 rounded-full w-3/4" />
        <div className="h-2 bg-gray-100 rounded-full w-1/2" />
        <div className="h-2 bg-gray-100 rounded-full w-2/3" />
        <div className="h-8 bg-gray-100 rounded-xl mt-2" />
      </div>
    </div>
  </div>
);

const PhoneMockup = () => (
  <div className="relative flex justify-center items-end mt-14 px-4" style={{ minHeight: "520px" }}>
    <GhostPhone side="left" />
    <GhostPhone side="right" />

    {/* Main phone */}
    <div
      className="relative bg-white shadow-2xl overflow-hidden"
      style={{
        borderRadius: "44px",
        border: "4px solid #d8d8d8",
        width: "300px",
        zIndex: 10,
      }}
    >
      {/* Dynamic island / notch */}
      <div className="flex justify-center pt-3 pb-1 bg-white">
        <div
          className="bg-gray-900"
          style={{ width: "88px", height: "22px", borderRadius: "20px" }}
        />
      </div>

      <ProductCard />
    </div>
  </div>
);

export default PhoneMockup;
