import { render } from '@redwoodjs/testing'

import AdminSearch from './AdminSearch'

describe('AdminSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminSearch />)
    }).not.toThrow()
  })
})
