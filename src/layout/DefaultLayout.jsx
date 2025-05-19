import React from 'react'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <>
            {/* header */}
            <header className="m-50">
                <div className="container">
                    <h1>react context api</h1>
                </div>
            </header>
            {/* main */}
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default DefaultLayout