import Cookies from 'js-cookie';
import React from 'react'
import img from "../../Images/pngwing.com.png"

const MyModel = ({ setModell }) => {
    const performLogOut = () => {

        Cookies.remove("token");
        setModell(false)
        window.location.replace("/login")
    }

    return (
        <div className='mymodel'>
            <div className='modelbody ' >
                <div className='w-25 imgcontainer'>
                    <img src={img} className='img-fluid' alt="" />
                </div>
                <h1 className='modelmsg text-muted'>Oops! Looks like your session has expired. Kindly log in again to continue.</h1>
                <button className="btn btn-danger" onClick={() => performLogOut()}>Log In</button>
            </div>
        </div>
    )
}

export default MyModel