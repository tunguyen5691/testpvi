import { render } from '@redwoodjs/testing'

import Payment from './Payment'

describe('Payment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Payment />)
    }).not.toThrow()
  })
})
