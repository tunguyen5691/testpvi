import { render } from '@redwoodjs/testing'

import RevenueTotal from './RevenueTotal'

describe('RevenueTotal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RevenueTotal />)
    }).not.toThrow()
  })
})
