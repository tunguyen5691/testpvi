import { render } from '@redwoodjs/testing'

import AdminOrderlistPersonalPage from './AdminOrderlistPersonalPage'

describe('AdminOrderlistPersonalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminOrderlistPersonalPage />)
    }).not.toThrow()
  })
})
