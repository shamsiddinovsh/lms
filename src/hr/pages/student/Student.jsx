import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthUser from "../../components/auth/Auth"
import { useTranslation } from "react-i18next";

export default function Users() {
  const {t} = useTranslation(["locales"])
  const [count, setCount] = useState([1]);
    const {student} = AuthUser();
    const [users,setUsers] = useState('');

    useEffect(()=>{
      const fetchUserDetail = () =>{
        student.get('/get').then((res)=>{
          setUsers(res.data.data.result);
        });
    }
        fetchUserDetail();
    },[count]);

 
    const handleDelete = (id) => {
      const conf = window.confirm("O'chirishni xohlaysizmi?");
      if (conf) {
        student.delete('/delete/'+ id).then((res)=>{
          if (res.status === 200) {
            setCount(count + 1);
          }
        }).catch((err) => console.log(err));
      }
    };
    // console.log(users);
    function renderElement(){
        if(users){
            return  <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="font-18 mb-3 text-muted font-weight-bold">{t('students')}</h4>
                <NavLink
                  to={"/hr/student/create"}
                  className={`btn btn-primary align-center`}
                >
                 {t('create')}
                </NavLink>
              </div>
      
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col"><b>{t('name')}</b></th>
                      <th scope="col" className="text-center" width="80">
                        <b>{t('actions')}</b>
                      </th>
                      <th scope="col" className="text-right" width="80"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td className="text-center">
                          <NavLink
                            to={`/hr/student/${item.user_id}`}
                            className="btn btn-warning"
                          >
                            {t('update')}
                          </NavLink>
                        </td>
                        <td className="text-right">
                          <button
                            onClick={() => {
                              handleDelete(item.user_id);
                            }}
                            className="btn btn-danger"
                          >
                            {t('delete')}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }else{
            return <p>{t('users_not_found')}</p>
        }
    }

  return (
    <div>
        { renderElement() }
    </div>
  );
}
