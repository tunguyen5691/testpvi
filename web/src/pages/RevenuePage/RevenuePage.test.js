import { render } from '@redwoodjs/testing'

import RevenuePage from './RevenuePage'

describe('RevenuePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RevenuePage />)
    }).not.toThrow()
  })
})
