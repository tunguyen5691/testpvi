import { render } from '@redwoodjs/testing'

import AdminSideBar from './AdminSideBar'

describe('AdminSideBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminSideBar />)
    }).not.toThrow()
  })
})
