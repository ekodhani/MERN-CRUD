import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddUser = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate();

    const saveUser = async(data) => {
        const name = data.name;
        const email = data.email;
        const gender = data.gender;
        try {
            await axios.post("http://localhost:5000/users", {
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
                <form onSubmit={handleSubmit(saveUser)}>
                    <div className="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control"
                        id="name" 
                        // value={name} 
                        // onChange={(e) => setName(e.target.value)} 
                        placeholder="John Doe"
                        {...register("name", {required : "This fill is required"})}
                        />
                        <label htmlFor="name">Nama</label>
                        <small className="text-danger">{errors.name?.message}</small>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        // value={email} 
                        // onChange={(e) => setEmail(e.target.value)} 
                        placeholder="johndoe@example.com"
                        {...register("email", {required : "This fill is required"})}
                        />
                        <label htmlFor="email">Email</label>
                        <small className="text-danger">{errors.email?.message}</small>
                    </div>
                    <select
                    className="form-select"
                    // value={gender}
                    // onChange={(e) => setGender(e.target.value)}
                    {...register("gender", {required : "This fill is required"})}
                    >
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