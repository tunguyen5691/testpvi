import { render } from '@redwoodjs/testing'

import Avata from './Avata'

describe('Avata', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Avata />)
    }).not.toThrow()
  })
})
