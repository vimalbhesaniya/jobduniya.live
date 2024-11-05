import { useContext, useState, useEffect } from "react";
import home from "../../Style/home.module.css"
import Lottie from "lottie-react";
import searchjson from "../../assets/search.json";
import JobCard from "./JobCard";
import applications from "../../assets/applications.json";
import send from "../../assets/send.json";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Footer from "./Footer";
import { EnableSpinner } from "../..";
import useAPI from "../../Hooks/USER/useAPI";
import { useNavigate } from "react-router-dom";
import GlobalModel from "../../Global/GlobalModel";
import ViewJob from "./viewJob";
import Cookies from "js-cookie";
const Home = ({ setModell }) => {
    const [data, setData] = useState("");
    const [imgLoading, setImgLoading] = useState(true);
    const setSpinner = useContext(EnableSpinner);
    const item = localStorage.getItem("data");
    const api = useAPI();
    const [jobs, setJobs] = useState([]);
    const [feedback, setFeedback] = useState();
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const call = async () => {
        const data = await api.getREQUEST("fetchAll/jobs/10/0")
        setJobs(data);
    }
    useEffect(() => {
        call()
    }, [])
    // console.log(jobs);
    // console.log(feedback , email);
    const handleSubmit = async () => {
        const userId = Cookies.get("id");
        const response = await api.postREQUEST("feedback", JSON.stringify({ userId, feedback }))
        if (response.success) {
            console.log(response.message);
        }
        else {
            console.log(response.message);
        }
    }
    
    const handleNavigateToJobs=()=>{
        navigate("/jobs")
    }

    return (
        <>
            {/* { Check() &&  */}
            <>
                <div className="home--">
                    <section className={home.section1}>
                        <header className={home.header}>
                            <div className={home.contentLeft}>
                                <div className={home.badge}>
                                    <span className={home.badgeChild1}>NEW</span>
                                    <span >stay connected to get upcoming jobs</span>
                                </div>
                                <span className={home.h1}>
                                    Fast and most existing jobs in india
                                </span>
                            </div>
                            <div className={home.contentRight}>
                                <img
                                    src={"https://firebasestorage.googleapis.com/v0/b/jobduniya-ec494.appspot.com/o/home.jpg?alt=media&token=f250c6fd-124c-4f05-9ceb-37b03a276a55"}
                                    alt=""
                                    sizes="1"
                                    className={home.rightImage}
                                    srcset=""
                                    loading="lazy"
                                />
                            </div>
                        </header>
                        <div className={home.cardsSection}>
                            <div className={home.cardMain}>
                                <div className={home.cards}>
                                    <p className={home.cardHeader}>
                                        Unlock Your Potential: Find Your Dream with our job portal Today!
                                    </p>
                                    <p className={home.cardPara}>
                                        - Empower job seekers to discover fulfilling career
                                        opportunities tailored to their skills and aspirations.
                                    </p>
                                    <div className={home.cardFooter}>
                                        <Lottie
                                            animationData={searchjson}
                                            loop={true}
                                            style={{ height: "100%", width: "100%" }}
                                        />
                                    </div>
                                </div>
                                <div className={home.cards}>
                                    <p className={home.cardHeader}>
                                        Your Gateway to Success: Explore Endless Career Possibilities!
                                    </p>
                                    <p className={home.cardPara}>
                                        - Invite users to explore a diverse range of job listings and
                                        take the first step towards achieving their professional
                                        goals.
                                    </p>
                                    <div className={home.cardFooter}>
                                        <a href="#" >
                                            <Lottie
                                                animationData={send}
                                                loop={true}
                                                style={{ height: "100%", width: "100%" }}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className={home.cards}>
                                    <p className={home.cardHeader}>
                                        Start Your Journey Here: Connect with Top Employers within
                                        India!
                                    </p>
                                    <p className={home.cardPara}>
                                        - Highlight the platform's capability to connect talented
                                        individuals with leading companies, fostering mutually
                                        beneficial career partnerships.
                                    </p>
                                    <div className={home.cardFooter}>
                                        <Lottie
                                            animationData={applications}
                                            loop={true}
                                            style={{ height: "100%", width: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </section>
                    <section className={home.section2}>
                        <div className={home.header2}>
                            <div className={home.contentLeft2}>
                                <span className={home.h1}>Explore the letest jobs openings</span>
                                <p className={home.openings}>
                                    Welcome to our job portal, where endless possibilities await
                                    you! We are thrilled to announce a plethora of new job openings
                                    across diverse industries and roles, all curated to match your
                                    unique skills and aspirations.
                                </p>
                            </div>
                            <div className={home.contentRight2}>
                                <button onClick={handleNavigateToJobs} className={`hand ${home.button}`}>
                                    See all jobs
                                    <div className={home.hoverEffect}>
                                        <div></div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <section className={home.jobS}>
                            {jobs?.map((e) => {
                                return <>
                                    <div class="main-box">
                                        <div class="content-box">
                                            <div class="line1">
                                                <div class="img-box">
                                                    <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b342eb4424d_Dribble%20Icon.svg" alt="" />
                                                    {/* <img src={e.company.Logo} alt="" /> */}
                                                </div>
                                                <div class="mini-box">
                                                    <div class="sub-h">{e.company.Name}</div>
                                                    <div class="sub-p">{e.JobPostedTime}</div>
                                                </div>
                                            </div>
                                            <h6>{e.Title}</h6>
                                            <div class="mid-line">
                                                <div class="job-c">{e.Position}</div>
                                                <div class="job-h">{e.JobType}</div>
                                            </div>
                                            <div class="last-box">
                                                <div className={`${home.locbox} `}>
                                                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2585b442b4_Location%20Icon.svg" alt="" />
                                                    {e.company.Address[0].city} , {e.company.Address[0].state}
                                                </div>
                                                <div className={home.locbox}>
                                                    <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b73d8b44295_Salary%20Icon.svg" alt="" />{e.Salary}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })}
                        </section>
                    </section>
                    <section className={home.section3}>
                        <div className={home.feedbackMain}>
                            <span className={home.h2}>Tell Us What You Think</span>
                            <div className={home.feedBackFrom}>
                                <span className={home.lightText}>
                                    Share your thoughts with us.
                                </span>
                                <textarea
                                    name=""
                                    id=""
                                    placeholder="write your feedback here..."
                                    className={home.feedbackMsgBox}
                                    cols="10"
                                    rows="5"
                                    onChange={(e) => setFeedback(e.target.value)}
                                ></textarea>
                            </div>
                            <div className={home.feedBackFrom}>
                                {/* <span className={home.lightText}>
                                    Enter your email address to get a response.
                                </span> */}
                                {/* <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={home.emailTextBox}
                                    onChange={(e)=>setEmail(e.target.value)}
                                /> */}
                                <button className={home.submitButton} onClick={() => handleSubmit()}>submit</button>
                            </div>
                        </div>
                        <div className={home.feedbackRight}>
                            <img
                                loading="lazy"
                                src="https://firebasestorage.googleapis.com/v0/b/jobduniya-ec494.appspot.com/o/character-moving-sign-with-cart.jpg?alt=media&token=20375646-1550-4085-b085-7f0a86b5411c"
                                className={home.imgfeedback}
                                alt=""
                            />
                        </div>
                    </section>
                    <section>
                        <Footer></Footer>
                    </section>
                </div>
            </>
        </>
    );
}
export default Home;
