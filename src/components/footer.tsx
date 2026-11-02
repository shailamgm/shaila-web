type FooterProps = {
  name: string;
  monogram: string;
  rights: string;
  builtWith: string;
};

export function Footer({ name, monogram, rights, builtWith }: FooterProps) {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 font-mono text-xs font-semibold text-brand-light">
            {monogram}
          </span>
          <span className="text-sm font-medium">{name}</span>
        </div>

        <p className="text-xs text-muted">
          {rights} <span aria-hidden="true">·</span> {builtWith}
        </p>
      </div>
    </footer>
  );
}
