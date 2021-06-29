import { render } from '@redwoodjs/testing'

import AgencyTabs from './AgencyTabs'

describe('AgencyTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AgencyTabs />)
    }).not.toThrow()
  })
})
