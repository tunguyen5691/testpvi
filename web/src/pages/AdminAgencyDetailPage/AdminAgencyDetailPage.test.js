import { render } from '@redwoodjs/testing'

import AdminAgencyDetailPage from './AdminAgencyDetailPage'

describe('AdminAgencyDetailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminAgencyDetailPage />)
    }).not.toThrow()
  })
})
