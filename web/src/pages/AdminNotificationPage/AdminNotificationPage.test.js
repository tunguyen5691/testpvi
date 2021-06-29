import { render } from '@redwoodjs/testing'

import AdminNotificationPage from './AdminNotificationPage'

describe('AdminNotificationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminNotificationPage />)
    }).not.toThrow()
  })
})
