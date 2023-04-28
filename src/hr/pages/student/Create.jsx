import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import axios from "axios";
import Switch from "../../../UI/switch/Switch";  
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import { FormControl, FormControlLabel, FormLabel,TextField, Radio, RadioGroup } from "@mui/material"; 
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

const Create = () => {
  const {t} = useTranslation("locales")
  const {student,group,step,type,lang} = AuthUser();
  const [groups,setGroups] = useState([]);
  const [steps,setSteps] = useState([]);
  const [types,setTypes] = useState([]);
  const [langs,setLangs] = useState([]); 
  const navigate = useNavigate(); 
  const [value, setValue] = useState({
    address: "",
    birthday: "",
    name: "",
    username: "", 
    gender: 1, 
    lang_id: 1,
    type_id: 1,
    step_id: 1,
    group_id: 1, 
    status: false,
  });
  useEffect(()=>{
    group.get("/get").then((res)=>{
      if (res.status === 200) {
        setGroups(res.data.data.result)
      }
    })
    step.get("/get").then((res)=>{
      if (res.status === 200) {
        setSteps(res.data.data.result)
      }
    })
    type.get("/get").then((res)=>{
      if (res.status === 200) {
        setTypes(res.data.data.result)
      }
    })
    lang.get("/get").then((res)=>{
      if (res.status === 200) {
        setLangs(res.data.data.result)
      }
    })
  },[]) 
  
  // console.log(langs)
  const handleSubmit = (event) =>{
    event.preventDefault()
    // api call
    // console.log(value)
    value.birthday = Math.floor(new Date(value.birthday).getTime() / 1000)
    student.post('/create',value).then((res)=>{
      if (res.status === 200) {
        navigate("/hr/student");
      }
    })
} 
function handleChangeSelect(e) {
  const inputName = e.target.name;
  const inputValue = parseInt(e.target.value);
  setValue((oldValue) => ({ ...oldValue, [inputName]: inputValue }));
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
        <div className="row">
          <div className="col-md-6">
        <div className="form-group mt-3">
          <label htmlFor="name" className="form-label">
          {t("name")}
          </label>
          <input
            type="text"
            name="name"
            value={value.name || ""}
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_name")}`}
          />
        </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mt-3">
          <label htmlFor="username" className="form-label">
          {t("username")}
          </label>
          <input
            name="username"
            type="text"
            value={value.username || ""}
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_username")}`}
          />
        </div>
          </div>
        </div>
       <div className="row">
        <div className="col-md-6">
          <div className="form-group mt-3">
                    <label htmlFor="address" className="form-label">
                    {t("address")}
                    </label>
                    <input
                      name="address"
                      type="text"
                      value={value.address || ""}
                      onChange={handleChange}
                      className="form-control"
                      placeholder={`${t("enter_address")}`}
                    />
              </div>
        </div>
        <div className="col-md-6">
            <div className="form-group mt-3">
              <label htmlFor="exampleInputPassword1" className="form-label">{t("password")}</label>
              <input type="password" name="password" placeholder={`${t("enter_password")}`} value={value.password || ""} onChange={handleChange} className="form-control" id="exampleInputPassword1" required/>
          </div>
        </div>
       </div>
        
    <div className="row">
          <div className="col-md-6">
 <div className="form-group mt-3">
          <label style={{marginBottom:"10px"}} htmlFor="group_id"> {t("group")}</label>
          <select
            onChange={handleChangeSelect}
            className="form-select"
            name="group_id"
            value={value.group_id || ""}
            aria-label=".form-select-sm example"
          >
            <option disabled value="">
            {t("please_select")} 
            </option>
            {
              groups.map(function(item,i){
                return(
                   <option key={i} value={item.id}>{item.title_ru}</option>
                )
              })
            }
          </select>
        </div>
          </div>
          <div className="col-md-6">
            <div className="form-group mt-3">
          <label style={{marginBottom:"10px"}} htmlFor="step_id"> {t("study_level")}</label>
          <select
            onChange={handleChangeSelect}
            className="form-select"
            name="step_id"
            value={value.step_id || ""}
            aria-label=".form-select-sm example"
          >
            <option disabled value="">
            {t("please_select")}
            </option>
            {
              steps.map(function(item,i){
                return(
                  <option key={i} value={item.id}>{item.title_ru}</option>
                )
              })
            } 
          </select>
        </div>
          </div>
        </div>
       <div className="row">
        <div className="col-md-6">
 <div className="form-group mt-3">
          <label style={{marginBottom:"10px"}} htmlFor="type_id">{t("study_type")}</label>
          <select
            onChange={handleChangeSelect}
            className="form-select"
            name="type_id"
            value={value.type_id || ""}
            aria-label=".form-select-sm example"
          >
            <option disabled value="">
            {t("please_select")}
            </option>
            {
              types.map(function(item,i){
                return(
                  <option key={i} value={item.id}>{item.title_ru}</option>
                )
              })
            } 
          </select>
        </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mt-3">
          <label style={{marginBottom:"10px"}} htmlFor="type_id">{t("study_lang")}</label>
          <select
            onChange={handleChangeSelect}
            className="form-select"
            name="lang_id"
            value={value.lang_id || ""}
            aria-label=".form-select-sm example"
          >
            <option disabled value="">
            {t("please_select")}
            </option>
            {
              langs.map(function(item,i){
                return(
                  <option key={i} value={item.id}>{item.title_ru}</option>
                )
              })
            } 
          </select>
        </div>
        </div>
       </div>
    <div className="row">
      <div className="col-md-6">
      <div className="row">
        <div className="col-md-8">
        <div className="form-group mt-3">
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{t("gender")}</FormLabel>
      <RadioGroup
       onChange={handleChangeSelect}
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        value={value.gender || ""}
      >
        <FormControlLabel value={1} control={<Radio />} label={`${t("female")}`} />
        <FormControlLabel value={2} control={<Radio />} label={`${t("male")}`} /> 
      </RadioGroup>
    </FormControl>
        </div>
        </div>
        <div className="col-md-4">
         <div className="form-group mt-4">
       
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <DatePicker   label={`${t("birthday")}`}  format="DD-MM-YYYY"  value={ (value.birthday) ? dayjs(new Date(value.birthday)) : dayjs()} onChange={(e)=>{setValue(old=>({...old, ['birthday']: e}))}} 
              renderInput={(props)=><TextField {...props} />}></DatePicker>
             </LocalizationProvider>
          
        </div>
      </div>
      </div>
      </div>
      
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
