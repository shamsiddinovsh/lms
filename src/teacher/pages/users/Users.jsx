import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthUser from "../../components/auth/Auth"

export default function Users() {
  const [count, setCount] = useState([1]);
    const {http} = AuthUser();
    const [users,setUsers] = useState('');

    useEffect(()=>{
      const fetchUserDetail = () =>{
        http.get('/get').then((res)=>{
          setUsers(res.data.data.result);
        });
    }
        fetchUserDetail();
    },[count]);


    const handleDelete = (id) => {
      const conf = window.confirm("O'chirishni xohlaysizmi?");
      if (conf) {
        axios
          .delete(`http://159.253.23.169:2001/api/users/delete/` + id)
          .then((res) => {
            if (res.status === 200) {
              setCount(count + 1);
            }
          })
          .catch((err) => console.log(err));
      }
    };
    // console.log(users);
    function renderElement(){
        if(users){
            return  <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="font-18 mb-3 text-muted font-weight-bold">Users</h4>
                <NavLink
                  to={"/teacher/menu/create"}
                  className={`btn btn-primary align-center`}
                >
                  Create
                </NavLink>
              </div>
      
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Users</th>
                      <th scope="col" className="text-center" width="80">
                        Actions
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
                            to={`/teacher/menu/${item.user_id}`}
                            className="btn btn-warning"
                          >
                            Update
                          </NavLink>
                        </td>
                        <td className="text-right">
                          <button
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                            className="btn btn-danger"
                          >
                            Delete
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
            return <p>Users not found!</p>
        }
    }

  return (
    <div>
        { renderElement() }
    </div>
  );
}
