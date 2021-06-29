import { render } from '@redwoodjs/testing'

import ButtonIcon from './ButtonIcon'

describe('ButtonIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonIcon />)
    }).not.toThrow()
  })
})
