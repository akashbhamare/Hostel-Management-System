import React from "react";
import StudentService from "../services/StudentService";

export default function ReportConcern() {

    const send = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const concern = Object.fromEntries(formData);
    
        console.log(concern);
    
        StudentService.reportconcern(concern).then(response => {
                console.log("sent :" + response)
                alert("sent")
    
        }).catch((err) => {
            console.log(err)
            alert("Something went wrong")
        })
      };


    return (
      <div className="row my-4 mx-5 w-50">
        <div className="col-lg-12 col-xl-12">
          <div className="card">
            <h5 className="card-header text-center">Report Concern</h5>
            <form
              className="card-body"
              style={{ padding: "20px 50px 20px 50px" }}
              onSubmit = {send}
            >
              <div className="row">
                <div className="col-lg-4">
                  <h6>Subject</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <input
                      className="form-control"
                      type="text"
                      name="subject"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4">
                  <h6>Message</h6>
                </div>
                <div className="col-lg-8">
                  <div className="mb-4">
                    <textarea
                      className="form-control"
                      type="text"
                      name="message"
                      rows="4"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4">
                <button className="btn btn-lg btn-primary w-100" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
