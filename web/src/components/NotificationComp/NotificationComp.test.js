import { render } from '@redwoodjs/testing'

import NotificationComp from './NotificationComp'

describe('NotificationComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationComp />)
    }).not.toThrow()
  })
})
