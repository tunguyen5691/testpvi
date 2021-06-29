import { render } from '@redwoodjs/testing'

import InsurrancePackageList from './InsurrancePackageList'

describe('InsurrancePackageList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InsurrancePackageList />)
    }).not.toThrow()
  })
})
