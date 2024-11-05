import React from "react";
import moment from "moment/moment";
import "../../Style/jobview.css";
const ViewJob = ({ setViewJob, viewJob, visible, setVisible, data }) => {
    return (
        <>
            <div className={"view container z-3 "}>
                <div class="modal-header pt-3 pb-2">
                    <h1 class="px-2 fs-3 text-black fw-bold">{data.Title}</h1>
                    <i
                        className="fa fa-close fs-3 px-2"
                        onClick={() => {
                            setViewJob("");
                        }}
                    ></i>
                </div>
            <hr />[]
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="sec1-box">
                                <div class="d-flex justify-content-between">
                                    <h3 className="fs-4">
                                        {data?.company?.Industry}
                                    </h3>
                                    <div class="icon-box">
                                        <a
                                            href=""
                                            class="text-decoration-none text-dark"
                                        >
                                            <i class="bx bx-dots-horizontal-rounded d-block fs-1"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center flex-lg-row flex-md-row flex-sm-row flex-row flex-wrap">
                                    <span>{data.company.Name} </span>
                                    <span>
                                        {
                                            data.company.Address[0]
                                                .personalAddress
                                        }
                                    </span>
                                    <span>
                                        {" "}
                                        {moment(data.JobPostedTime).fromNow()}
                                    </span>
                                    {/* <span>0 applicants</span> */}
                                </div>
                                <ul>
                                    <li>
                                        <i class="fa fa-briefcase"></i>
                                        {data.JobType}
                                    </li>
                                    {data.Qualificaion && (
                                        <li>
                                            <i class="fa fa-list-check"></i>
                                            <a href="">{data.Qualificaion}</a>
                                        </li>
                                    )}
                                    {data.company.establishedYear && (
                                        <li>
                                            <i class="fa fa-shield-halved"></i>
                                            Job poster joined LinkedIn in{" "}
                                            {data.company.establishedYear}
                                        </li>
                                    )}
                                    {/* <li><i class="fa fa-lightbulb"></i>See how you compare to 13 applicants</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="sec2-box mt-3">
                                <h2 class="fs-4">About the job</h2>
                                <div class="strong-box">
                                    <strong>
                                        {data.Title} - {data.Experience}{" "}
                                        Experience
                                    </strong>
                                    <strong>Position: {data.Position}</strong>
                                    <strong>
                                        Location:{" "}
                                        {data?.company?.Address[0].state}{" "}
                                    </strong>
                                </div>
                                <div class="about-box">
                                    <p>Overview</p>
                                    <ul class="about-ul">
                                        {data?.Overview?.length !== 0 ? (
                                            data?.Overview?.map((e) => {
                                                return <li>{e}</li>;
                                            })
                                        ) : (
                                            <li>No data found</li>
                                        )}
                                    </ul>
                                    <p>Key Responsibilities:</p>
                                    <ul class="about-ul">
                                        {data?.Responsiblities?.length !== 0 ? (
                                            data?.Responsiblities?.map((e) => {
                                                return <li>{e}</li>;
                                            })
                                        ) : (
                                            <li>No data found</li>
                                        )}
                                    </ul>

                                    <p>Qualifications and Skills:</p>
                                    <ul class="about-ul">
                                        {data?.Responsiblities?.length !== 0 ? (
                                            data?.Qualificaion?.map((e) => {
                                                return <li>{e}</li>;
                                            })
                                        ) : (
                                            <li>No data found</li>
                                        )}
                                    </ul>
                                    <span>Posted on {data?.JobPostedTime} </span>
                                </div>
                                <div class="company-box">
                                    <h3 class="fs-5">About the company</h3>
                                    <div class="company-mini">
                                        <div class="logo-box">
                                            <img src={data?.company?.Logo} alt=""
                                                onError={(e) => e.target.src = "https://kodilan.com/img/empty-company-logo.8437254b.png"}
                                            />
                                        </div>
                                        <div class="d-flex flex-column ps-2 wd">
                                            <h6>NTCL</h6>
                                            <p class="m-0">{data?.company?.TagLine}</p>
                                        </div>
                                        <button class="follow">
                                            <i class="bx bx-plus"></i> Follow
                                        </button>
                                    </div>
                                    {data?.Description?.length !== 0 ? (
                                        data?.Description?.map((e) => {
                                            return <h4>{e}</h4>;
                                        })
                                    ) : (
                                        ""
                                    )}
                                    <h1 className="fs-3">Owner</h1>
                                    <ul>
                                        <li>
                                            {data?.company?.OwnerDetail?.Name}
                                        </li>
                                    </ul>
                                    <h1 className="fs-3">HR</h1>
                                    <ul>
                                        <li>
                                            {data?.company?.HRDetail?.Name}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewJob;
