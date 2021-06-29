import { render } from '@redwoodjs/testing'

import AdminOrderListPage from './AdminOrderListPage'

describe('AdminOrderListPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminOrderListPage />)
    }).not.toThrow()
  })
})
