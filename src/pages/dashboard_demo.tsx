import { createContext, useState } from 'react'
import { Typography } from "@material-tailwind/react"
import HeaderStat from "@/components/header_stat"
import VerticalBarChart from "@/components/vertical_bar_chart"
import HorizontalBarChart from '@/components/horizontal_bar_chart'
import RandomPieChart from '@/components/random_pie_chart'
import { Select, Option } from "@material-tailwind/react";

function LoremText() {
  return(
    <>
      <Typography variant="h4" color="blue-gray">
        Lorem Ipsum
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed eleifend nibh, ut semper nulla. Proin tristique ornare turpis auctor iaculis. Vestibulum consequat arcu at ex tempus interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam luctus ut augue vitae posuere. Nunc in nulla sed nisl volutpat fermentum. Mauris ante libero, aliquam et vestibulum et, rutrum at mi. Curabitur eget pellentesque tellus. Vestibulum placerat lacinia fermentum. Vivamus congue mauris ac libero dictum ullamcorper. Aliquam justo tortor, condimentum vel lobortis in, condimentum sed lectus. Morbi ac hendrerit libero, eget ornare sapien. Praesent interdum sed libero sed placerat. Cras velit eros, sodales sit amet imperdiet vel, dictum sit amet metus. Pellentesque sit amet libero at tortor sodales porta at auctor nunc.
      </Typography>
    </>
  )
}

const FIRST_YEAR = 1961
const LAST_YEAR = 2021

const yearOptions = (keyPrefix: string): JSX.Element[] => {
  let buf: JSX.Element[] = []
  for (let i = LAST_YEAR; i >= FIRST_YEAR; i--) {
    buf.push(<Option key={`${keyPrefix}-option-${i}`} value={i.toString()}>{i}</Option>)
  }

  return buf
}

export type YearRangeContextValue = {
  startingYear: number,
  endingYear: number,
}

export const YearRangeContext = createContext<YearRangeContextValue>({
  startingYear: 2016,
  endingYear: 2021
})

export default function DashboardDemo() {
  const [startingYear, setStartingYear] = useState<number>(2016)
  const [endingYear, setEndingYear] = useState<number>(2021)
  return(
    <>
      <YearRangeContext.Provider value={{ startingYear, endingYear }}>
        <div className="pt-2 w-full px-10">
          <div className="flex justify-between">
            <div>
              <Typography variant="h1" color="blue-gray">
                Dashboard Demo
              </Typography>
            </div>
            <div className="flex pt-[10px] justify-between min-w-[500px]">
              <div>
                <Select
                  variant="standard"
                  label="Starting Year"
                  value={startingYear.toString()}
                  onChange={(newValue) => setStartingYear(parseInt(newValue || '0'))}>
                  {yearOptions('starting-year')}
                </Select>
              </div>
              <div>
                <Select
                  variant="standard"
                  label="Ending Year"
                  value={endingYear.toString()}
                  onChange={(newValue) => setEndingYear(parseInt(newValue || '0'))}>
                  {yearOptions('ending-year')}
                </Select>
              </div>
            </div>
          </div>
          <hr className="my-2 border-blue-gray-50" />
          <div>
            <div className="w-100 flex justify-around">
              <div className="w-1/5 h-30">
                <HeaderStat title="Test #1" value="100" unity="%"/>
              </div>
              <div className="w-1/5 h-30">
                <HeaderStat title="Test #1" value="100" unity="%"/>
              </div>
              <div className="w-1/5 h-30">
                <HeaderStat title="Test #1" value="100" unity="%"/>
              </div>
              <div className="w-1/5 h-30">
                <HeaderStat title="Test #1" value="100" unity="%"/>
              </div>
            </div>

          </div>
          <hr className="my-2 border-blue-gray-50" />
          <section className="max-w-[100%] my-10 flex justify-around flex-wrap">
            <VerticalBarChart className="w-2/5"/>
            <div className="w-2/5">
              <div className="max-h-[300px] w-fit mx-auto">
                <RandomPieChart />
              </div>
            </div>
          </section>
          <section className="max-w-[100%] my-10 flex justify-around flex-wrap">
            <div className="w-2/5">
              <LoremText />
            </div>
            <HorizontalBarChart className="w-2/5" />
          </section>
        </div>

      </YearRangeContext.Provider>
    </>
  )
}
