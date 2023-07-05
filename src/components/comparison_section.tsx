export interface ComparisonSectionProps {
  leftElement: JSX.Element
  rightElement: JSX.Element
}

export function ComparisonSeparator(): JSX.Element {
  return(
    <>
    </>
  )
}


export default function ComparisonSection({ leftElement, rightElement}: ComparisonSectionProps) {
  return(
    <div className="flex">
      {leftElement}
      <ComparisonSeparator />
      {rightElement}
    </div>
  )
}
