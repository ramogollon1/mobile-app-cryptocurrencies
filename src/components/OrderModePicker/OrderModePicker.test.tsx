import React from 'react'
import renderer from 'react-test-renderer'
import { OrderModePicker } from './OrderModePicker'
import { OrderMode } from '../../models/Order'

describe('OrderModePicker', () => {
  it('renders correctly', () => {
    const setOrderType = jest.fn()

    const tree = renderer
      .create(
        <OrderModePicker
          orderType={OrderMode.LIMIT}
          setOrderType={setOrderType}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
