import { render } from '@redwoodjs/testing'

import InsurranceInfoPage from './InsurranceInfoPage'

describe('InsurranceInfoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InsurranceInfoPage />)
    }).not.toThrow()
  })
})
