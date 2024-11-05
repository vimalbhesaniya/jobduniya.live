import React, {
    useState,
    useContext,
    useCallback,
    useEffect,
    useMemo,
} from "react";
import Modal from "../../render-model/Modal";
import Swal from "sweetalert2";
import img from "../../Images/9318700.jpg"
import css from "../../Style/modal.module.css"
import moment from "moment"
import Cookies from "js-cookie";
import useAPI from "../../Hooks/USER/useAPI";
const Body = ({ style }) => {
    const Swal = require('sweetalert2')
    const [hide, setHide] = useState([]);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [toggle , setToggle] = useState(false);
    const api = useAPI();
    const id = Cookies.get("id");
    const handleHide = useCallback(
        (key, e) => {
            setHide((prev) => {
                setFilterData(Object.entries(e).filter(([key, _]) =>
                    jobSchemaKeys.includes(key)
                ));
                if (hide.includes(key)) {
                    return hide.filter((e) => e !== key);
                } else {
                    return [...prev, key];
                }
            });
        },
        [hide]
        );
        
        const fetch = useCallback(async () => {
            const jobs = await api.getREQUEST(`ListJob/${id}`);
            const apps = await api.getREQUEST(`fetchAppliedJobs/${id}`);
                setData(toggle?apps:jobs);
        // setFilterData[jobs[0]]
    });

    useEffect(() => {
        fetch();
    }, [toggle]);

    const jobSchemaKeys = [
        "Description",
        "Experience",
        "JobType",
        "Salary",
        "Responsiblities",
        "Overview",
        "Qualificaion",
        "Benifits",
    ];

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            allowOutsideClick: true,
            customClass: "customClass",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await api.deleteREQUEST("delete", "savedjobs", {
                    _id: id
                })
                if ((res)) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    fetch()
                }
            }
        });
    };
    const handleDeleteApps = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            allowOutsideClick: true,
            customClass: "customClass",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await api.deleteREQUEST("delete", "jobapplications", {
                    _id: id
                })
                if ((res)) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                    fetch()
                }
            }
        });
    };
        
    const perFormUnSave = async (id) => {


    }


    return (
        <>
            <div className={style}>
                <div className={css.TableContainer}>
                    <div className="d-flex justify-content-center align-items-center ">
                            <div class="btn-container">
                                <label class="switch btn-color-mode-switch">
                                    <input value="1" id="color_mode" onClick={(e) => setToggle(e.target.checked)} name="color_mode" type="checkbox" />
                                    <label class="btn-color-mode-switch-inner" data-off="SAVED" data-on="APPLIED" for="color_mode"></label>
                                </label>
                            </div>
                    </div>
                    <table className="table table-hover  table-responsive-md  align-middle mb-0 ">
                    <thead className="">
                    <tr className="w-25 ">
                        <td className="text-success fs-2 "> {toggle? "Applied jobs" : "Saved jobs" } {data.length}{}</td>
                    </tr>
                    </thead>
                        {data.length !== 0 ? data?.map((e) => (
                            <>
                                <thead className="">
                                    <tr>
                                        <th className="w-50">
                                            <div class="d-flex align-items-center">
                                                <div class="">
                                                    <p class="fw-bold fs-3">
                                                        {e.jobId.Title}
                                                    </p>
                                                    <p class="text-text-black-50">
                                                        {e.jobId.Position}
                                                    </p>
                                                    <p class="text-muted">
                                                        Posted On {moment(e.jobId.JobPostedTime?.split("T")[0], "YYYYMMDD").calendar().split("at")[0]}
                                                    </p>
                                                    <p className="text-warning">
                                                        Job posted by {e?.jobId?.company?.Name}
                                                    </p>
                                                </div>
                                            </div>
                                        </th>
                                        <th className="text-center">
                                            <div className="d-flex justify-content-center gap-2   align-items-end flex-column ">
                                                {toggle?<button onClick={() => {
                                                    handleDeleteApps(e._id)
                                                }} className="btn fw-bold   btn-outline-primary  ">
                                                    <i class="fa-solid fa-file-pen"></i>{" "}
                                                    Cancle Application
                                                </button> : 
                                                <button onClick={() => handleDelete(e._id)} className="btn fw-bold   btn-outline-primary ">
                                                <i class="fa-solid fa-trash"></i> Unsave job
                                                </button>
                                                
                                                }
                                                <button
                                                    className="btn fw-bold   btn-outline-info"
                                                    onClick={() =>
                                                        handleHide(e.jobId._id, e.jobId)
                                                    }
                                                >
                                                    {hide.includes(e.jobId._id) ? (
                                                        <>
                                                            <i className="fa fa-eye-slash"></i>{" "}
                                                            hide
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="fa fa-eye"></i>{" "}
                                                            view
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>

                                <thead className="hand table-info ">
                                    <tr
                                        className=""
                                        onClick={() => handleHide(e.jobId._id, e.jobId)}
                                    >
                                        <th>
                                            <b>More details</b>
                                        </th>
                                        <th className="text-end ">
                                            {!hide.includes(e.jobId._id) ? (
                                                <i class="fa-solid fa-caret-right"></i>
                                            ) : (
                                                <i class="fa-solid fa-caret-down"></i>
                                            )}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="table-active "
                                    style={
                                        !hide.includes(e?.jobId._id)
                                            ? {
                                                display: "none",
                                            }
                                            : {}
                                    }
                                >
                                    {filterData &&
                                        filterData?.map(([key, value]) => (
                                            <>
                                                <tr key={key}>
                                                    <td>
                                                        {key.toLocaleUpperCase()}
                                                    </td>
                                                    <td className="text-end">
                                                        {value.length > 0
                                                            ? Array.isArray(
                                                                value
                                                            )
                                                                ? value.join(
                                                                    ", "
                                                                )
                                                                : value
                                                            : "-"}
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                </tbody>
                            </>
                        )) : <>
                            <img src={img} className={css.imgFluidd} style={{ margin: "0 auto" }} alt="" />
                        </>}
                    </table>
                </div>
            </div>
        </>
    );
};
export default Body;
