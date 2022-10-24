// import React, { Component } from 'react';

// class AllotmentStatus extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Allotment Status</h2>
//             </div>
//         );
//     }
// }

// export default AllotmentStatus;

import React, { useEffect, useState } from "react";
import StudentService from "../services/StudentService";

export default function AllotmentStatus() {

    const [allotmentDto, setAllotmentDto] = useState({});

    useEffect(() => {
        StudentService.getAllottment()
            .then((response) => {
                setAllotmentDto(response.data);
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            });

    }, []);

    return (
        <div className="row w-50 my-4 mx-5">
            <div className="col-lg-12 col-xl-12">
                <div className="card">
                    <h5 className="card-header text-center">Allotment Status</h5>
                    <form
                        className="card-body"

                        style={{ padding: "20px 50px 20px 50px" }}
                    >


                        <div className="row">
                            <div className="col-lg-4 my-2">
                                <h6>Room No</h6>
                            </div>
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <input
                                        className="form-control-plaintext"
                                        type="text"
                                        name="roomNo"
                                        defaultValue={allotmentDto.roomNo}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 my-2">
                                <h6>Hostel Name</h6>
                            </div>
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <input
                                        className="form-control-plaintext"
                                        type="text"
                                        name="hostelName"
                                        defaultValue={allotmentDto.hostelName}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-lg-4 my-2">
                                <h6>Hostel Address</h6>
                            </div>
                            <div className="col-lg-8 mb-4">
                                <input
                                    className="form-control-plaintext"
                                    type="text"
                                    name="hostelAddress"
                                    defaultValue={allotmentDto.hostelAddress}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 my-2">
                                <h6>Contact Person</h6>
                            </div>
                            <div className="col-lg-8 mb-4">
                                <input
                                    className="form-control-plaintext"
                                    type="text"
                                    name="contactPerson"
                                    defaultValue={allotmentDto.contactPerson}
                                    disabled
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 my-2">
                                <h6>Contact number</h6>
                            </div>
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <input
                                        className="form-control-plaintext"
                                        type="text"
                                        name="contactPhone"
                                        defaultValue={allotmentDto.contactPhone}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>




                        <div className="row">
                            <div className="col-lg-4 my-2">
                                <h6>Payment Status</h6>
                            </div>
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <input
                                        className="form-control-plaintext"
                                        type="text"
                                        name="paymentStatus"
                                        defaultValue={allotmentDto.paymentStatus}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 my-2">
                                <h6>Allotment Status</h6>
                            </div>
                            <div className="col-lg-8">
                                <div className="mb-4">
                                    <input
                                        className="form-control-plaintext"
                                        type="text"
                                        name="allotmentStatus"
                                        defaultValue={allotmentDto.allotmentStatus}
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
   
                    </form>
                </div>
            </div>
        </div>
    );
}
