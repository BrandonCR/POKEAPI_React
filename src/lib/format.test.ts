import { describe, expect, it } from 'vitest'
import { formatName, formatPokedexNumber } from './format'

describe('formatName', () => {
  it('capitalizes each word and replaces dashes with spaces', () => {
    expect(formatName('special-attack')).toBe('Special Attack')
    expect(formatName('pikachu')).toBe('Pikachu')
  })

  it('ignores repeated dashes', () => {
    expect(formatName('black-hole-eclipse--physical')).toBe('Black Hole Eclipse Physical')
  })
})

describe('formatPokedexNumber', () => {
  it('pads to four digits', () => {
    expect(formatPokedexNumber(25)).toBe('#0025')
    expect(formatPokedexNumber(10034)).toBe('#10034')
  })
})
