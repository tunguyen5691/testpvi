import { render } from '@redwoodjs/testing'

import Insurrancestep2cPage from './Insurrancestep2cPage'

describe('Insurrancestep2cPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Insurrancestep2cPage />)
    }).not.toThrow()
  })
})
