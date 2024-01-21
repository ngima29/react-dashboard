import { Outlet} from 'react-router-dom'
const Layout = () => {
  return (
  <div>
    <div className="bg-sky-200"> Sidebar </div>
    <div className="bg-teal-200">header</div>
    <div>{<Outlet/>}</div>
  </div>
  )
}

export default Layout