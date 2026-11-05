type FooterProps = {
  name: string;
  monogram: string;
  rights: string;
  builtWith: string;
};

export function Footer({ name, monogram, rights, builtWith }: FooterProps) {
  return (
    <footer className="relative overflow-hidden border-t border-line-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-0 select-none font-mono text-[10rem] leading-none tracking-tighter text-fg/[0.025]"
      >
        {monogram}
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-line-strong bg-elevated font-mono text-[11px] font-semibold text-brand-light">
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-brand-cyan/10"
            />
            <span className="relative">{monogram}</span>
          </span>
          <span className="text-sm font-medium">{name}</span>
        </div>

        <p className="mono-label text-muted-subtle">
          {rights} <span aria-hidden="true">·</span> {builtWith}
        </p>
      </div>
    </footer>
  );
}
