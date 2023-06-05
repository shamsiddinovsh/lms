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
  const ids = params.id;  
  const [studentState, setStudentState] = useState([]);
  // const navigate = useNavigate();
  const [student, setStudent] = useState([]); 
  const [user, setUser] = useState([]); 
  const [value, setValue] = useState(
    studentState.map(d => {
      return {
        value: false,
        id: d.user_id,
        name: d.name
      };
    })
    )
     
  useEffect(() => {
    group.get('/get-main/'+ ids).then((res)=>{
      if (res.status === 200) {
        setUser(res.data.data);
        setStudentState(res.data.data.students);
        setStudent(res.data.data.students);
        let days = res.data.data.day; 
        setPersonName(days.split(','))
      }
    });
    setStudentState(
      studentState.map(d => {
        return {
          value: false,
          id: d.user_id,
          name: d.name
        };
      })
    )
   
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

  function handleSubmit(e) {
    e.preventDefault();  
    http.post('/nb_post',value).then((res)=>{
      if (res.status === 200) {
        console.log(value);
        // navigate("/teacher/group");
      }
    }).catch((err) => console.log(err));
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
          <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">
              <input
                type="checkbox"
                onChange={e => {
                  let checked = e.target.checked;
                  setStudentState(
                    studentState.map(d => {
                      d.value = checked;
                      return d;
                    })
                  );
                }}
              ></input>
            </th>
            <th scope="col">ID</th>  
            <th scope="col">Name</th>  
          </tr>
        </thead>
        <tbody>
          {studentState.map((d, i) => (
            <tr key={i}>
              <th scope="row">
                <input
                  onChange={event => {
                    let checked = event.target.checked;
                    setStudentState(
                      studentState.map(data => {
                        if (d.user_id === data.user_id) {
                          data.value = checked;
                        }
                        return data;
                      })
                    );
                  }}
                  type="checkbox"
                  checked={d.value}
                ></input>
              </th>
              <td>{d.user_id}</td> 
              <td>{d.name}</td> 
            </tr>
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
