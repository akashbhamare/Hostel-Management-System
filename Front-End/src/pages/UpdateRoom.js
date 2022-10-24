import React from 'react'
import RoomService from "../services/RoomService";
import { useLocation } from 'react-router-dom';

export default function UpdateRoom() {


  // var room = JSON.parse(sessionStorage.getItem("room"));

  // const [roomdetails, setRoomdetails] = useState({});
  // const [user, setuser] = useState({})

  const d = useLocation().state;

  // useEffect(() => {
  //   RoomService.getRoom(room.name)
  //     .then((response) => {
  //       setRoomdetails(response.data);
  //       console.log(roomdetails)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.response.data.message);
  //     });



  // }, []);


  const update = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const roomdetail = Object.fromEntries(formData);

    // roomdetail.hostelId = roomdetails.hostelId;
    //  roomdetail.roomNo = roomdetails.roomNo;
    //  roomdetail.hostelName = roomdetails.hostelName;


    console.log(roomdetail);

    RoomService.updatedetail(roomdetail).then(response => {
      console.log("room details updated :" + response)
      alert("room details updated")
    }).catch((err) => {
      console.log(err)
      alert("Something went wrong")
    })
  };

  return (
    <div className="row w-50 my-4 mx-5">
      <div className="col-lg-12 col-xl-12">
        <div className="card">
          <h5 className="card-header text-center">Update Room</h5>
          <form
            className="card-body"
            style={{ padding: "20px 50px 20px 50px" }}
            onSubmit={update}

          >


            {/* <div className="row">
              <div className="col-lg-4">
                <h6>Hostel Name</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input className="form-control" type="text" name="HostelName" 
                   defaultValue={roomdetails.hostelName}
                  />
                </div>
              </div>
            </div> */}

            <div className="row">
              <div className="col-lg-4">
                <h6>Room Id</h6>
              </div>
              <div className="col-lg-8 mb-4">
                <input
                  className="form-control-plaintext"
                  type="text"
                  id="Id"
                  name="id"
                  defaultValue={d.id}
                  
                />
              </div>
            </div>


            <div className="row">
              <div className="col-lg-4">
                <h6>Room number</h6>
              </div>
              <div className="col-lg-8">
                <div className="mb-4">
                  <input
                    className="form-control"
                    type="text"
                    name="roomNo"
                    defaultValue={d.roomNo}

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
