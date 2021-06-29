import { render } from '@redwoodjs/testing'

import ChangePasswordPage from './ChangePasswordPage'

describe('ChangePasswordPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangePasswordPage />)
    }).not.toThrow()
  })
})
