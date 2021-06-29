import { render } from '@redwoodjs/testing'

import AdminBlockTitle from './AdminBlockTitle'

describe('AdminBlockTitle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminBlockTitle />)
    }).not.toThrow()
  })
})
