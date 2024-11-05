import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "../Styles/Styles.css"
import Cookies from 'js-cookie'
const Sidebar = () => {
    const naviget = useNavigate()
    useEffect(() => {   
        const token = Cookies.get("token");
        if (!token) {
            naviget("/companylogin");
        }
    })
    return (
        <>
            <main className='d-flex w-100'>
                <header>
                    <nav id="sidebarMenu" style={{marginTop:"80px"}} className="collapse d-lg-block sidebar collapse bg-white">
                        <div className="position-sticky">
                            <div className="list-group list-group-flush mx-3 bgPrimary rounded-1  mt-4">
                                <Link to={"/companyprofile"} className="text-nowrap  list-group-item  py-2" >
                                    <i className="fa fa-tachometer-alt  me-3 text-light"></i><span className='text-light'>Main dashboard</span>
                                </Link>
                                <Link to={"/joblisting"} className='className="text-nowrap  list-group-item  py-2"'>
                                <i class="fa-solid fa-briefcase me-3 text-white"></i><span className='text-light'>Job Listings</span>
                                </Link>
                                {/* <Link to={"/"} className='className="text-nowrap  list-group-item  py-2"'>
                                    <i className='fa fa-plus text-light me-3 '></i><span className='text-light'>Post a job</span>
                                </Link> */}
                            </div>
                        </div>
                    </nav>
                    <Navbar />
                </header>
                <Outlet />
            </main>
        </>
    )
}

export default Sidebar