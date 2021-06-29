import { render } from '@redwoodjs/testing'

import UploadComp from './UploadComp'

describe('UploadComp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadComp />)
    }).not.toThrow()
  })
})
