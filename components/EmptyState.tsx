import { Clock, CheckCircle2, MinusCircle, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  hasQuery: boolean;
  isLoading: boolean;
  listMode?: 'history' | 'attempted' | 'solved' | null;
}

const LIST_MODE_CONFIG = {
  history: {
    icon: Clock,
    iconColor: 'text-[var(--muted-foreground)]',
    iconBg: 'bg-[var(--muted)]',
    title: 'No history yet',
    subtitle: 'Open some problems to see them here',
  },
  attempted: {
    icon: MinusCircle,
    iconColor: 'text-[var(--status-attempted)]',
    iconBg: 'bg-[var(--status-attempted)]/10',
    title: 'No attempted problems',
    subtitle: 'Sync your problems to refresh status',
  },
  solved: {
    icon: CheckCircle2,
    iconColor: 'text-[var(--status-solved)]',
    iconBg: 'bg-[var(--status-solved)]/10',
    title: 'No solved problems',
    subtitle: 'Sync your problems to refresh status',
  },
} as const;

export default function EmptyState({ hasQuery, isLoading, listMode = null }: EmptyStateProps) {
  // Filtered list views (history / attempted / solved) — status-colored icon is
  // informative here (matches the row indicators), so it stays.
  if (listMode) {
    const { icon: Icon, iconColor, iconBg, title, subtitle } = LIST_MODE_CONFIG[listMode];
    return (
      <div className="px-4 py-10 flex flex-col items-center text-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2.5 ${iconBg}`}>
          <Icon className={`w-4 h-4 ${iconColor}`} />
        </div>
        <div className="text-xs font-medium text-[var(--foreground)] mb-1">{title}</div>
        <div className="text-[0.7rem] text-[var(--muted-foreground)]">{subtitle}</div>
      </div>
    );
  }

  // Query typed, no matches — no icon needed, the search bar above already
  // makes "searching" obvious; repeating it here is just noise.
  if (hasQuery && !isLoading) {
    return (
      <div className="px-4 py-10 text-center">
        <div className="text-xs font-medium text-[var(--foreground)] mb-1">No problems found</div>
        <div className="text-[0.7rem] text-[var(--muted-foreground)]">
          Try searching by number or title
        </div>
      </div>
    );
  }

  // Default / idle state — leads with the "/" gesture to intrigue people into
  // discovering slash commands, rather than anchoring on one specific command.
  if (!hasQuery) {
    return (
      <div className="px-4 py-8">
        <div className="flex flex-col items-center text-center mb-5">
          <div className="flex items-center justify-center w-8 h-8 rounded-[var(--radius-md)] bg-[var(--chart-4)]/10 mb-2.5">
            <span className="text-[var(--chart-4)] font-mono text-sm font-semibold leading-none">
              /
            </span>
          </div>
          <div className="text-xs font-medium text-[var(--foreground)] mb-1">
            Type <span className="text-[var(--chart-4)] font-mono">/</span> for commands
          </div>
          <div className="text-[0.7rem] text-[var(--muted-foreground)]">
            Quick actions like problem of the day, syncing, and more
          </div>
        </div>

        <div className="max-w-xs mx-auto space-y-3 pt-4 border-t border-[var(--border)]">
          {/* Direct search examples, kept quiet/secondary to the slash hero */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap text-xs text-[var(--muted-foreground)]">
            <span>Or search directly —</span>
            <code className="bg-[var(--muted)] px-1.5 py-0.5 rounded-[var(--radius-md)] text-[var(--foreground)]">
              two sum
            </code>
            <span>/</span>
            <code className="bg-[var(--muted)] px-1.5 py-0.5 rounded-[var(--radius-md)] text-[var(--foreground)]">
              1
            </code>
          </div>

          {/* Sync note */}
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-[var(--radius-md)] flex items-center justify-center bg-[var(--muted)] flex-shrink-0">
              <RefreshCw className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
            </div>
            <div className="text-left min-w-0">
              <div className="text-xs font-medium text-[var(--foreground)] mb-0.5">
                Status Sync
              </div>
              <div className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                Solved / attempted indicators update after sync
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}