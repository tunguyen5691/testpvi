import { render } from '@redwoodjs/testing'

import AdminHeader from './AdminHeader'

describe('AdminHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminHeader />)
    }).not.toThrow()
  })
})
