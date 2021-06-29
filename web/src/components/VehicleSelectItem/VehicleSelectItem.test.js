import { render } from '@redwoodjs/testing'

import VehicleSelectItem from './VehicleSelectItem'

describe('VehicleSelectItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VehicleSelectItem />)
    }).not.toThrow()
  })
})
