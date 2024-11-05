import React, { useState } from 'react';
import Modal from '../../render-model/Modal';


const JobPostingForm = ({onClose}) => {
    const [formData, setFormData] = useState({
        Title: '',
        Position: '',
        JobType: 'FullTime', // Default to FullTime
        Salary: '',
        Description: '',
        Experience: '',
        Responsiblities: '',
        Overview: '',
        Qualificaion: '',
        Benifits: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or data handling logic here
        console.log(formData);
    };

    return (
        <div className="container h-75 animate__animated  animate__fadeInDown   overflow-scroll  mt-5 card cardContainer">
            <div className='d-flex justify-content-between  align-content-center  py-3'>
                <div className="">
                    <span className="mb-4 fs-3">Crate a New Job post</span>
                </div>
                <div className="d-flex justify-content-center  align-content-center ">
                    <span className='mt-2 hand'  onClick={onClose}><i className='fa fa-close'></i></span>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
                <div className="mb-2">
                    <label htmlFor="Title" className="form-label">Job Title</label>
                    <input type="text" className="form-control--" id="Title" name="Title" value={formData.Title} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label htmlFor="Position" className="form-label">Position</label>
                    <input type="text" className="form-control--" id="Position" name="Position" value={formData.Position} onChange={handleChange} required />
                </div>
                <div className="mb-2">
                    <label htmlFor="JobType" className="form-label">Job Type</label>
                    <select className="form-control--" id="JobType" name="JobType" value={formData.JobType} onChange={handleChange}>
                        <option value="FullTime">Full Time</option>
                        <option value="PartTime">Part Time</option>
                        <option value="Remote">Remote</option>
                    </select>
                </div>
                <div className="mb-2">
                    <label htmlFor="Salary" className="form-label">Salary</label>
                    <input type="text" className="form-control--" id="Salary" name="Salary" value={formData.Salary} onChange={handleChange} />
                </div>
                <div className="mb-2">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea className="form-control--" id="Description" name="Description" value={formData.Description} onChange={handleChange} required></textarea>
                </div>
                <div className='text-center row'>
                    <button type="submit" className="mx-2 text-nowrap  text-center btn bgPrimary btnW">Submit</button>
                </div>
                {/* Add more fields for Experience, Responsiblities, Overview, Qualificaion, Benifits */}
            </form>
        </div>
    );
};



const PostAJobModal = ({ onClose }) => {
    return <Modal
        body={<JobPostingForm
            onClose={onClose}
        />
        
        }
    />
}

export default PostAJobModal

