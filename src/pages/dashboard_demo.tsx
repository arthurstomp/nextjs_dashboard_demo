import {
  Typography,
} from "@material-tailwind/react";
export default function DashboardDemo() {
  return(
    <>
      <div className="pt-2 w-full px-10" style={{ height: '130vh' }}>
        <div className="flex justify-between">
          <Typography variant="h1" color="blue-gray">
            Dashboard Demo
          </Typography>
          <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
        </div>
        <hr className="my-2 border-blue-gray-50" />
      </div>
    </>
  )
}
