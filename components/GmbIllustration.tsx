/** Flat illustration of a storefront being found on Google — stands in for a GBP graphic. */
export default function GmbIllustration() {
  return (
    <svg viewBox="0 0 290 330" className="h-full w-full" role="img" aria-label="Storefront appearing in local Google search">
      <rect width="290" height="330" fill="#4a7fe0" />
      <circle cx="40" cy="60" r="120" fill="#5a8ce6" />
      <circle cx="270" cy="300" r="110" fill="#3f74d6" />
      {/* connection lines */}
      <g stroke="#bcd3ff" strokeWidth="2" fill="none" opacity=".8">
        <path d="M70 80 Q145 40 220 70" />
        <path d="M220 70 L250 150" />
      </g>
      <g fill="#fff">
        <circle cx="70" cy="80" r="4" />
        <circle cx="220" cy="70" r="4" />
        <circle cx="250" cy="150" r="4" />
      </g>
      {/* storefront */}
      <rect x="60" y="120" width="170" height="130" rx="6" fill="#eef3ff" />
      <path d="M50 120h190l-10-32H60z" fill="#e8453c" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${68 + i * 34} 88h17l3 32h-21z`} fill="#fff" />
      ))}
      <path
        d="M50 120c0 9 8 15 17 15s17-6 17-15c0 9 8 15 17 15s17-6 17-15c0 9 8 15 17 15s17-6 17-15c0 9 8 15 17 15s17-6 17-15c0 9 8 15 17 15s17-6 17-15"
        fill="#e8453c"
      />
      {/* window with google card */}
      <rect x="92" y="148" width="106" height="72" rx="4" fill="#cfe0ff" />
      <rect x="104" y="158" width="82" height="52" rx="3" fill="#fff" />
      <text x="145" y="181" textAnchor="middle" fontSize="13" fontWeight="700" fontFamily="Arial, sans-serif">
        <tspan fill="#4285f4">G</tspan>
        <tspan fill="#ea4335">o</tspan>
        <tspan fill="#fbbc05">o</tspan>
        <tspan fill="#4285f4">g</tspan>
        <tspan fill="#34a853">l</tspan>
        <tspan fill="#ea4335">e</tspan>
      </text>
      <rect x="114" y="188" width="62" height="5" rx="2.5" fill="#d7e2f5" />
      <rect x="122" y="197" width="46" height="5" rx="2.5" fill="#e6edf9" />
      {/* magnifier */}
      <circle cx="196" cy="214" r="22" fill="none" stroke="#1f2b4d" strokeWidth="6" opacity=".9" />
      <path d="M212 230l16 16" stroke="#1f2b4d" strokeWidth="8" strokeLinecap="round" />
      {/* floating badges */}
      <circle cx="58" cy="74" r="20" fill="#f9b233" />
      <circle cx="56" cy="72" r="7" fill="none" stroke="#fff" strokeWidth="3" />
      <path d="M61 77l6 6" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="232" cy="64" r="22" fill="#2152c5" />
      <path d="M222 58l10-6 12 0v12l-10 10-12-12z" fill="#fff" />
      <circle cx="238" cy="58" r="2.4" fill="#2152c5" />
      <circle cx="252" cy="160" r="15" fill="#34a853" />
      <circle cx="252" cy="160" r="5.5" fill="none" stroke="#fff" strokeWidth="3" />
      {/* people */}
      <g>
        <circle cx="38" cy="214" r="10" fill="#f2c4a0" />
        <path d="M28 210c0-9 20-9 20 0" fill="#2d2a3e" />
        <rect x="26" y="226" width="24" height="52" rx="8" fill="#2d2a3e" />
        <rect x="27" y="276" width="9" height="34" rx="3" fill="#1f2b4d" />
        <rect x="40" y="276" width="9" height="34" rx="3" fill="#1f2b4d" />
        <rect x="36" y="228" width="5" height="22" fill="#fff" />
      </g>
      <g>
        <circle cx="258" cy="222" r="10" fill="#e9b48f" />
        <path d="M248 220c0-12 20-12 20 0" fill="#7a4b2a" />
        <rect x="246" y="234" width="24" height="46" rx="8" fill="#5f4cc3" />
        <rect x="247" y="278" width="9" height="32" rx="3" fill="#1f2b4d" />
        <rect x="260" y="278" width="9" height="32" rx="3" fill="#1f2b4d" />
      </g>
    </svg>
  );
}
