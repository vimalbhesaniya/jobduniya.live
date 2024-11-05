import React from "react";

const Skills = ({ data }) => {
    return (
        <div className="row p-4">
            <span className="fs-3 text-muted">Skills :</span>
            {data?.map((skill) => {
                return <div className="col">
                    <p
                        className="text-info bg-secondary-subtle  p-2 rounded-pill text-center mb-2 "
                        style={{ whiteSpace: "nowrap" }}
                    >
                        {skill}
                    </p>
                </div>
            })
            }
        </div>
    );
};

export default Skills;
