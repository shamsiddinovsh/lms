import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AuthUser from "../../components/auth/Auth";
import { useTranslation } from "react-i18next";
import { decodeToken } from "react-jwt";

const Groups = () => {
  const {t} = useTranslation("locales")
  const {group,getToken} = AuthUser();
  const token = getToken();
  const data = decodeToken(token);  
  const id = data.id; 
  const navigate = useNavigate();
  const [user, setUser] = useState([]); 
  useEffect(() => {
    group.get('/get-teacher/'+ id).then((res)=>{
      if (res.status === 200) {
        setUser(res.data.data.result);
      }
    });
  }, [id]);  
  function handleSubmit(e) {
    e.preventDefault();

    group.put('/update/'+ id,user).then((res)=>{
      if (res.status === 200) {
        navigate("/teacher/group");
      }
    }).catch((err) => console.log(err));
  } 
   return (
    <div className="card Create row">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="font-18 mb-3 text-muted font-weight-bold">{t('students')}</h5>
      </div>
      <form onSubmit={handleSubmit}>
           {}
        <div className="row">
          <div className="col-md-12">
            <table className="table table-stripped">
               <thead>
                <tr>
                <th style={{width: "2%"}}>ID</th>
                <th style={{width: "55%"}}>{t('name')}</th>
                <th style={{width: "1%"}}></th>
                <th style={{width: "1%"}}></th>
                </tr>
               </thead>
               <tbody>
                {
                user ?  user.map((item,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.title_ru}</td>
                        <td className="text-center">
                          <NavLink
                            to={`/teacher/group/work/${item.id}`}
                            className="btn btn-primary"
                          >
                            HomeWork
                          </NavLink>
                        </td>
                        <td className="text-center">
                          <NavLink
                            to={`/teacher/group/list/${item.id}`}
                            className="btn btn-warning"
                          >
                            View
                          </NavLink>
                        </td>
                      </tr>
                  )
                  )
                  :  <tr>
                  <td>#</td>
                  <td>Not found</td>
                  <td className="text-center">
                    
                  </td>
                </tr>
                }
                 
               </tbody>
            </table>
          </div>
        </div>
        
      </form>
    </div>
  );
}; 
export default Groups;
