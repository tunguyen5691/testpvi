import { render } from '@redwoodjs/testing'

import HeaderBar from './HeaderBar'

describe('HeaderBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderBar />)
    }).not.toThrow()
  })
})
