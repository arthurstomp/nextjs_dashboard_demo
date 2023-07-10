import React from 'react'
import Sidebar from "@/components/sidebar";
import { render } from "./test-utils";
import '@testing-library/jest-dom'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: "/"
  }))
}))

describe("Sidebar", () => {
  it('renders blank sidebar', () => {
    const { getByTestId } = render(<Sidebar ></Sidebar>)

    const header = getByTestId('sidebar__header')
    const dashboardItem = getByTestId('sidebar__item--dashboard')

    expect(header).toHaveTextContent('Sidebar')
    expect(dashboardItem).toHaveTextContent('Dashboard')
  })

  it('renders blank sidebar with dashboard as active item', () => {
    jest.mock('next/router', () => ({
      useRouter: jest.fn(() => {
        pathname: "/dashboard_demo"
      })
    }))

    const { getByTestId } = render(<Sidebar ></Sidebar>)

    const header = getByTestId('sidebar__header')
    const dashboardItem = getByTestId('sidebar__item--dashboard')

    expect(header).toHaveTextContent('Sidebar')
    expect(dashboardItem).toHaveTextContent('Dashboard')
    expect(dashboardItem).toHaveClass('active')
  })
})
