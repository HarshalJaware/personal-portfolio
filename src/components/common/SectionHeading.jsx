function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-400">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;