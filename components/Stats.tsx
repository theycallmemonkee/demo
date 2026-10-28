import { stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <dl className="grid grid-cols-3 gap-4 border-t border-line pt-8 sm:gap-5">
      {stats.map((stat, i) => (
        <Reveal key={stat.value} delay={i * 100}>
          <dt className="text-[30px] font-bold leading-none tracking-[-0.05em] text-ink min-[400px]:text-[34px] sm:text-[48px]">
            {stat.value.replace("+", "")}
            <span className="text-brand">+</span>
          </dt>
          <dd className="mt-3 max-w-[150px] text-[13px] sm:text-[15px] font-medium leading-[1.4] tracking-[-0.02em] text-body">
            {stat.label}
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
