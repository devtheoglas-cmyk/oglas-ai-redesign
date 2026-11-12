import { pageMetadata } from "@/lib/page-metadata";
import { BuildLab } from "@/components/build-lab";
import { staticPageSeo } from "@/content/seo";

const seo = staticPageSeo["/build"];

export const metadata = pageMetadata({
  title: seo.title!,
  description: seo.description,
  path: "/build",
});

export default function BuildPage() {
  return <BuildLab />;
}
