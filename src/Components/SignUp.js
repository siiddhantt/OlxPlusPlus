import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = ({ setIsLoggedIn }) => {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({ name: '', password: '', email: '', address: '', phone: '', userLevel: 0 })

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const res = await fetch("https://survey-app-backend-1234.herokuapp.com/signup", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ ...form })
        })
        const result = await res.json()
        console.log(result);
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
    const formControl = (e) => {
        const { name, value } = e.target
        setForm((prev) => { return ({ ...prev, [name]: value }) })
    }
    return (
        <div className="signup" align="center">
            <form onSubmit={handleSubmit}>
                <h1 align="center" className="my-5" style={{ color: "white" }}>Sign-Up</h1>
                <input type="text" className="signup-name" placeholder="Enter name" required={true} onChange={formControl} name="name" />
                <input type="email" className="signup-email" placeholder="Enter email" required={true} onChange={formControl} name="email" />
                <input type="text" className="signup-phone" placeholder="Enter phone" required={true} onChange={formControl} name="phone" />
                <input type="text" className="signup-address" placeholder="Enter address" required={true} onChange={formControl} name="address" />
                <input type="password" className="signup-password" placeholder="Password" required={true} onChange={formControl} name="password" />
                <button variant="primary" className="login-submit" type="submit" disabled={loading}>
                    {loading ? "Loading..." : "Submit"}
                </button>
                <div className="mt-4 my-3">  <Link to="/login" style={{color:"white"}}>Already have an account? Login!</Link></div>
            </form>
            
        </div>
    )
}

export default Signup