import { render } from '@redwoodjs/testing'

import InsurranceItem from './InsurranceItem'

describe('InsurranceItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InsurranceItem />)
    }).not.toThrow()
  })
})
