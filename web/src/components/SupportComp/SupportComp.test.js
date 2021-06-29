import { render } from '@redwoodjs/testing'

import SupportComp from './SupportComp'

describe('SupportComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SupportComp />)
    }).not.toThrow()
  })
})
