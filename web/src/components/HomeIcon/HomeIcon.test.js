import { render } from '@redwoodjs/testing'

import HomeIcon from './HomeIcon'

describe('HomeIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeIcon />)
    }).not.toThrow()
  })
})
