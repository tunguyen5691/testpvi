import { render } from '@redwoodjs/testing'

import Infographic from './Infographic'

describe('Infographic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Infographic />)
    }).not.toThrow()
  })
})
