export default function Independent() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left - giant pink text */}
        <div className="md:w-1/2">
          <h2 className="text-8xl md:text-9xl font-bold text-[#f9a8c9] leading-none">
            100%<br />Independent.<br />Always.
          </h2>
        </div>

        {/* Right - colored paragraph */}
        <div className="md:w-1/2">
          <p className="text-xl font-semibold text-gray-800 leading-relaxed">
            We{" "}
            <span className="text-[#8aab3c]">never monetize</span>{" "}
            through brand deals, affiliate links, or ads — so{" "}
            <span className="text-[#8aab3c]">you can trust</span>{" "}
            our{" "}
            <span className="text-[#8aab3c]">recommendations</span>{" "}
            are always aligned with our users.
          </p>
        </div>

      </div>
    </section>
  );
}
