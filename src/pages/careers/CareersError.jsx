import { Link, useRouteError } from "react-router-dom"

export default function CareersError() {
const error = useRouteError()

  return (
<div className="careers-error">
    <h2 className="text-2xl font-bold">Error</h2>
    <p>{error.message}</p>
    <Link to="/">Back to the homepage</Link>
</div>    
  )
}
