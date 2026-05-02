import { useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80",
];

export default function FoodCarousel() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-[#3d5a1e] py-0 overflow-hidden">
      <div className="relative flex items-center justify-center">
        {/* Circle crop */}
        <div className="w-full max-w-4xl mx-auto aspect-square rounded-full overflow-hidden">
          <img
            src={slides[active]}
            alt="food"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 py-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${i === active ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
