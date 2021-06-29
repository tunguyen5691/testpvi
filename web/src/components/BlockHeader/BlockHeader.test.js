import { render } from '@redwoodjs/testing'

import BlockHeader from './BlockHeader'

describe('BlockHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlockHeader />)
    }).not.toThrow()
  })
})
