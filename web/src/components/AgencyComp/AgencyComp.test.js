import { render } from '@redwoodjs/testing'

import AgencyComp from './AgencyComp'

describe('AgencyComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyComp />)
    }).not.toThrow()
  })
})
