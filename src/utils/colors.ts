export const COLORS = {
  BLACK: "#000000",
  GOLD: "#d4af37",
  WHITE: "#ffffff",
  DARK_GRAY: "#1A1A1A",
} as const;

export type Color = keyof typeof COLORS;
