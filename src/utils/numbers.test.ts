import { isValidNumber } from './numbers'

describe('isValidNumber', () => {
  it('returns true for valid numbers', () => {
    expect(isValidNumber('123456')).toBe(true)
    expect(isValidNumber('0')).toBe(true)
    expect(isValidNumber('789')).toBe(true)
  })

  it('returns false for non-numbers', () => {
    expect(isValidNumber('abc')).toBe(false)
    expect(isValidNumber('123abc')).toBe(false)
    expect(isValidNumber(' ')).toBe(false)
    expect(isValidNumber('123.456')).toBe(false)
  })
})
