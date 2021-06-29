import { render } from '@redwoodjs/testing'

import Loading from './Loading'

describe('Loading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })
})
