import { render } from '@redwoodjs/testing'

import NavigationBar from './NavigationBar'

describe('NavigationBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationBar />)
    }).not.toThrow()
  })
})
