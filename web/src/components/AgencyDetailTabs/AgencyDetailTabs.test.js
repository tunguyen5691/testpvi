import { render } from '@redwoodjs/testing'

import AgencyDetailTabs from './AgencyDetailTabs'

describe('AgencyDetailTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyDetailTabs />)
    }).not.toThrow()
  })
})
