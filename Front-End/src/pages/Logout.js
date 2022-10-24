import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Logout() {

    let navigate = useNavigate()

    useEffect(() => {
        localStorage.clear();
        sessionStorage.clear();
        navigate('/');
        alert("Logged-out Successfully")
        window.location.reload()
    }, []);

    return (
        <></>
    );


}


