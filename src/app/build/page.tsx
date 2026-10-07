import type { Metadata } from "next";
import { BuildLab } from "@/components/build-lab";
import { staticPageSeo } from "@/content/seo";

const seo = staticPageSeo["/build"];

export const metadata: Metadata = {
  title: {
    absolute: seo.title!,
  },
  description: seo.description,
  alternates: {
    canonical: "/build",
  },
};

export default function BuildPage() {
  return <BuildLab />;
}
