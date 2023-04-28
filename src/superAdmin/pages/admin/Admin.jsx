import Home from "../home/Home";
import Auth from "../../components/auth/Auth";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react"; 
import { decodeToken } from "react-jwt";

function Admin() {
  const navigate = useNavigate();
  const {getToken} = Auth();

  useEffect(() => {
    if(!getToken()){
       navigate('/superadmin/login')
    } else{
      const token = getToken();
      const data = decodeToken(token);
      if (data.role != "superadmin") {
        navigate('/superadmin/login');
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
