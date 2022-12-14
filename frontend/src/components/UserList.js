import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect (() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data);
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/user/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <Link to="add" className="btn btn-outline-primary mb-3">Add User</Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <Link to={`edit/${user._id}`} className="btn btn-outline-success me-3">Edit</Link>
                                <button onClick={() => deleteUser(user._id)} className="btn btn-outline-secondary">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;