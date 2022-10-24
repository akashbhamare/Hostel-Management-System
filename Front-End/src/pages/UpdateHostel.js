import React, { useState } from 'react'
import HostelService from "../services/HostelService";

export default function UpdateHostel() {

  var hostel = JSON.parse(sessionStorage.getItem("hostel") || null);
  console.log(hostel);

  const [hosteldetails, setHosteldetails] = useState(hostel);

  const update = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const hosteldetail = Object.fromEntries(formData);

    console.log(hosteldetail);

    HostelService.updatedetail(hosteldetail).then(response => {
      console.log("hostel details updated :" + response)
      alert("hostel details updated")

    }).catch((err) => {
      console.log(err)
      alert("Something went wrong")
    })
  };


  return (
    <div className="row w-50 my-4 mx-5">
      <div className="col-lg-12 col-xl-12">
        <div className="card">
          <h5 className="card-header text-center">Update Hostel</h5>
          <form
            className="card-body"
            style={{ padding: "20px 50px 20px 50px" }}
            onSubmit={update}
          >

            <div className="row">
              <div className="col-lg-4">
                <h6>Id</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input className="form-control-plaintext" type="text" name="id"
                    defaultValue={hosteldetails.id}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Name</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input className="form-control" type="text" name="name"
                    defaultValue={hosteldetails.name} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <h6>Contact Person</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input className="form-control" type="text" name="contactPerson"
                    defaultValue={hosteldetails.contactPerson} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Mobile number</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="text"
                    name="contactMobileNo"
                    defaultValue={hosteldetails.contactMobileNo}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <h6>Hostel Fees</h6>
              </div>
              <div className="col-lg-8 mb-4">
                <input
                  className="form-control"
                  type="text"
                  id="fees"
                  name="hostelFees"
                  defaultValue={hosteldetails.hostelFees}
                />
              </div>
            </div>


            <div className="row">
              <div className="col-lg-4">
                <h6>Address</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    type="text"
                    name="address"
                    rows="3"
                    required
                    title="Please enter your address"
                    defaultValue={hosteldetails.address}
                  />
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary w-100 mb-3" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}
