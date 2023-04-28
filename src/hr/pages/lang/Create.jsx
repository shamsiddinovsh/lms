import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab, FormGroup } from "@mui/material"; 
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Switch from "../../../UI/switch/Switch";

const Create = () => {
  const {t} = useTranslation(["locales"])
  const {lang} = AuthUser();
  const navigate = useNavigate(); 
  const [tab,setTab] = useState('1')
  const [data, setData] = useState({
    title_uz: "",
    title_ru: "",
    title_en: "", 
    status: false,
  }); 
  
  const handleSubmit = (event) =>{
    event.preventDefault()
    // api call
    lang.post('/create',data).then((res)=>{
      if (res.status === 200) {
        navigate("/hr/study/lang");
      }
    })
}
// console.log(data)
function handleTabs(e,val){ 
  setTab(val)
}

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setData((oldValue) => ({ ...oldValue, [inputName]: inputValue }));
  }
  return (
    <div className="card Create">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="font-18 mb-3 text-muted font-weight-bold">{t('create')}</h5>
      </div>
      <form onSubmit={handleSubmit}>
      <Box>
          <TabContext value={tab}>
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
            value={data.title_uz || ""}
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
            value={data.title_ru || ""}
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
            value={data.title_en || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Please enter name"
          />
        </div>
                    </TabPanel>
                </TabContext>
            </Box>
   
            <FormGroup sx={{marginTop:"13px"}}>
          <Switch setData={setData} value={data.status}/>
        </FormGroup>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
