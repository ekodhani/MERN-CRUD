import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const DetailUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    };

    return (
        <div className="card mt-5 shadow-lg rounded border-0 p-5 text-center" style={{width: "350px"}}>
            <h3 className="mb-5">Detail User</h3>
            <div className="card-body">
                <div className="d-flex">
                    <h5 className="me-3 card-title">Name :</h5>
                    <p className="card-text">{name}</p>
                </div>
                <div className="d-flex">
                    <h5 className="me-3 card-title">Email :</h5>
                    <p className="card-text">{email}</p>
                </div>
                <div className="d-flex">
                    <h5 className="me-3 card-title">Gender :</h5>
                    <p className="card-text">{gender}</p>
                </div>
                <div className="d-flex mt-5 justify-content-center">
                    <Link to="/" className="btn btn-outline-info ps-5 pe-5 rounded-pill">Back</Link>
                </div>
            </div>
        </div>
    );
}

export default DetailUser;