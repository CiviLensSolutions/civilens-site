interface ClaudeMarkProps {
  size?: string | number;
  color?: string;
  style?: React.CSSProperties;
}

export function ClaudeMark({ size = "1em", color = "#D97757", style = {} }: ClaudeMarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-label="Claude"
      style={{ display: "inline-block", verticalAlign: "-0.12em", marginLeft: "0.32em", flexShrink: 0, ...style }}
    >
      <g fill={color}>
        <path d="M12 1.4c.55 0 1 .45 1 1V9.5c0 .55-.45 1-1 1s-1-.45-1-1V2.4c0-.55.45-1 1-1z" />
        <path d="M12 13.5c.55 0 1 .45 1 1v7.1c0 .55-.45 1-1 1s-1-.45-1-1v-7.1c0-.55.45-1 1-1z" />
        <path d="M1.4 12c0-.55.45-1 1-1H9.5c.55 0 1 .45 1 1s-.45 1-1 1H2.4c-.55 0-1-.45-1-1z" />
        <path d="M13.5 12c0-.55.45-1 1-1h7.1c.55 0 1 .45 1 1s-.45 1-1 1h-7.1c-.55 0-1-.45-1-1z" />
        <path d="M5.05 5.05c.39-.39 1.02-.39 1.41 0L9.6 8.19c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L5.05 6.46c-.39-.39-.39-1.02 0-1.41z" />
        <path d="M14.4 14.4c.39-.39 1.02-.39 1.41 0l3.14 3.14c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L14.4 15.81c-.39-.39-.39-1.02 0-1.41z" />
        <path d="M18.95 5.05c.39.39.39 1.02 0 1.41L15.81 9.6c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l3.14-3.14c.39-.39 1.02-.39 1.41 0z" />
        <path d="M9.6 14.4c.39.39.39 1.02 0 1.41l-3.14 3.14c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L8.19 14.4c.39-.39 1.02-.39 1.41 0z" />
      </g>
    </svg>
  );
}
