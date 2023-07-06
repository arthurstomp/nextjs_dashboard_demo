import { Typography } from "@material-tailwind/react"
import HeaderStat from "@/components/header_stat"
import VerticalBarChart from "@/components/vertical_bar_chart"

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

export default function DashboardDemo() {
  return(
    <>
      <div className="pt-2 w-full px-10" style={{ height: '130vh' }}>
        <div className="flex justify-between">
          <Typography variant="h1" color="blue-gray">
            Dashboard Demo
          </Typography>
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
        <section className="max-w-[100%] my-10 flex justify-between flex-wrap">
          <VerticalBarChart className="w-1/2"/>
          <div className="w-1/2">
            <LoremText />
          </div>
        </section>
        <section className="max-w-[100%] my-10 flex justify-between flex-wrap">
          <div className="w-1/2">
            <LoremText />
          </div>
        </section>
      </div>
    </>
  )
}
