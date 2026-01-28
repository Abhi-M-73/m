import React from 'react'
import Header from '../screen/landing/Navbar'
import Footer from '../screen/landing/Footer'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedLayout = ({ children }) => {
    const { isAuthenticated, token } = useSelector(state => state.auth)

    if (!isAuthenticated || !token) {
        return <Navigate to="/login" replace />
    }

    return (
        <>
            <Header />
            <div className="pt-14 bg-black/50">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default ProtectedLayout
