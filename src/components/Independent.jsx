export default function Independent() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Giant pink heading - full width, no overflow */}
        <h2
          className="font-bold text-[#f9a8c9] leading-none mb-10"
          style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}
        >
          100% Independent.<br />Always.
        </h2>

        {/* Paragraph - right-aligned half */}
        <div className="flex justify-end">
          <p className="text-xl font-semibold text-[#2a3d14] leading-relaxed max-w-xl">
            We{" "}
            <span className="text-[#8aab3c] italic">never monetize</span>{" "}
            through brand deals, affiliate links, or ads — so{" "}
            <span className="text-[#8aab3c] italic">you can trust</span>{" "}
            our{" "}
            <span className="text-[#8aab3c] italic">recommendations</span>{" "}
            are always aligned with our users.
          </p>
        </div>

      </div>
    </section>
  );
}
