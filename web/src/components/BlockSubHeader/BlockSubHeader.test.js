import { render } from '@redwoodjs/testing'

import BlockSubHeader from './BlockSubHeader'

describe('BlockSubHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlockSubHeader />)
    }).not.toThrow()
  })
})
