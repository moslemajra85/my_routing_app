import { Navigate } from "react-router-dom"
const ProtectedRoute = ({ isAuthenticated, children }) => {

    if (isAuthenticated) {
        return children
    }
    return <Navigate to="/login" />


}

export default ProtectedRoute