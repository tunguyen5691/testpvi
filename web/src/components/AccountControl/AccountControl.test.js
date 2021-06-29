import { render } from '@redwoodjs/testing'

import AccountControl from './AccountControl'

describe('AccountControl', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountControl />)
    }).not.toThrow()
  })
})
