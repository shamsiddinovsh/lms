import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import Switch from "../../../UI/switch/Switch";
import { useTranslation } from "react-i18next";

const Edit = () => {
  const {t} = useTranslation("locales")
  const {teacher} = AuthUser();
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();
  const [password,setPassword] = useState(".")
  const [user, setUser] = useState({
    name: "",
    username: "",
    password:"",
    status: false,
  });

  useEffect(() => {
    teacher.get('/get/'+ id).then((res)=>{
      if (res.status === 200) {
        setUser(res.data.data); 
      }
    });
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
    // console.log(user);
    if (password != "" && password != ".") {
      user['password'] = password;
    }else{
      delete user['password'];
    }
    teacher.put('/update/'+ id,user).then((res)=>{
      if (res.status === 200) {
        navigate("/hr/teacher");
      }
    }).catch((err) => console.log(err));
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
            value={user.name || ""}
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
            type="text"
            value={user.username || ""}
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_username")}`}
          />
        </div>
        <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1" className="form-label">{t("password")}</label>
            <input type="password" name="password"  placeholder={`${t("enter_password")}`} value={password || ""} onChange={handleChangePassword} className="form-control" id="exampleInputPassword1" />
        </div>
    
        <div className="form-group mt-3"> 
        <Switch setData={setUser} value={user.status}/>
        </div>
        <button type="submit" className="btn btn-success">
        {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default Edit;
