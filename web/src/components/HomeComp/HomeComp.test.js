import { render } from '@redwoodjs/testing'

import HomeComp from './HomeComp'

describe('HomeComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeComp />)
    }).not.toThrow()
  })
})
