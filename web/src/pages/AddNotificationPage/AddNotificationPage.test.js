import { render } from '@redwoodjs/testing'

import AddNotificationPage from './AddNotificationPage'

describe('AddNotificationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddNotificationPage />)
    }).not.toThrow()
  })
})
