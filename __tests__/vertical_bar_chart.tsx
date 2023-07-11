import React from 'react'
import VerticalBarChart from "@/components/vertical_bar_chart";
import { render } from "./test-utils";
import '@testing-library/jest-dom'
import { SWRConfig } from "swr";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))


jest.mock('@/utils/world_bank_client', () => {
  return({
    __esModule: true,
    fetcher: jest.fn(() => {
      return {
        labels: ['2021'],
        data: []
      }
    })
  })
})

import { fetcher } from '@/utils/world_bank_client'

describe("VerticalBarChart", () => {
  it("matches snapshot", async () => {
    const { baseElement } = render(
      <SWRConfig value={{ provider: () => new Map() }}>
        <VerticalBarChart ></VerticalBarChart>
      </SWRConfig>
    )

    expect(baseElement).toMatchSnapshot()
  })

  it('calls for world_bank_clinet', async () => {
    const { findByTestId } = render(
      <SWRConfig value={{ dedupingInterval: 0, provider: () => new Map() }}>
        <VerticalBarChart ></VerticalBarChart>
      </SWRConfig>
    )

    await findByTestId('chart')
    expect(fetcher).toHaveBeenCalled()
  })
})
