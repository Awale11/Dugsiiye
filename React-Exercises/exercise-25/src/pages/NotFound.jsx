import { useRouteError } from "react-router"


export const NotFound = () => {

  const error = useRouteError();
  console.log(error)

  return (
    
    <div className="text-center ">
      <h2 className="text-2xl text-red-500 font-bold">Error</h2>
      <p className="text-xl text-gray-700 font-semibold">{error.statusText}</p>
      <p className="text-sm text-gray-500 ">Sorry didn't find page(404)</p>
    </div>
  )
}
