import { render } from '@redwoodjs/testing'

import ButtonFoatBottom from './ButtonFoatBottom'

describe('ButtonFoatBottom', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonFoatBottom />)
    }).not.toThrow()
  })
})
