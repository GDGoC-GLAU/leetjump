import { forwardRef } from 'react';
import { ExternalLink, CheckCircle2, MinusCircle } from 'lucide-react';
import { LeetCodeProblem } from '@/utils/database';

interface ProblemItemProps {
  problem: LeetCodeProblem & { matchType?: 'id' | 'title' | 'slug' };
  index: number;
  selectedIndex: number;
  onOpen: (problem: LeetCodeProblem) => void;
}

const ProblemItem = forwardRef<HTMLDivElement, ProblemItemProps>(
  ({ problem, index, selectedIndex, onOpen }, ref) => {
    const getDifficultyDot = (difficulty: string) => {
      const diffMap = {
        easy: 'difficulty-easy',
        medium: 'difficulty-medium',
        hard: 'difficulty-hard',
      } as const;
      return diffMap[difficulty.toLowerCase() as keyof typeof diffMap] || 'difficulty-medium';
    };

    const getDifficultyText = (difficulty: string) => {
      return difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase();
    };

    const getStatusIcon = (status: LeetCodeProblem['status']) => {
      if (status === 'ac') {
        return <CheckCircle2 className="w-3 h-3 text-[var(--status-solved)] flex-shrink-0" />;
      }
      if (status === 'notac') {
        return <MinusCircle className="w-3 h-3 text-[var(--status-attempted)] flex-shrink-0" />;
      }
      // Spacer keeps ID/title alignment consistent across rows with and without a status
      return <div className="w-3 h-3 flex-shrink-0" />;
    };

const getStatusStyles = (status: LeetCodeProblem['status'], isSelected: boolean) => {
  if (status === 'ac') {
    return isSelected
      ? 'bg-[var(--status-solved)]/[0.12] border-l-[var(--status-solved)] border-l-4'
      : 'bg-[var(--status-solved)]/[0.06] border-l-[var(--status-solved)] border-l-2';
  }
  if (status === 'notac') {
    return isSelected
      ? 'bg-[var(--status-attempted)]/[0.12] border-l-[var(--status-attempted)] border-l-4'
      : 'bg-[var(--status-attempted)]/[0.06] border-l-[var(--status-attempted)] border-l-2';
  }
  // No status — fall back to generic selection styling
  return isSelected
    ? 'bg-[var(--accent)] border-l-[var(--primary)] border-l-4'
    : 'hover:bg-[var(--accent)] border-l-transparent';
};

    const isSelected = index === selectedIndex;

    return (
      <div
        ref={ref}
        className={`group px-4 py-3 cursor-pointer transition-all duration-150 border-l-2 ${getStatusStyles(
          problem.status,
          isSelected
        )}`}
        onClick={() => onOpen(problem)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {/* Problem ID + status icon */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <span className="text-xs font-semibold text-[var(--muted-foreground)] w-8">
                {problem.id}
              </span>
              {getStatusIcon(problem.status)}
            </div>

            {/* Problem Title */}
            <div className="flex-1 min-w-0">
              <div className="font-medium text-[var(--foreground)] text-sm truncate">
                {problem.title}
              </div>
            </div>
          </div>

          {/* Difficulty and metadata */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex items-center gap-1">
              <span className={`difficulty-dot ${getDifficultyDot(problem.difficulty)}`}></span>
              <span className="text-xs text-[var(--muted-foreground)]">
                {getDifficultyText(problem.difficulty)}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {problem.isPaidOnly && (
                <span className="text-xs text-[var(--chart-2)] font-medium">PRO</span>
              )}
              <ExternalLink className="w-3 h-3 text-[var(--muted-foreground)]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ProblemItem.displayName = 'ProblemItem';

export default ProblemItem;