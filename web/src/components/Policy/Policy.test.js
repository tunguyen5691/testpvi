import { render } from '@redwoodjs/testing'

import Policy from './Policy'

describe('Policy', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Policy />)
    }).not.toThrow()
  })
})
