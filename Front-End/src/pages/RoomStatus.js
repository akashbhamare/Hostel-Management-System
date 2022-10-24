import StudentService from "../services/StudentService";
import AllotmentStatus from "./AllotmentStatus";
import SelectHostel from "./SelectHostel";
import { useEffect, useState } from 'react';

export default function RoomStatus() {

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

    console.log(allotmentDto.allotmentStatus);
    if(allotmentDto.allotmentStatus === 'Not alloted'){
        return (
            <SelectHostel />
        )
    }
    else{
        return(
            <AllotmentStatus />
        )
    }
}