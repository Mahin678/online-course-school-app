import React, { useState } from 'react';
import './MyCourse.css'
import Price from '../Price/Price';

const MyCourse = (props) => {
    const courseInfo = props.course;


    return (
        <div>
            <div className="MyCourseWrapper">
                <h1 className="text-light" >Selected {courseInfo.length} Course </h1>
                <Price courseInfo={courseInfo} ></Price>
                <div className="row">
                    {courseInfo.map(element =>
                        <div>
                            <div className="col-lg-3" style={{ width: "15rem", margin: "15px" }}>
                                <div style={{ width: "18rem" }} className="course-card" >
                                    <div className="card customCard" style={{ width: "15rem", height: "24rem" }}>
                                        <img src={element.img} className="" alt="" />
                                        <div className="CustomBody">
                                            <h5 className="customTitle">{element.name}</h5>
                                            <p className="CourseDetails">{element.details}</p>
                                            <p><small>Mentor :{element.mentor}</small></p>
                                            <p>Price : {element.price}</p>
                                            <button className="btn btn-danger" onClick={()=> props.handleBar(element)} >Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyCourse;