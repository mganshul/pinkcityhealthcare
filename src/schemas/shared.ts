// Validation primitives shared by more than one schema in this folder.
// Kept as plain regexes (rather than Zod v4's newer z.email()) so the
// schemas stay dependency-light and stable — see BACKEND_ARCHITECTURE.md.
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phoneRegex = /^(?:\+91[\s-]?)?[6-9]\d{9}$/;
