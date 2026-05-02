const OliveLogo = () => (
  <a href="#" className="flex items-center gap-0 select-none">
    {/* Olive face SVG matching the site logo */}
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Olive body */}
      <ellipse cx="20" cy="24" rx="13" ry="15" fill="#5a7a2a" />
      {/* Shine */}
      <ellipse cx="15" cy="18" rx="3" ry="4" fill="#7aaa3a" opacity="0.5" />
      {/* Eyes */}
      <circle cx="16" cy="24" r="2" fill="white" />
      <circle cx="24" cy="24" r="2" fill="white" />
      <circle cx="16.8" cy="24.5" r="1" fill="#2a3d14" />
      <circle cx="24.8" cy="24.5" r="1" fill="#2a3d14" />
      {/* Smile */}
      <path d="M16 29 Q20 32 24 29" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Stem */}
      <path d="M20 9 Q22 5 26 4" stroke="#5a7a2a" strokeWidth="2" strokeLinecap="round" fill="none" />
      <ellipse cx="27" cy="4" rx="3" ry="2" fill="#5a7a2a" transform="rotate(-20 27 4)" />
    </svg>
    <span
      style={{ fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: "22px", color: "#3d5a1e", letterSpacing: "-0.5px", marginLeft: "1px" }}
    >
      live
    </span>
  </a>
);

const NavLink = ({ children, hasDropdown }) => (
  <a
    href="#"
    className="flex items-center gap-0.5 text-[13.5px] text-[#2d2d2d] hover:text-black font-[500]"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    {children}
    {hasDropdown && (
      <svg className="w-3 h-3 ml-0.5 mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </a>
);

const Navbar = () => (
  <nav className="w-full bg-[#eef3e2] px-8 py-3.5">
    <div className="max-w-[1100px] mx-auto flex items-center justify-between">
      <OliveLogo />

      <div className="hidden md:flex items-center gap-6">
        <NavLink hasDropdown>Solutions</NavLink>
        <NavLink>Features</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink hasDropdown>Blog</NavLink>
        <NavLink>Restaurants</NavLink>
        <NavLink hasDropdown>Food</NavLink>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#"
          className="text-[13.5px] font-[500] text-[#2d2d2d] hover:text-black"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Sign in
        </a>
        <a
          href="#"
          className="flex items-center gap-1.5 text-white text-[13.5px] font-semibold px-4 py-2 rounded-full transition-colors"
          style={{ backgroundColor: "#1e2f0e", fontFamily: "'Inter', sans-serif" }}
        >
          Get Olive
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
