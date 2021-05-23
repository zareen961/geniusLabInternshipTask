import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { FiSettings } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'

import { FiLogOut } from 'react-icons/fi'
import { IoSearchOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import { useDispatch, useSelector } from 'react-redux'

import { userLogout } from '../../../store/action'
import language from '../../../assets/images/226-united-states.svg'
import './Header.css'

const Header = ({ setIsSidenavOpen, isSidenavOpen }) => {
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.userLogin)
    return (
        <div className="header">
            <div className="header__menu">
                <DropdownButton id="dropdown-item-button" title="Pages">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="Reports">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <DropdownButton id="dropdown-item-button" title="Apps">
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="header__rightWrapper">
                <IconContext.Provider
                    value={{ className: 'iconHeader sidenavToggle', color: '#3e97ff' }}
                >
                    <button onClick={() => setIsSidenavOpen(!isSidenavOpen)}>
                        {isSidenavOpen ? <CgMenuLeft /> : <CgMenuRight />}
                    </button>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'iconHeader' }}>
                    <IoSearchOutline />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'iconHeader' }}>
                    <IoMdNotificationsOutline />
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'iconHeader' }}>
                    <FiSettings />
                </IconContext.Provider>
                <img src={language} alt="language" />
                <span>
                    Hi,{' '}
                    <span className="name">
                        {user && user.userInfo ? user.userInfo.firstName : 'Alex'}
                    </span>
                </span>
                <img
                    src={
                        user && user.userInfo && user.userInfo.image
                            ? user.userInfo.image
                            : language
                    }
                    alt="userImage"
                />

                <IconContext.Provider
                    value={{ className: 'iconHeader', color: '#3e97ff' }}
                >
                    <button onClick={() => dispatch(userLogout())}>
                        <FiLogOut />
                    </button>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Header
