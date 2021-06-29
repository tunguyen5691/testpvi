import { render } from '@redwoodjs/testing'

import LoginTabs from './LoginTabs'

describe('LoginTabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginTabs />)
    }).not.toThrow()
  })
})
