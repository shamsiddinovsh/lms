import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import Switch from "../../../UI/switch/Switch";
import { useTranslation } from "react-i18next";

const Create = () => {
  const {t} = useTranslation("locales")
  const {teacher} = AuthUser();
  const navigate = useNavigate(); 
  const [value, setValue] = useState({
    name: "",
    username: "",
    password: "",
    status: true,
  });
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    // api call
    // console.log(value);
    teacher.post('/create',value).then((res)=>{
      if (res.status === 200) {
        navigate("/hr/teacher");
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
        <h5 className="font-18 mb-3 text-muted font-weight-bold">{t("create")}</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="name" className="form-label">
          {t("name")}
          </label>
          <input
            type="text"
            name="name"
            value={value.name || ""}
            id="name"
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_name")}`}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="username" className="form-label">
          {t("username")}
          </label>
          <input
            name="username"
            id="username"
            value={value.username || ""}
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_username")}`}
          />
        </div>
        <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1" className="form-label">{t("password")}</label>
            <input type="password" name="password"  placeholder={`${t("enter_password")}`}  value={value.password || ""} onChange={handleChange} className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div className="form-group mt-3"> 
        <Switch setData={setValue} value={value.status}/>
        </div>
        <button type="submit" className="btn btn-success">
        {t("submit")} 
        </button>
      </form>
    </div>
  );
};

export default Create;
