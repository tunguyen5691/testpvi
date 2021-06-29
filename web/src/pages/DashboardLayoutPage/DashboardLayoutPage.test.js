import { render } from '@redwoodjs/testing'

import DashboardLayoutPage from './DashboardLayoutPage'

describe('DashboardLayoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardLayoutPage />)
    }).not.toThrow()
  })
})
