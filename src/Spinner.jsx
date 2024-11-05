import Lottie from "lottie-react";
import { React, CSSProperties } from "react";
import animatLogo from "./assets/Animation - 1708684599176.json"
import { HashLoader } from "react-spinners";
import gif from "./assets/jobduniya (1).gif"
import spinner from "../src/spinner.module.css"

const Spinner = () => {
    return (
        <>
            <div className={spinner.spinner}>
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default Spinner;
