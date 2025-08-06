// EmptyState.tsx
import React, { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl shadow-sm border border-gray-200 ${className}`}
    >
      {icon && <div className="mb-6 text-gray-400">{icon}</div>}

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 max-w-sm">{description}</p>

      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default EmptyState;
