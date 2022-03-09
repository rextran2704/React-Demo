import { Link } from "react-router-dom"

const PublicPage = () => {
  return (
    <div>
      <div>PublicPage</div>
      <Link to="/private">Private Link</Link>
    </div>
  )
}

export default PublicPage