import { Route, Routes } from "react-router-dom";
import Users from "../pages/users/Users";
import Create from "../pages/users/Create";
import Edit from "../pages/users/Edit";
import Dashboard from "../pages/dashboard/Dashboard"
import Home from "../pages/home/Home";

 const Routers = () => {
  return (
    <div>
     <Routes> 
            <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="menu" element={<Users />} />
            <Route path="menu/:id" element={<Edit />} />
            <Route path="menu/create" element={<Create />} />
            </Route>
        </Routes>
    </div>
  )
}
export default Routers;
