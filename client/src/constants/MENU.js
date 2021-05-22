import React from 'react'
import { GoGraph, GoScreenFull, GoBook } from 'react-icons/go'
import { FiSettings, FiGift } from 'react-icons/fi'
import {
    RiStackLine,
    RiPieChart2Line,
    RiCalendarEventLine,
    RiPagesLine,
    RiErrorWarningLine,
    RiContactsBook2Line,
} from 'react-icons/ri'
import { IoRocketOutline, IoChatbubblesOutline } from 'react-icons/io5'
import { FaWpforms, FaRegCalendarAlt } from 'react-icons/fa'
import { MdLaptop } from 'react-icons/md'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { BiBarChartSquare, BiBell, BiConfused } from 'react-icons/bi'

export const GetMenuIcon = ({ menu }) => {
    switch (menu) {
        case 'Dashboards':
            return <GoGraph />
        case 'Layout Builder':
            return <FiSettings />
        case 'Base':
            return <RiStackLine />
        case 'Custom':
            return <IoRocketOutline />
        case 'Extended':
            return <GoScreenFull />
        case 'Widgets':
            return <RiPieChart2Line />
        case 'Forms':
            return <FaWpforms />
        case 'Keen Wizard':
            return <MdLaptop />
        case 'Keen Database':
            return <RiCalendarEventLine />
        case 'DataTables':
            return <HiOutlineClipboardList />
        case 'Icons':
            return <FiGift />
        case 'Portfolios':
            return <RiPagesLine />
        case 'Calendar':
            return <FaRegCalendarAlt />
        case 'Charts':
            return <BiBarChartSquare />
        case 'Blog':
            return <IoChatbubblesOutline />
        case 'Pricing':
            return <GoBook />
        case 'Invoices':
            return <BiBell />
        case "FAQ's":
            return <RiErrorWarningLine />
        case 'User Pages':
            return <RiContactsBook2Line />
        default:
            return <BiConfused />
    }
}

export const MENU = [
    'Dashboards',
    'Layout Builder',
    'Base',
    'Custom',
    'Extended',
    'Widgets',
    'Forms',
    'Keen Wizard',
    'Keen Database',
    'DataTables',
    'Icons',
    'Portfolios',
    'Calendar',
    'Charts',
    'Blog',
    'Pricing',
    'Invoices',
    "FAQ's",
    'User Pages',
]
