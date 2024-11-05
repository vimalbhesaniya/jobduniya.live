import React from 'react'
import img from "../../Images/black.png";
const Navbar = () => {
    return (
        <>
            <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-mdb-collapse-init data-mdb-target="#sidebarMenu"
                        aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>

                    <a class="navbar-brand" href="#">
                        <img src={img} height="45" alt=""
                            loading="lazy" />
                    </a>
                    <form class="d-none d-md-flex input-group w-auto my-auto">
                        <input autocomplete="off" type="search" class="form-control rounded"
                            placeholder='Search (ctrl + "/" to focus)' style={{minWidth :"225px"}} />
                        <span class="input-group-text border-0"><i class="fas fa-search"></i></span>
                    </form>

                    <ul class="navbar-nav ms-auto d-flex flex-row">
                        <li class="nav-item dropdown">
                            <a class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#"
                                id="navbarDropdownMenuLink" role="button" data-mdb-dropdown-init aria-expanded="false">
                                <i class="fas fa-bell"></i>
                                <span class="badge rounded-pill badge-notification bg-danger">1</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar