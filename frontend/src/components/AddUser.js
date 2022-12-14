import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users", {
                name,
                email,
                gender,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="card mt-5">
            <div className="card-body">
                <form onSubmit={saveUser}>
                    <div className="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control"
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="John Doe" 
                        />
                        <label for="name">Nama</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="johndoe@example.com" 
                        />
                        <label for="email">Email</label>
                    </div>
                    <select className="form-select" value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div className="mt-3">
                        <button type="submit" className="btn btn-outline-primary me-2">Save</button>
                        <Link to="/" className="btn btn-outline-danger">Back</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddUser;