import { useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {

    const navigate = useNavigate()
    return (
        <div className="text-center">

            <h1 className="text-blue-500 text-3xl font-bold">🦸 Login To Your Account</h1>
            <button onClick={() => {
                handleLogin();
                navigate("/dashboard")

            }} className="bg-blue-600 p-4 rounded-lg cursor:pointer hover:bg-blue-700 text-white">🔒 Login</button>
        </div>
    )
}

export default Login