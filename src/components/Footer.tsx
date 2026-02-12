export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#666666]">
          <p className="font-[family-name:var(--font-ibm-plex-sans)]">
            &copy; 2026{" "}
            <span className="font-[family-name:var(--font-jetbrains-mono)] text-white">
              kevin<span className="text-[#E94560]">.</span>dev
            </span>{" "}
            &mdash; Built with &#129504; and Claude
          </p>
          <p className="font-[family-name:var(--font-ibm-plex-sans)]">
            Costa Rica &#127464;&#127479;
          </p>
        </div>
      </div>
    </footer>
  );
}
