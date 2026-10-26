/** Turns API names like "special-attack" into display names like "Special Attack". */
export function formatName(name: string): string {
  return name
    .split('-')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

/** Pads an ID the way the games show it: 25 -> "#0025". */
export function formatPokedexNumber(id: number): string {
  return `#${String(id).padStart(4, '0')}`
}
