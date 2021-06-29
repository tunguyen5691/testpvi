import { render } from '@redwoodjs/testing'

import RegisterSuccessPage from './RegisterSuccessPage'

describe('RegisterSuccessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RegisterSuccessPage />)
    }).not.toThrow()
  })
})
