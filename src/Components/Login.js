import { useState } from "react"
import { Link } from "react-router-dom"
const Login = ({ setIsLoggedIn }) => {
    const [form, setForm] = useState({ password: '', email: '' })
    const [loading, setLoading] = useState(false)
    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/signin", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ ...form })
        })
        const result = await res.json()
        // console.log(result);
        if (!result.id) {
            window.alert(result.message)
        }
        else {
            localStorage.setItem('token', result?.token)
            localStorage.setItem('following', JSON.stringify(result?.following))
            setIsLoggedIn(true)
        }
        setLoading(false)
    }
    return (
        <div className="login" align='center'>
            <form onSubmit={handleSubmit} >
                <h1 align="center" className="my-5" style={{ color: "white" }}>Login</h1>

                <input type="email" className="login-email" name="email" placeholder="Enter email" autofocus="true" onChange={formControl} required />


                <input type="password" className="login-password" name="password" placeholder="Password" autofocus="true" onChange={formControl} required />

                <button variant="primary" type="submit" className="login-submit" disabled={loading}>
                    {loading ? "Loading..." : "Submit"}
                </button>
                <div className='my-3' ><Link to="/signup" style={{ color: "white" }} >Don't have an account? Sign Up!</Link></div>
            </form>
        </div>
    )
}

export default Login;