import { TabContext, TabList, TabPanel } from "@mui/lab";
import { FormGroup, Tab } from "@mui/material"; 
import { Box } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from "../../../UI/switch/Switch";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import { useTranslation } from "react-i18next";

const Edit = () => {
  const {t} = useTranslation("locales")
  const {group,teacher} = AuthUser();
  const params = useParams();
  const [value,setValue] = useState('1')
  const id = params.id; 
  const [personName, setPersonName] = useState([]);
  const navigate = useNavigate();
  const [teachers,setTeachers] = useState([])
  const [user, setUser] = useState({
    title_uz: "",
    title_ru: "",
    title_en: "",  
    day: '',
    teacher_id: 1,
    start_date:"",
    end_date:"",
    status: false,
  }); 
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
 
  const names = [
   {'val': 1, 'title':'Dushanba'},
   {'val': 2, 'title':'Seshanba'},
   {'val': 3, 'title':'Chorshanba'},
   {'val': 4, 'title':'Payshanba'},
   {'val': 5, 'title':'Juma'},
   {'val': 6, 'title':'Shanba'},
   {'val': 7, 'title':'Yakshanba'}

  ];
  
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  

  const handleChangeArray = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
 
  useEffect(() => {
    group.get('/get/'+ id).then((res)=>{
      if (res.status === 200) {
        setUser(res.data.data);
        let days = res.data.data.day; 
        setPersonName(days.split(','))
      }
    });
   
  }, [id]); 

  function handleChangeSelect(e) {
    const inputName = e.target.name;
    const inputValue = parseInt(e.target.value);
    setUser((oldValue) => ({ ...oldValue, [inputName]: inputValue }));
  }
  useEffect(() => {
    teacher.get('/get').then((res)=>{
      if (res.status === 200) {
        setTeachers(res.data.data.result);
      }
     
    });
  }, []);  
  
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
 user.day = personName.join(',');

    group.put('/update/'+ id,user).then((res)=>{
      if (res.status === 200) {
        navigate("/hr/group");
      }
    }).catch((err) => console.log(err));
  }
 
   return (
    <div className="card Create row">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="font-18 mb-3 text-muted font-weight-bold">Create</h5>
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
          {t("name")}
          </label>
          <input
            type="text"
            name="title_uz"
            value={user.title_uz || ""}
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_name")}`}
          />
        </div>  
        </TabPanel>
                    <TabPanel sx={{paddingLeft:"0",paddingBottom:"0", paddingTop:"10px", paddingRight:"0"}} value='2'>
                    <div className="form-group mt-3">
          <label htmlFor="title_ru" className="form-label">
          {t("name")}
          </label>
          <input
            type="text"
            name="title_ru"
            value={user.title_ru || ""}
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_name")}`}
          />
        </div>
                      </TabPanel>
                    <TabPanel sx={{paddingLeft:"0",paddingBottom:"0", paddingTop:"10px", paddingRight:"0"}} value='3'>
                    <div className="form-group mt-3">
          <label htmlFor="title_en" className="form-label">
          {t("name")}
          </label>
          <input
            type="text"
            name="title_en"
            value={user.title_en || ""}
            onChange={handleChange}
            className="form-control"
            placeholder={`${t("enter_name")}`}
          />
        </div>
                    </TabPanel>
                </TabContext>
            </Box>
            <div className="row">
            <div className="col-md-6">
                <div className="form-group mt-3">
              <label htmlFor="Teacher" className="form-label">{t("teacher")}</label>
            <select
              onChange={handleChangeSelect}
              className="form-select"
              name="teacher_id"
              value={user.teacher_id || ""}
              aria-label=".form-select-sm example"
            >
              <option disabled >{t("please_select")}</option>
              {
                teachers.map(function(item,i){
                  return(
                    <option key={i} value={item.user_id}>{item.name}</option>
                  )
                })
              } 
            </select>
          </div>
            </div>
            <div className="col-md-6">
        <div className="form-group mt-4">
                <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-name-label">{t("days_week")}</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={personName}
                  onChange={handleChangeArray}
                  input={<OutlinedInput label={`${t("days_week")}`} />}
                  MenuProps={MenuProps}
                >
                  {names.map((name,id) => (
                    
                    <MenuItem
                      key={id}
                      value={name.val}
                      style={getStyles(name, personName, theme)}
                    >
                      {name.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
                </div>
            </div>
            </div>
           
        <div className="row">
          <div className="col-md-6">
 <div className="form-group mt-3">
 <label htmlFor="start_hour" className="form-label">{t("start_time")}</label>
          <select
            onChange={handleChange}
            className="form-select"
            name="start_date"
            value={user.start_date || ""}
            aria-label=".form-select-sm example"
          >
            <option disabled value="">{t("please_select")} </option>
            <option value={"9:00"}>9:00</option> 
            <option value={"10:00"}>10:00</option> 
            <option value={"11:00"}>11:00</option> 
            <option value={"12:00"}>12:00</option> 
            <option value={"13:00"}>13:00</option> 
            <option value={"14:00"}>14:00</option> 
            <option value={"15:00"}>15:00</option> 
            <option value={"16:00"}>16:00</option> 
            <option value={"17:00"}>17:00</option> 
            <option value={"18:00"}>18:00</option> 
            <option value={"19:00"}>19:00</option> 
            <option value={"20:00"}>20:00</option> 
          </select>
        </div>
          </div>
          <div className="col-md-6">
             <div className="form-group mt-3">
             <label htmlFor="end_hour" className="form-label">{t("end_time")}</label>
         
          <select
            onChange={handleChange}
            className="form-select"
            name="end_date"
            value={user.end_date || ""}
            aria-label=".form-select-sm example"
          >
            <option disabled value="">{t("please_select")}</option> 
            <option value={"10:00"}>10:00</option> 
            <option value={"11:00"}>11:00</option> 
            <option value={"12:00"}>12:00</option> 
            <option value={"13:00"}>13:00</option> 
            <option value={"14:00"}>14:00</option> 
            <option value={"15:00"}>15:00</option> 
            <option value={"16:00"}>16:00</option> 
            <option value={"17:00"}>17:00</option> 
            <option value={"18:00"}>18:00</option> 
            <option value={"19:00"}>19:00</option> 
            <option value={"20:00"}>20:00</option> 
            <option value={"21:00"}>20:00</option> 
          </select>
        </div>
          </div>
        </div>
       
       
        <FormGroup sx={{marginTop:"13px"}}>
          <Switch setData={setUser} value={user.status}/>
        </FormGroup>
        <button type="submit" className="btn btn-success">
        {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default Edit;
