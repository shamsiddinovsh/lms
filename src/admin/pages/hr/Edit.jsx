import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";

const Edit = () => {
  const {hr} = AuthUser();
  const params = useParams();
  const id = params.id;
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
    status: false,
  });

  useEffect(() => {
    hr.get('/get/'+ id).then((res)=>{
      if (res.status === 200) {
        setUser(res.data.data);
      }
    }).catch(err=>console.log(err));
  }, [id]); 

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUser((oldValue) => ({ ...oldValue, [inputName]: inputValue }));
  }
  function handleChangePassword(e) {
    const inputValue = e.target.value;
    setPassword(inputValue);
  }
 
  function handleSubmit(e) {
    e.preventDefault();
    if (password !== "" && password !== ".") {
      user["password"] = password;
    } else {
      delete user["password"];
    }

    hr.put('/update/'+ id,user).then((res)=>{
      if (res.status === 200) {
        navigate("/admin/menu");
      }
    }).catch((err) => console.log(err));
  }
  return (
    <div className="card Create">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="font-18 mb-3 text-muted font-weight-bold">Create</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Please enter name"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            value={user.username || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Please enter username"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            onChange={handleChangePassword}
            type="password"
            value={password || ""}
            className="form-control"
            placeholder="Please enter password"
          />
        </div>
        <div className="form-group mt-3">
          <select
            onChange={handleChange}
            className="form-select"
            name="role"
            value={user.role || ""}
            aria-label=".form-select-sm example"
          >
            <option disabled value="">
              Please select
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <select
            value={user.status || ""}
            onChange={handleChange}
            className="form-select   mb-3"
            name="status"
            aria-label=".form-select-sm example"
          >
            <option disabled value="">
              Please select
            </option>
            <option value={true}>active</option>
            <option value={false}>inactive</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Edit;
