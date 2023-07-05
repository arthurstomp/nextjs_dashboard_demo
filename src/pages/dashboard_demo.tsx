import { Typography } from "@material-tailwind/react"
import HeaderStat from "@/components/header_stat"

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
      </div>
    </>
  )
}
