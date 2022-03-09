import { Outlet } from "react-router-dom"

type PrivateAdminType = {
    acceptedRoles: string[]
}

const PrivateAdmin: React.FC<PrivateAdminType> = ({acceptedRoles}) => {
  return (
    <Outlet />
  )
}

export default PrivateAdmin