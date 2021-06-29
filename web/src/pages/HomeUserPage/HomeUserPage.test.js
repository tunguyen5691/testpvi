import { render } from '@redwoodjs/testing'

import HomeUserPage from './HomeUserPage'

describe('HomeUserPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeUserPage />)
    }).not.toThrow()
  })
})
