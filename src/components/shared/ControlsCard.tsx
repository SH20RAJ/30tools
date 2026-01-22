import React from 'react';
import { cn } from '@/lib/utils';

interface ControlsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export default function ControlsCard({
  title,
  description,
  children,
  className,
  ...props
}: ControlsCardProps) {
  return (
    <div 
      className={cn("space-y-4", className)} 
      role="group" 
      aria-labelledby={title ? "controls-title" : undefined}
      {...props}
    >
      {(title || description) && (
        <div className="mb-4 space-y-1">
          {title && (
            <h3 id="controls-title" className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
