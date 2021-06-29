import { render } from '@redwoodjs/testing'

import SupportIcon from './SupportIcon'

describe('SupportIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SupportIcon />)
    }).not.toThrow()
  })
})
