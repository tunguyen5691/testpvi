import { render } from '@redwoodjs/testing'

import UploadCmnd from './UploadCmnd'

describe('UploadCmnd', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UploadCmnd />)
    }).not.toThrow()
  })
})
