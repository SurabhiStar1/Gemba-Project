import React from 'react'
import { Link, useNavigate, } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate("/login")   
    }, [navigate])
    return (
        <>
            <Link
                exact
                to="/login"
            >
                Login
            </Link>
        </>
    )
}

export default HomePage