import { describe, expect, it } from 'vitest'

import Person from "../src/sample"

describe('Class Tests', () => {
  it('should be a class instance', () => {
    const personInstance = new Person('Bob')
    expect(personInstance).toBeInstanceOf(Person)
  })
})