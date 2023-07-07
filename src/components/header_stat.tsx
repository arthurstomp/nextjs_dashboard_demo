import { Card, Typography } from "@material-tailwind/react";

export type HeaderStatProps = {
  title: string
  value: string
  unity: string
}
export default function HeaderStat({ title, value, unity }: HeaderStatProps) {
  return(
    <Card className="w-full h-full min-w-[10rem] bg-blue-gray-50 p-5">
      <Typography variant='h4'>
        {title}
      </Typography>
      <div className="flex">
        <Typography variant='h3'>
          {value}
        </Typography>
        <Typography variant='h5' style={{lineHeight: 2.3}}>
          {unity}
        </Typography>
      </div>
    </Card>
  )
}
