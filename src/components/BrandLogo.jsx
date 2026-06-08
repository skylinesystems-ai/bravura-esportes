import logo from "../assets/bravura-logo.png";

const sizeClasses = {
  sm: "h-12 w-28",
  md: "h-16 w-36",
  lg: "h-28 w-64",
  xl: "h-40 w-80",
};

export default function BrandLogo({ size = "md", asLink = false, className = "" }) {
  const Component = asLink ? "a" : "div";

  return (
    <Component
      href={asLink ? "#inicio" : undefined}
      className={`group inline-flex items-center justify-center ${className}`}
      aria-label="BRAVURA ESPORTES"
    >
      <span className="sr-only">BRAVURA ESPORTES</span>
      <img
        src={logo}
        alt=""
        className={`${sizeClasses[size]} object-contain drop-shadow-[0_0_18px_rgba(255,122,0,.32)] transition duration-300 group-hover:drop-shadow-[0_0_28px_rgba(0,217,255,.38)]`}
      />
    </Component>
  );
}
