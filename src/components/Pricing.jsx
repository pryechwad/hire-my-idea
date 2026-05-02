const monthly = ["Unlimited Scans", "Unlimited Database Searches", "Comprehensive Lab-Testing Data"];
const yearly = ["Everything in monthly plan", "Get 7 months free", "60% Savings"];

function CheckItem({ text, dark }) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${dark ? "bg-white/20" : "bg-[#8aab3c]"}`}>
        <svg viewBox="0 0 20 20" fill="white" className="w-3.5 h-3.5">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <span className={dark ? "text-white" : "text-gray-700"}>{text}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">

        {/* Flower decoration top right */}
        <div className="absolute -right-20 top-0 w-64 h-64 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {[0,45,90,135,180,225,270,315].map((deg, i) => (
              <ellipse key={i} cx="100" cy="50" rx="28" ry="50" fill="#3d5a1e"
                transform={`rotate(${deg} 100 100)`} />
            ))}
            <circle cx="100" cy="100" r="22" fill="#3d5a1e" />
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-light text-gray-800 text-center leading-tight mb-14">
          Healthy Choices<br />Honest Pricing
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">

          {/* Mascot on monthly card */}
          <div className="absolute -top-8 left-4 w-16 h-16 z-10">
            <img
              src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png"
              alt="olive mascot"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Monthly */}
          <div className="bg-[#f0f4e8] rounded-2xl p-8 pt-10 flex flex-col gap-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">Monthly</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-gray-900">$14.99</span>
                <span className="text-gray-400 text-sm">/monthly</span>
              </div>
            </div>
            <ul className="space-y-3">
              {monthly.map(t => <CheckItem key={t} text={t} dark={false} />)}
            </ul>
            <button className="mt-auto w-full bg-[#2a3d14] text-white py-3.5 rounded-xl font-medium hover:bg-[#3d5a1e] transition">
              Subscribe
            </button>
          </div>

          {/* Yearly */}
          <div className="bg-[#3d5a1e] rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <p className="text-white/70 text-sm mb-1">Yearly</p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl font-semibold text-white">$69.99</span>
                <span className="text-white/40 text-sm line-through">$179.88</span>
                <span className="text-white/60 text-sm">/yearly</span>
              </div>
            </div>
            <ul className="space-y-3">
              {yearly.map(t => <CheckItem key={t} text={t} dark={true} />)}
            </ul>
            <button className="mt-auto w-full bg-white text-[#3d5a1e] py-3.5 rounded-xl font-medium hover:bg-[#f0f4e8] transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
