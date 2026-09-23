import Link from "next/link";
import { OglasLogo } from "@/components/oglas-logo";

type BrandMarkProps = {
  tone?: "light" | "dark";
};

// The supplied Oglas AI logo, with the site's descriptor set beside it.
export function BrandMark({ tone = "dark" }: BrandMarkProps) {
  const onBlue = tone === "dark";

  return (
    <Link href="/" className="group flex items-center gap-4" aria-label="Oglas AI home">
      <OglasLogo
        className={`h-9 w-auto transition-opacity group-hover:opacity-85 ${
          onBlue ? "text-white" : "text-brand"
        }`}
      />
      <span
        className={`hidden border-l pl-4 text-[10px] uppercase leading-4 tracking-[0.16em] xl:block ${
          onBlue ? "border-white/25 text-white/65" : "border-brand/20 text-steel"
        }`}
      >
        Custom Software
        <br />+ Practical AI
      </span>
    </Link>
  );
}
