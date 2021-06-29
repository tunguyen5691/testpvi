import { render } from '@redwoodjs/testing'

import SidebarItem from './SidebarItem'

describe('SidebarItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarItem />)
    }).not.toThrow()
  })
})
