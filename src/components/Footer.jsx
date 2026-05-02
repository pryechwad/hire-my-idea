export default function Footer() {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-5xl mx-auto bg-[#3d5a1e] rounded-3xl px-10 py-12">

        {/* Top 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Col 1 - Tools */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">Explore More Olive Tools</h4>
            <ul className="space-y-3">
              {["Explore Foods", "Allergy Scanner App", "Gluten Free Scanner", "Dairy Free App", "Food Ingredient Checker", "Olive Health"].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 - About */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">About</h4>
            <ul className="space-y-3">
              {["Blog", "Email us", "Contact us"].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/70 text-sm hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 - Logo + newsletter */}
          <div>
            {/* Olive logo text */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#8aab3c] flex items-center justify-center">
                <img
                  src="https://em-content.zobj.net/source/apple/354/avocado_1f951.png"
                  alt="olive"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="text-white text-2xl font-bold tracking-wide">olive</span>
            </div>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              Get the latest lab testing data<br />sent directly to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter Email address"
                className="flex-1 bg-[#4a6b28] text-white placeholder-white/40 text-sm px-4 py-3 rounded-full outline-none border border-white/10 focus:border-white/30"
              />
              <button className="bg-white text-[#3d5a1e] font-semibold text-sm px-5 py-3 rounded-full hover:bg-[#f0f4e8] transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            {["Terms of Service", "Privacy Policy", "Refund Policy", "Medical Consent", "Sign in"].map(link => (
              <a key={link} href="#" className="text-white/60 text-xs hover:text-white transition">{link}</a>
            ))}
          </div>
          <span className="text-white/50 text-xs">© 2026 Olive Inc.</span>
        </div>

      </div>
    </section>
  );
}
