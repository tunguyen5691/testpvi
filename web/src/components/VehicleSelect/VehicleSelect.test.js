import { render } from '@redwoodjs/testing'

import VehicleSelect from './VehicleSelect'

describe('VehicleSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VehicleSelect />)
    }).not.toThrow()
  })
})
