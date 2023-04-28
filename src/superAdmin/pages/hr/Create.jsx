import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";

const Create = () => {
  const {hr} = AuthUser();
  const navigate = useNavigate(); 
  const [value, setValue] = useState({
    name: "",
    username: "",
    password: "",
    role: "",
    status: true,
  });
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    // api call
    hr.post('/create',value).then((res)=>{
      if (res.status === 200) {
        navigate("/admin/hr");
      }
    })
}


  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setValue((oldValue) => ({ ...oldValue, [inputName]: inputValue }));
  }
  return (
    <div className="card Create">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="font-18 mb-3 text-muted font-weight-bold">Foydalanuvchi qo'shish</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={value.name || ""}
            id="name"
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
            id="username"
            value={value.username || ""}
            type="text"
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
            value={value.password || ""}
            id="password"
            onChange={handleChange}
            type="password"
            className="form-control"
            placeholder="Please enter password"
          />
        </div>
        <div className="form-group mt-3">
          <select
            onChange={handleChange}
            className="form-select"
            name="role"
            value={value.role || ""}
            id="role"
            aria-label=".form-select-sm example"
          >
            <option disabled value="">
              Tanlash
            </option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div className="form-group mt-3">
          <select
            onChange={handleChange}
            className="form-select   mb-3"
            id="status"
            value={value.status || ""}
            name="status"
            aria-label=".form-select-sm example"
          >
            <option value="active">active</option>
            <option value="false">inactive</option>
          </select>
        </div>
        <button type="submit" className="btn btn-success">
          Qo'shish
        </button>
      </form>
    </div>
  );
};

export default Create;
