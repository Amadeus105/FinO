import { useEffect, useState } from "react";

const stats = [
  { label: "Active Users", value: 12500, suffix: "+" },
  { label: "Transactions Processed", value: 2.4, suffix: "M+" },
  { label: "Categorization Accuracy", value: 96, suffix: "%" },
  { label: "Time Saved Monthly", value: 8, suffix: " hrs" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(increment * step, value));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const displayValue = value >= 1000 
    ? current.toLocaleString(undefined, { maximumFractionDigits: 1 })
    : current.toFixed(value % 1 !== 0 ? 1 : 0);

  return (
    <span>
      {displayValue}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
