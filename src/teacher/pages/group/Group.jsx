import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import { useTranslation } from "react-i18next";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select'; 
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel'; 
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';   
import CheckBox from "./Checkbox"; 

const Group = () => {
  const {t} = useTranslation("locales")
  const {group,http} = AuthUser();
  const [personName, setPersonName] = useState([]); 
  const params = useParams();
  const id = params.id;  
  // const navigate = useNavigate();
  const [student, setStudent] = useState([]); 
  const [user, setUser] = useState([]); 
  const times = [
    { user_id: 1, name: "Sanjar" },
    { user_id: 2, name: "Anvar" }
  ];
  const [value, setValue] = useState(() => {
    return times.map((result) => ({
      "group": id,
      date: '21213143',
      result,
      isChecked: false
    }));
  }); 
  useEffect(() => {
    group.get('/get-main/'+ id).then((res)=>{
      if (res.status === 200) {
        setUser(res.data.data);
        setStudent(res.data.data.students);
        let days = res.data.data.day; 
        setPersonName(days.split(','))
      }
    });
  }, []);   
  const names = [
   {'val': 1, 'title':'Dushanba'},
   {'val': 2, 'title':'Seshanba'},
   {'val': 3, 'title':'Chorshanba'},
   {'val': 4, 'title':'Payshanba'},
   {'val': 5, 'title':'Juma'},
   {'val': 6, 'title':'Shanba'},
   {'val': 7, 'title':'Yakshanba'}

  ]; 
 
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    // height: '50vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
 
  const handleToggle = (name) => {
    setValue((value) => {
      return value.map(({ result, isChecked }) => ({
        group_id:id,
        date: Math.floor(new Date().getTime() / 1000),
        result,
        isChecked: name === result.name ? !isChecked : isChecked
      } 
      )
      );
    }); 
  };   
  function handleChange(e,id) {
    const inputName = e.target.name;
    const inputValue = e.target.checked;
    const inputId = e.target.id;
  //   setValue((prev) => {
  //     let newState = { ...prev };
  //     value.result[id].checked = e.target.checked;
  //     return newState;
  // });
    setValue((oldValue) => ({ ...oldValue, [inputName]: inputValue, inputId }));
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log(value);
    // http.post('/nb_post',value).then((res)=>{
    //   if (res.status === 200) {
    //     // navigate("/teacher/group");
    //   }
    // }).catch((err) => console.log(err));
  }
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   return (
    <div className="card Create row">
    <div className="d-flex justify-content-between align-items-center">
      <h5 className="font-18 mb-3 text-muted font-weight-bold">{user.title_ru || ""}</h5>
    </div>
 
          <div className="row">
         
          <div className="col-md-6">
      <div className="form-group" style={{marginTop:"23px"}}>
              <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-name-label">{t("days_week")}</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                disabled
                value={personName} 
                input={<OutlinedInput label={`${t("days_week")}`} />} 
              >
                {names.map((name,id) => (
                  
                  <MenuItem
                    key={id}
                    value={name.val}
                    
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
        <label htmlFor="start_date" className="form-label">
        {t("start_time")}
        </label>
        <input
          type="text"
          name="start_date"
          disabled
          value={user.start_date || ""}
          onChange={handleChange}
          className="form-control" 
        />
                </div>

        </div>
        <div className="col-md-6">
        <div className="form-group mt-3">
        <label htmlFor="end_date" className="form-label">
        {t("end_time")}
        </label>
        <input
          type="text"
          name="end_date"
          disabled
          value={user.end_date || ""}
          onChange={handleChange}
          className="form-control" 
        />
                </div>
        </div>
      </div>
      <div>
      <Button className="btn btn-primary mt-4 text-white" onClick={handleOpen}>{t('students')}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <div className="card Create row" id="transition-modal-title">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="font-18 mb-3 text-muted font-weight-bold">{t('students')}</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12">
            <table id="transition-modal-description" className="table table-stripped">
               <thead>
                <tr>
                <th style={{width:"3%"}}>ID</th>
                <th style={{width:"45%"}}>Name</th>
                <th style={{width:"1%"}}>MB</th>
                </tr>
               </thead>
               <tbody>
               {value.map(({ result,isChecked },i) => (
        <CheckBox
          key={result.user_id}
          value={result.name}
          id={i+1}
          isChecked={isChecked}
          handleToggle={handleToggle}
        />
      ))}
               </tbody>
            </table>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          {t('submit')}
        </button>
      </form>
    </div>
          </Box>
        </Fade>
      </Modal>
    </div>
   
  </div>
  );
}; 
export default Group;
