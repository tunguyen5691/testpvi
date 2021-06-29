import { render } from '@redwoodjs/testing'

import InsurranceStep2Page from './InsurranceStep2Page'

describe('InsurranceStep2Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InsurranceStep2Page />)
    }).not.toThrow()
  })
})
