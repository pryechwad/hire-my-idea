const reviews = [
  {
    text: "Olive has completely changed the way I shop for my family. I feel confident knowing exactly what's in our food before it ever hits our pantry.",
    name: "Megan L.",
    stars: 5,
    avatar: "👩",
    top: true,
  },
  {
    text: "Meal planning used to be stressful. Now I scan, get recommendations, and feel great about what my kids are eating. It's that easy.",
    name: "Tina B.",
    stars: 4,
    avatar: "👩‍🦱",
    top: false,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-1 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
}

export default function RealMothers() {
  return (
    <section className="bg-[#f0f4e8] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-center">

        {/* Left - photo with blob */}
        <div className="md:w-1/2 relative flex items-center justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-28 h-28 bg-[#e0ead0] rounded-full opacity-60" />
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden grayscale">
            {/* Placeholder B&W photo */}
            <div className="bg-gray-300 w-full h-96 flex items-center justify-center text-gray-500 text-6xl">
              👩‍👧‍👦
            </div>
          </div>
          {/* Bottom quote card */}
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-4 shadow text-sm text-gray-700">
            After just a week of using Olive, I feel more in control of my family's nutrition than ever before.
          </div>
        </div>

        {/* Right */}
        <div className="md:w-1/2 flex flex-col gap-4">
          {/* Top review card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm relative">
            <p className="text-gray-700 text-sm leading-relaxed">{reviews[0].text}</p>
            <div className="mt-3">
              <p className="font-semibold text-gray-800 text-sm">{reviews[0].name}</p>
              <Stars count={reviews[0].stars} />
            </div>
            {/* Avatar */}
            <div className="absolute -right-3 -top-3 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl shadow">
              {reviews[0].avatar}
            </div>
          </div>

          {/* Heading */}
          <div className="py-2">
            <h2 className="text-5xl font-light text-[#2a3d14] leading-tight">
              Real Mothers<br />Real Results
            </h2>
            <a href="#" className="flex items-center gap-1 text-sm text-gray-600 mt-3 hover:text-[#3d5a1e]">
              read all 3,147+ reviews <span>→</span>
            </a>
          </div>

          {/* Bottom review card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xl flex-shrink-0">
              {reviews[1].avatar}
            </div>
            <div>
              <p className="text-gray-700 text-sm leading-relaxed">{reviews[1].text}</p>
              <div className="mt-3">
                <p className="font-semibold text-gray-800 text-sm">{reviews[1].name}</p>
                <Stars count={reviews[1].stars} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
