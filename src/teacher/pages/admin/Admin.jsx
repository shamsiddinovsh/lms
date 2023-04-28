import Home from "../home/Home";
import AuthUser from "../../components/auth/Auth";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; 
import { decodeToken } from "react-jwt";

function Admin() {
  const navigate = useNavigate();
  const {getToken} = AuthUser();

  useEffect(() => {
    if(!getToken()){
       navigate('/teacher/login')
    } else{
      const token = getToken();
      const data = decodeToken(token); 
      if (data.role != "teacher") {
        navigate('/teacher/login')
      }
    }
  }
  )
 
    return (
      <div>
        <Home/>
      </div>
    )
 
  
}

export default Admin;
