import { render } from '@redwoodjs/testing'

import NotificationPage from './NotificationPage'

describe('NotificationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationPage />)
    }).not.toThrow()
  })
})
