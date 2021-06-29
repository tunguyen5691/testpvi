import { render } from '@redwoodjs/testing'

import Title from './Title'

describe('Title', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Title />)
    }).not.toThrow()
  })
})
