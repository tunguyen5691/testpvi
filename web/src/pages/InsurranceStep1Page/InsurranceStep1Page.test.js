import { render } from '@redwoodjs/testing'

import InsurranceStep1Page from './InsurranceStep1Page'

describe('InsurranceStep1Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InsurranceStep1Page />)
    }).not.toThrow()
  })
})
