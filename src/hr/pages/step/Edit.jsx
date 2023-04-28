import { TabContext, TabList, TabPanel } from "@mui/lab"; 
import { FormGroup, Tab } from "@mui/material"; 
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import { useTranslation } from "react-i18next";
import Switch from "../../../UI/switch/Switch";

const Edit = () => {
  const {t} = useTranslation(["locales"])
  const {step} = AuthUser();
  const params = useParams();
  const [value,setValue] = useState('1')
  const id = params.id;  
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title_uz: "",
    title_ru: "",
    title_en: "", 
    status: false,
  }); 
  useEffect(() => {
    step.get('/get/'+ id).then((res)=>{
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
 
  function handleTabs(e,val){ 
    setValue(val)
 }
  function handleSubmit(e) {
    e.preventDefault();
 
    step.put('/update/'+ id,user).then((res)=>{
      if (res.status === 200) {
        navigate("/hr/study/step");
      }
    }).catch((err) => console.log(err));
  } 
  
  return (
    <div className="card Create">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="font-18 mb-3 text-muted font-weight-bold">{t('create')}</h5>
      </div>
      <form onSubmit={handleSubmit}>
      <Box>
          <TabContext value={value}>
            <Box>
                <TabList aria-label='Tabs example' onChange={handleTabs} textColor='secondary' indicatorColor='secondary'>
                <Tab label="Uzbek" value='1' />
                <Tab label="Русский" value='2' />
                <Tab label="English" value='3' />
                </TabList>
            </Box>
          <TabPanel sx={{paddingLeft:"0",paddingBottom:"0", paddingTop:"10px", paddingRight:"0"}} value='1'>
        <div className="form-group mt-3">
          <label htmlFor="title_uz" className="form-label">
          {t('name')}
          </label>
          <input
            type="text"
            name="title_uz"
            value={user.title_uz || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Please enter name"
          />
        </div>  
        </TabPanel>
                    <TabPanel sx={{paddingLeft:"0",paddingBottom:"0", paddingTop:"10px", paddingRight:"0"}} value='2'>
                    <div className="form-group mt-3">
          <label htmlFor="title_ru" className="form-label">
          {t('name')}
          </label>
          <input
            type="text"
            name="title_ru"
            value={user.title_ru || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Please enter name"
          />
        </div>
                      </TabPanel>
                    <TabPanel sx={{paddingLeft:"0",paddingBottom:"0", paddingTop:"10px", paddingRight:"0"}} value='3'>
                    <div className="form-group mt-3">
          <label htmlFor="title_en" className="form-label">
          {t('name')}
          </label>
          <input
            type="text"
            name="title_en"
            value={user.title_en || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Please enter name"
          />
        </div>
                    </TabPanel>
                </TabContext>
            </Box>
   
            <FormGroup sx={{marginTop:"13px"}}>
          <Switch setData={setUser} value={user.status}/>
        </FormGroup>
        <button type="submit" className="btn btn-success">
        {t('submit')}
        </button>
      </form>
    </div>
  );
};

export default Edit;
