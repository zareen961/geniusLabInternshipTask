import React from 'react'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import { BsThreeDots } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'
import { IconContext } from 'react-icons'

import { MENU } from '../../../constants/MENU'
import logo from '../../../assets/images/logo-1.svg'
import MenuItem from './MenuItem'
import './Sidenav.css'

const Sidenav = ({ isOpen, setIsOpen, isSidenavOpen, setIsSidenavOpen }) => {
    const handleSidenavClick = () => {
        if (isSidenavOpen) {
            setIsSidenavOpen(false)
        } else {
            setIsOpen((prevIsOpen) => !prevIsOpen)
        }
    }

    return (
        <div className={isSidenavOpen ? 'sidenav' : 'sidenav closeSidebar'}>
            <div className="sidenav__logoWrapper">
                {isOpen && <img src={logo} alt="logo" />}
                <button onClick={handleSidenavClick} className="sidenav__toggleButton">
                    <IconContext.Provider value={{ size: '1.75rem', color: '#ddd' }}>
                        {isSidenavOpen ? (
                            <GrFormClose />
                        ) : isOpen ? (
                            <CgMenuLeft />
                        ) : (
                            <CgMenuRight />
                        )}
                    </IconContext.Provider>
                </button>
            </div>
            {MENU.slice(0, 2).map((menuTitle, index) => (
                <MenuItem isOpen={isOpen} menu={menuTitle} key={index} />
            ))}
            {isOpen ? (
                <h3>Components</h3>
            ) : (
                <IconContext.Provider value={{ size: '1.75rem', color: '#ddd' }}>
                    <BsThreeDots />
                </IconContext.Provider>
            )}
            {MENU.slice(2, 14).map((menuTitle, index) => (
                <MenuItem isOpen={isOpen} menu={menuTitle} key={index} />
            ))}
            {isOpen ? (
                <h3>Custom</h3>
            ) : (
                <IconContext.Provider value={{ size: '1.75rem', color: '#ddd' }}>
                    <BsThreeDots />
                </IconContext.Provider>
            )}
            {MENU.slice(14).map((menuTitle, index) => (
                <MenuItem isOpen={isOpen} menu={menuTitle} key={index} />
            ))}
        </div>
    )
}

export default Sidenav
