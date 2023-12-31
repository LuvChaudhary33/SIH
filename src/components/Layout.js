import React, { useState } from 'react'
import "../layout.css"
import {Link, useLocation, useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'

const Layout = ({children}) => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false)
    const {user} = useSelector((state) =>state.user);
    const location = useLocation()
    const userMenu = [
        {
            name: "Home",
            link: "/",
            icon: 'ri-home-line'
        },{
            name: "Appointments",
            path: "/appointments",
            icon: 'ri-file-list-line'
        },{
            name: "Apply Doctor",
            path: "/apply-doctor",
            icon: 'ri-hospital'
        },{
            name: "Profile",
            path: "/profile",
            icon: 'ri-user-line'
        }
    ];
    const adminMenu = [
        {
            name: "Home",
            link: "/",
            icon: 'ri-home-line'
        },{
            name: "Users",
            path: "/users",
            icon: 'ri-user-line'
        },{
            name: "Doctors",
            path: "/doctors",
            icon: 'ri-user-star-line'
        },{
            name: "Profile",
            path: "/profile",
            icon: 'ri-user-line'
        }
    ];

    const menuToBeRendered = user?.isAdmin ? adminMenu: userMenu

  return (
    <div className='main p-2'>
        <div className='d-flex menu-item'>
            <div className="sidebar">
                <div className='sidebar-header'>
                    <h1 className='logo'>SH</h1>
                </div>

                <div className='menu'>
                    {menuToBeRendered.map((menu) =>{
                        const isActive = location.pathname === menu.path
                        return <div className= {`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                            <i className={menu.icon}></i>
                            {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                        </div>
                    })}
                    <div className= "d-flex menu-item" onClick={() =>{
                        localStorage.clear()
                        navigate("/login")
                    }}>
                        <i className="ri-logout-circle-line"></i>
                        {!collapsed && <Link to='/login'>Logout</Link>}
                    </div>
                </div>
            </div>

            <div className='content'>
                <div className='header'>
                    {collapsed ? <i className='ri-menu-2-fill header-action-icon' onClick={() =>setCollapsed(false)}></i>:<i className='ri-close-fill header-action-icon' onClick={() =>setCollapsed(true)}></i>}
                    <div className='d-flex align-items-center px-4'>
                        <i className='ti-notification-line header-action-icon px-3'></i>
                        <Link className='anchor' to="/profile">{user?.name}</Link>
                    </div>
                </div>
                <div className='body'>{children}</div>
            </div>
        </div>
    </div>
  )
}

export default Layout