import { render } from '@redwoodjs/testing'

import HistoryIcon from './HistoryIcon'

describe('HistoryIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HistoryIcon />)
    }).not.toThrow()
  })
})
