import { render } from '@redwoodjs/testing'

import AdminAgencyListPage from './AdminAgencyListPage'

describe('AdminAgencyListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminAgencyListPage />)
    }).not.toThrow()
  })
})
