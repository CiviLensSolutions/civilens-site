import { ClaudeMark } from "./ClaudeMark";

export function ClaudeProBadge() {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "3px 10px 3px 8px",
      background: "rgba(217, 119, 87, 0.10)",
      boxShadow: "inset 0 0 0 1px rgba(217, 119, 87, 0.30)",
      borderRadius: 999,
      font: "600 14px/1 var(--font-sans)",
      color: "var(--fg-1)",
      verticalAlign: "baseline",
      marginRight: "0.35em",
      whiteSpace: "nowrap" as const,
    }}>
      Claude Pro
      <ClaudeMark size="1em" style={{ marginLeft: 0, verticalAlign: "-0.08em" }} />
    </span>
  );
}
