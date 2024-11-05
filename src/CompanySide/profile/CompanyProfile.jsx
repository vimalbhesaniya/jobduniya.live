import React, { useState } from "react";
import css from "../Styles/css.module.css";


function UserProfileCard() {
    return (
        <div className="card mb-4">
            <div className="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 className="my-3">John Smith</h5>
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">Follow</button>
                    <button type="button" className="btn btn-outline-primary ms-1">Message</button>
                </div>
            </div>
        </div>
    );
}

function ContactInfo() {
    return (
        <div className="card mb-4 mb-lg-0">
            <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i className="fas fa-globe fa-lg text-warning"></i>
                        <p className="mb-0">https://mdbootstrap.com</p>
                    </li>
                    {/* Add more list items for other contact info */}
                </ul>
            </div>
        </div>
    );
}

function ProjectStatusCard() {
    return (
        <div className="card mb-4 mb-md-0">
            <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assignment</span> Project Status</p>
                <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                <div className="progress rounded" style={{ height: '5px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                {/* Add more progress bars for other project statuses */}
            </div>
        </div>
    );
}

function UserInfoCard() {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">example@example.com</p>
                    </div>
                </div>
                {/* Add more rows for other user information */}
            </div>
        </div>
    );
}


function UserProfile() {
    return (
        <section  className="w-100 overflow-scroll  vh-100 mt-5" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5">
            <div class="row">
                    <div class="col-xl-4 col-sm-6 col-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between px-md-1">
                                    <div class="align-self-center">
                                        <i class="fas fa-pencil-alt text-info fa-3x"></i>
                                    </div>
                                    <div class="text-end">
                                        <h3>278</h3>
                                        <p class="mb-0">Jobs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between px-md-1">
                                    <div class="align-self-center">
                                        <i class="far fa-comment-alt text-warning fa-3x"></i>
                                    </div>
                                    <div class="text-end">
                                        <h3>156</h3>
                                        <p class="mb-0">New Applications</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-sm-6 col-12 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between px-md-1">
                                    <div class="align-self-center">
                                        <i class="far fa-comment-alt text-warning fa-3x"></i>
                                    </div>
                                    <div class="text-end">
                                        <h3>156</h3>
                                        <p class="mb-0">Feedbacks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <UserProfileCard />
                        <ContactInfo />
                    </div>
                    <div className="col-lg-4">
                    <ProjectStatusCard />
                    </div>
                    <div className="col-lg-4">
                    <UserInfoCard />
                    </div>
                    {/* Add more components for other sections */}
                </div>
            </div>
        </section>
    );
}



const CompanyProfile = () => {
    const [profile, setProfile] = useState([]);

    return (
        <>
                <UserProfile />
        </>
    );
};

export default CompanyProfile;
