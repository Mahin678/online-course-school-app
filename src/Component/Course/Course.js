import React , { useState }from 'react';
import './Course.css'

const Course = (props) => {
    const info = props.data;
    return (
        <div>
            <div className="courseWrapper" >
                <h2>Total  {info.length} Course available Right now </h2>
                <p style={{ margin: "15px" }}>View More</p>
                <div className="row m-auto">
                    {
                        info.map(element =>
                            <div>
                                <div className="col-lg-3" style={{ width: "15rem", margin: "15px" }}>
                                    <div style={{ width: "18rem" }} className="course-card" >
                                        <div className="card customCard" style={{ width: "15rem" ,height: "24rem"}}>
                                        <img src={element.img} className="" alt="" />
                                            <div className="CustomBody">
                                                <h5 className="customTitle">{element.name}</h5>
                                                <p className="CourseDetails">{element.details}</p>
                                                <p className="mentor"><small className="" >Mentor : </small>{element.mentor}</p>
                                                <p className="price" >Price : <small className="" >{element.price} $</small></p>
                                                <button   className="btn btn-success" onClick={()=> props.handle(element)}>Enroll Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Course;