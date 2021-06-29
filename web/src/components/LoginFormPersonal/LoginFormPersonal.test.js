import { render } from '@redwoodjs/testing'

import LoginFormPersonal from './LoginFormPersonal'

describe('LoginFormPersonal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginFormPersonal />)
    }).not.toThrow()
  })
})
