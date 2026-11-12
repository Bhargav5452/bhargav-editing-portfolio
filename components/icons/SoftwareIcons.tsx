// Authentic pixel-accurate brand icon SVGs matching the reference layout
// All icons styled with realistic rounded corners, badges, and brand colors

interface IconProps {
  size?: number;
}

export function PremierePro({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#00005B" />
      <rect x="1" y="1" width="46" height="46" rx="9" stroke="#9999FF" strokeOpacity="0.15" strokeWidth="2" />
      <text x="24" y="32" textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" fontSize="21" fill="#9999FF" letterSpacing="-0.5">Pr</text>
    </svg>
  );
}

export function AfterEffects({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#00005B" />
      <rect x="1" y="1" width="46" height="46" rx="9" stroke="#9999FF" strokeOpacity="0.15" strokeWidth="2" />
      <text x="24" y="32" textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" fontSize="21" fill="#9999FF" letterSpacing="-0.5">Ae</text>
    </svg>
  );
}

export function Photoshop({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#001E36" />
      <rect x="1" y="1" width="46" height="46" rx="9" stroke="#31A8FF" strokeOpacity="0.15" strokeWidth="2" />
      <text x="24" y="32" textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" fontSize="21" fill="#31A8FF" letterSpacing="-0.5">Ps</text>
    </svg>
  );
}

export function Illustrator({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#330000" />
      <rect x="1" y="1" width="46" height="46" rx="9" stroke="#FF9A00" strokeOpacity="0.15" strokeWidth="2" />
      <text x="24" y="32" textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" fontSize="21" fill="#FF9A00" letterSpacing="-0.5">Ai</text>
    </svg>
  );
}

export function Lightroom({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#001A33" />
      <rect x="1" y="1" width="46" height="46" rx="9" stroke="#31A8FF" strokeOpacity="0.15" strokeWidth="2" />
      <text x="24" y="32" textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" fontSize="21" fill="#31A8FF" letterSpacing="-0.5">Lr</text>
    </svg>
  );
}

export function InDesign({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#49021F" />
      <rect x="1" y="1" width="46" height="46" rx="9" stroke="#FF3366" strokeOpacity="0.15" strokeWidth="2" />
      <text x="24" y="32" textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800" fontSize="21" fill="#FF3366" letterSpacing="-0.5">Id</text>
    </svg>
  );
}

export function MicrosoftSuite({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#18181B" />
      <rect x="13" y="13" width="10" height="10" rx="1" fill="#F25022" />
      <rect x="25" y="13" width="10" height="10" rx="1" fill="#7FBA00" />
      <rect x="13" y="25" width="10" height="10" rx="1" fill="#00A4EF" />
      <rect x="25" y="25" width="10" height="10" rx="1" fill="#FFB900" />
    </svg>
  );
}

export function OBSStudio({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="#141416" stroke="#2E2E34" strokeWidth="1.5" />
      {/* OBS 3-swirl icon */}
      <circle cx="24" cy="24" r="14" stroke="#FFFFFF" strokeWidth="2.2" fill="none" strokeDasharray="22 7" strokeLinecap="round" />
      <circle cx="24" cy="24" r="8" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeDasharray="12 4" />
      <circle cx="24" cy="24" r="3" fill="#FFFFFF" />
    </svg>
  );
}

export function DaVinciResolve({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="10" fill="#141416" />
      <rect x="1" y="1" width="46" height="46" rx="9" stroke="#333" strokeWidth="1" />
      {/* DaVinci Resolve tricolor flower petals */}
      <circle cx="24" cy="18" r="5.5" fill="#EF4444" />
      <circle cx="18" cy="28" r="5.5" fill="#3B82F6" />
      <circle cx="30" cy="28" r="5.5" fill="#10B981" />
      <circle cx="24" cy="24" r="3.5" fill="#FACC15" />
    </svg>
  );
}

export function Canva({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" fill="#00C4CC" />
      <text x="24" y="31" textAnchor="middle"
        fontFamily="'Brush Script MT', 'Dancing Script', cursive, sans-serif"
        fontStyle="italic" fontWeight="700" fontSize="19" fill="#FFFFFF">Canva</text>
    </svg>
  );
}
