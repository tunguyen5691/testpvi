import { render } from '@redwoodjs/testing'

import AdminButtonIcon from './AdminButtonIcon'

describe('AdminButtonIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminButtonIcon />)
    }).not.toThrow()
  })
})
