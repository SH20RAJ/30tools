

export default function FooterPartners() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground">
      <span>Powered by</span>
      <a
        href="https://sopkit.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground transition-colors"
      >
        SopKit
      </a>
      <span>,</span>
      <a
        href="https://strivio.world"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground transition-colors"
      >
        Strivio
      </a>
      <span>,</span>
      <a
        href="https://wify.my/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground transition-colors"
      >
        Wify
      </a>
      <span>&</span>
      <a
        href="https://unstory.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground transition-colors"
      >
        Unstory
      </a>
    </div>
  );
}
