import { render } from '@redwoodjs/testing'

import CardSp from './CardSp'

describe('CardSp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CardSp />)
    }).not.toThrow()
  })
})
