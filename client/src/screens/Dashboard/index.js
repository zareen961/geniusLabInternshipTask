import React, { useState } from 'react'

import Sidenav from '../../components/Dashboard/Sidenav'
import Header from '../../components/Dashboard/Header'
import Main from '../../components/Dashboard/Main'
import './Dashboard.css'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <div className={isOpen ? 'dashboard' : 'dashboard collapsed'}>
            <div className="dashboard__sidenav">
                <Sidenav isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className="dashboard__header">
                <Header />
            </div>
            <div className="dashboard__main">
                <Main />
            </div>
        </div>
    )
}

export default Dashboard
