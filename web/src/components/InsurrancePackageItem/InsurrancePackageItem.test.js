import { render } from '@redwoodjs/testing'

import InsurrancePackageItem from './InsurrancePackageItem'

describe('InsurrancePackageItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InsurrancePackageItem />)
    }).not.toThrow()
  })
})
