import Link from "next/link";
import { SplitTitle } from "@/components/split-title";

type RelatedInsight = {
  title: string;
  description: string;
  href: string;
};

export function RelatedInsights({
  intro,
  items,
}: {
  intro: string;
  items: readonly RelatedInsight[];
}) {
  return (
    <section className="bg-bloom py-20 md:py-24">
      <div className="mx-auto w-full max-w-[1160px] px-4">
        <h2 className="max-w-3xl text-4xl leading-[1.05] text-onyx md:text-[3.2rem]">
          <SplitTitle>{"Related Insights"}</SplitTitle>
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-steel md:text-lg">{intro}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article className="rounded-2xl border border-brand/10 bg-white p-6" key={item.title}>
              <h3 className="text-xl font-semibold leading-7 text-onyx">
                <Link className="content-link" href={item.href}>{item.title}</Link>
              </h3>
              <p className="mt-3 text-sm leading-7 text-steel">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
