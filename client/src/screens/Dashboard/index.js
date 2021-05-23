import React, { useState } from 'react'

import Sidenav from '../../components/Dashboard/Sidenav'
import Header from '../../components/Dashboard/Header'
import Main from '../../components/Dashboard/Main'
import './Dashboard.css'

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isSidenavOpen, setIsSidenavOpen] = useState(false)

    return (
        <div className={isOpen && !isSidenavOpen ? 'dashboard' : 'dashboard collapsed'}>
            <div
                className={
                    isSidenavOpen
                        ? 'dashboard__sidenav'
                        : 'dashboard__sidenav closeSidenav'
                }
            >
                <Sidenav
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    isSidenavOpen={isSidenavOpen}
                    setIsSidenavOpen={setIsSidenavOpen}
                />
            </div>
            <div className="dashboard__header">
                <Header
                    isSidenavOpen={isSidenavOpen}
                    setIsSidenavOpen={setIsSidenavOpen}
                />
            </div>
            <div className="dashboard__main">
                <Main />
            </div>
        </div>
    )
}

export default Dashboard
