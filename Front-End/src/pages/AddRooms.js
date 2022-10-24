import React from 'react'
import RoomService from "../services/RoomService";

export default function AddRooms () {
  
    const handlesubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const roomdetail = Object.fromEntries(formData);
        console.log(roomdetail)

        RoomService.adddetail(roomdetail)
          .then((response) => {
            if (response.data) {
              console.log(" details added :" + response);
              alert(" details added");
            } else alert("ID already exists");
          })
          .catch((err) => {
            console.log(err);
            alert("Something went wrong\nCheck Room Number");
          });
      };

      let HostelId = sessionStorage.getItem('HostelId');
      console.log(HostelId)

      return (
      
            <div className="row w-50 my-4 mx-5">
              <div className="col-lg-12 col-xl-12">
                <div className="card">
                  <h5 className="card-header text-center">Add Room</h5>
                  <form
                    className="card-body"
                    style={{ padding: "20px 50px 20px 50px" }}
                    onSubmit={handlesubmit}
                  >
                   
        
                    <div className="row">
                      <div className="col-lg-4">
                        <h6>Hostel id</h6>
                      </div>
                      <div className="col-lg-8">
                        <div className="mb-4">
                          <input className="form-control-plaintext" type="text" name="hostelId" 
                          defaultValue={HostelId}
                          
                          />
                        </div>
                      </div>
                    </div>
        
                    {/* <div className="row">
                      <div className="col-lg-4">
                        <h6>Hostel Name</h6>
                      </div>
                      <div className="col-lg-8">
                        <div className="mb-4">
                          <input
                            className="form-control"
                            type="text"
                            name="hostelName"
                          />
                        </div>
                      </div>
                    </div> */}
                    
        
                    <div className="row">
                      <div className="col-lg-4">
                        <h6>Room No.</h6>
                      </div>
                      <div className="col-lg-8 mb-4">
                        <input
                          className="form-control"
                          type="text"
                          id="roomNo"
                          name="roomNo"
                        />
                      </div>
                    </div>
                  
        
                  
        
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-primary w-100 mb-3" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
    );
  
}
