export function greet(name: string): string {
  return `Hello, ${name}!`;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(greet("monorepo-demo"));
}

// ai-review monorepo test — 2026-06-04T04:39:48Z
