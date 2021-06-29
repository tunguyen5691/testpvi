import { render } from '@redwoodjs/testing'

import ProgressBar from './ProgressBar'

describe('ProgressBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProgressBar />)
    }).not.toThrow()
  })
})
