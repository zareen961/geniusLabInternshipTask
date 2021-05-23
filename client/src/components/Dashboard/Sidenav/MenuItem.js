import React, { useState } from 'react'
import { RiArrowDropRightLine, RiArrowDropDownLine } from 'react-icons/ri'
import { BsDot } from 'react-icons/bs'
import { IconContext } from 'react-icons'

import SUBMENU from '../../../constants/SUBMENU'
import { GetMenuIcon } from '../../../constants/MENU'
import './Sidenav.css'

const MenuItem = ({ isOpen, menu }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

    return (
        <>
            <div
                className="sidenav__menuItem"
                onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            >
                <IconContext.Provider value={{ className: 'icon' }}>
                    <GetMenuIcon menu={menu} />
                </IconContext.Provider>
                {isOpen && (
                    <>
                        <h2 onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>{menu}</h2>
                        <IconContext.Provider value={{ className: 'iconRight' }}>
                            <button onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
                                {isSubMenuOpen ? (
                                    <RiArrowDropDownLine />
                                ) : (
                                    <RiArrowDropRightLine />
                                )}
                            </button>
                        </IconContext.Provider>
                    </>
                )}
            </div>
            {isOpen && (
                <div
                    className={
                        isSubMenuOpen ? 'sidenav__subMenu open' : 'sidenav__subMenu'
                    }
                >
                    {SUBMENU.map((title) => (
                        <div className="sidenav__subMenuItem" key={title}>
                            <span>
                                <IconContext.Provider value={{ size: '1.75rem' }}>
                                    <BsDot />
                                </IconContext.Provider>
                            </span>
                            <span className="text">{title}</span>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default MenuItem
