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
      <p className="mb-2 font-mono text-xs tracking-[0.14em] text-brand uppercase">{eyebrow}</p>
      <h2
        id={id}
        className={
          size === "lg"
            ? "text-3xl font-bold tracking-tight text-foreground md:text-5xl"
            : "text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
        }
      >
        {title}
      </h2>
    </div>
  )
}
