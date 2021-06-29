import { render } from '@redwoodjs/testing'

import LoginFormAgency from './LoginFormAgency'

describe('LoginFormAgency', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginFormAgency />)
    }).not.toThrow()
  })
})
