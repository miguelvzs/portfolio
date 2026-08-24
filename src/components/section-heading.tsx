export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="mb-2 font-mono text-xs tracking-[0.14em] text-brand uppercase">{eyebrow}</p>
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
    </div>
  )
}
