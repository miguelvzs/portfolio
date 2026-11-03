export function SectionHeading({
  eyebrow,
  title,
  id,
  size = "default",
}: {
  eyebrow: string
  title: string
  id: string
  size?: "default" | "lg"
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs text-brand">
        <span className="section-number tabular-nums" aria-hidden="true" />
        <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
        <span>{eyebrow}</span>
      </p>
      <h2
        id={id}
        className={
          size === "lg"
            ? "text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
            : "text-2xl font-semibold tracking-[-0.025em] text-foreground md:text-4xl"
        }
      >
        {title}
      </h2>
    </div>
  )
}
