import { ChevronUp, ChevronDown, Heart } from 'lucide-react';
import { Discord } from '@/components/icons/discord';
import { Github } from '@/components/icons/github';
import { Buymeacoffee } from '@/components/icons/buymeacoffee';
import { Enter } from '@/components/icons/enter';
import { Shift } from '@/components/icons/shift';

export default function Footer() {
  // Get version from manifest
  const version = browser.runtime.getManifest().version;

  return (
    <div className="px-4 py-2 border-t border-[var(--border)] bg-[var(--muted)] flex-shrink-0">
      {/* Navigation shortcuts */}
      <div className="flex justify-center items-center text-xs text-[var(--muted-foreground)] mb-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-sm)] text-xs flex items-center">
              <ChevronUp className="w-3 h-3" />
            </kbd>
            <kbd className="px-1 py-0.5 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-sm)] text-xs flex items-center">
              <ChevronDown className="w-3 h-3" />
            </kbd>
            <span>Navigate</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-sm)] text-xs flex items-center">
              <Enter className="w-3 h-3" />
            </kbd>
            <span>New tab</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-sm)] text-xs flex items-center gap-0.5">
              <Shift className="w-3 h-3" />
              <Enter className="w-3 h-3" />
            </kbd>
            <span>Same tab</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1 py-0.5 bg-[var(--background)] border border-[var(--border)] rounded-[var(--radius-sm)] text-xs">
              Alt+L
            </kbd>
            <span>Quick access</span>
          </div>
        </div>
      </div>

      {/* Links and Attribution */}
      <div className="flex justify-between items-center text-xs text-[var(--muted-foreground)] pt-2 border-t border-[var(--border)]">
        <div className="flex items-center gap-3 border-separate">
          <a
            href="https://github.com/GDGoC-GLAU/leetjump"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-3 h-3" />
            <span>GitHub</span>
          </a>
          <a
            href="https://discord.com/invite/pdxMMNGWCU"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
            title="Discord Support"
          >
            <Discord className="w-3 h-3" />
            <span>Discord</span>
          </a>
          <a
            href="https://buymeacoffee.com/lirena00"
            className="flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
            title="Sponsor"
          >
            <Buymeacoffee className="w-3 h-3 text-amber-300" />
            <span>Sponsor</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 opacity-75">
            <span>v{version}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500" />
            <span>by</span>
            <a
              href="https://www.lirena.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-[var(--foreground)] transition-colors"
            >
              lirena00
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
