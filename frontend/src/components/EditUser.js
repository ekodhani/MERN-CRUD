import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
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

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`,{
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={updateUser}>
                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        />
                        <label htmlFor="name">Nama</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johndoe@example.com"
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <select
                    className="form-select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-outline-primary me-2">Update</button>
                        <Link to="/" className="btn btn-outline-danger">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditUser;