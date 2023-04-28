import { Route, Routes } from "react-router-dom";
import Admin from "../admin/pages/admin/Admin";
import SuperAdmin from "../superAdmin/pages/admin/Admin";
import HrAdmin from "../hr/pages/admin/Admin";
import TeacherAdmin from "../teacher/pages/admin/Admin";
import StudentAdmin from "../student/pages/admin/Admin";
import "./App.css"; 

// Students

import StudentUsers from "../student/pages/users/Users"
import StudentCreate from "../student/pages/users/Create";
import StudentEdit from "../student/pages/users/Edit";  
import StudentDashboard from "../student/pages/dashboard/Dashboard";

//  Teacher

import TeacherUsers from "../teacher/pages/users/Users"
import TeacherCreate from "../teacher/pages/users/Create";
import TeacherEdit from "../teacher/pages/users/Edit";  
import TeacherDashboard from "../teacher/pages/dashboard/Dashboard";
import TeacherGroups from "../teacher/pages/group/Groups";
import TeacherGroup from "../teacher/pages/group/Group";
import TeacherGroupWork from "../teacher/pages/homeWork/HomeWork"
import TeacherGroupWorkCreate from "../teacher/pages/homeWork/Create"
import TeacherGroupWorkEdit from "../teacher/pages/homeWork/Update"
// import TeacherGroupStudents from "../teacher/pages/group/Students";

// HR 

// import HrUsers from "../hr/pages/users/Users"
// import HrCreate from "../hr/pages/users/Create";
// import HrEdit from "../hr/pages/users/Edit";  
import HrDashboard from "../hr/pages/dashboard/Dashboard";
import HrTeacher from "../hr/pages/teacher/Teacher"
import HrTeacherCreate from "../hr/pages/teacher/Create";
import HrTeacherEdit from "../hr/pages/teacher/Edit";
import HrStudent from "../hr/pages/student/Student"
import HrStudentCreate from "../hr/pages/student/Create";
import HrStudentEdit from "../hr/pages/student/Edit";
import HrGroup from "../hr/pages/group/Group"
import HrGroupCreate from "../hr/pages/group/Create";
import HrGroupEdit from "../hr/pages/group/Edit";
import HrLang from "../hr/pages/lang/Lang"
import HrLangCreate from "../hr/pages/lang/Create";
import HrLangEdit from "../hr/pages/lang/Edit";
import HrStep from "../hr/pages/step/Step"
import HrStepCreate from "../hr/pages/step/Create"
import HrStepEdit from "../hr/pages/step/Edit"
import HrType from "../hr/pages/type/Type"
import HrTypeCreate from "../hr/pages/type/Create"
import HrTypeEdit from "../hr/pages/type/Edit"

// Admin

// import AdminUsers from "../admin/pages/users/Users"
// import AdminCreate from "../admin/pages/users/Create";
// import AdminEdit from "../admin/pages/users/Edit";  
import AdminHr from "../admin/pages/hr/Hr"
import AdminHrCreate from "../admin/pages/hr/Create"
import AdminHrEdit from "../admin/pages/hr/Edit"
import AdminTeacher from "../admin/pages/teacher/Teacher"
import AdminTeacherCreate from "../admin/pages/teacher/Create"
import AdminTeacherEdit from "../admin/pages/teacher/Edit"
import AdminStudent from "../admin/pages/student/Student"
import AdminStudentCreate from "../admin/pages/student/Create"
import AdminStudentEdit from "../admin/pages/student/Edit"
import AdminDashboard from "../admin/pages/dashboard/Dashboard";

// SuperAdmin
import Users from "../superAdmin/pages/users/Users"
import Create from "../superAdmin/pages/users/Create";
import Edit from "../superAdmin/pages/users/Edit";  
import SuperAdminAdmin from "../superAdmin/pages/admins/Admin";
import SuperAdminCreate from "../superAdmin/pages/admins/Create";
import SuperAdminEdit from "../superAdmin/pages/admins/Edit";
import SuperAdminHr from "../superAdmin/pages/hr/Hr"
import SuperAdminHrCreate from "../superAdmin/pages/hr/Create"
import SuperAdminHrEdit from "../superAdmin/pages/hr/Edit"
import SuperAdminTeacher from "../superAdmin/pages/teacher/Teacher"
import SuperAdminTeacherCreate from "../superAdmin/pages/teacher/Create"
import SuperAdminTeacherEdit from "../superAdmin/pages/teacher/Edit"
import SuperAdminStudent from "../superAdmin/pages/student/Student"
import SuperAdminStudentCreate from "../superAdmin/pages/student/Create"
import SuperAdminStudentEdit from "../superAdmin/pages/student/Edit"
import Dashboard from "../superAdmin/pages/dashboard/Dashboard";

import NotFound from "../notFound/NotFound";
import Login from "../superAdmin/components/login/Login";
import AdminLogin from "../admin/components/login/Login"
import HrLogin from "../hr/components/login/Login";
import TeacherLogin from "../teacher/components/login/Login";
import StudentLogin from "../student/components/login/Login";
import { Suspense } from "react";

function App() {
  return (
    
    <div className="wrapper">
      <Suspense fallback={null}>
        <Routes> 
          {/* Login All */}
          <Route path="/superAdmin/login" element={<Login />}  />
          <Route path="/admin/login" element={<AdminLogin />}  />
          <Route path="/hr/login" element={<HrLogin />}  />
          <Route path="/teacher/login" element={<TeacherLogin />}  />
          <Route path="/student/login" element={<StudentLogin />}  /> 
          <Route path="*" element={<NotFound />}  /> 

          <Route path="/superAdmin/" element={<SuperAdmin />}>
              <Route index element={<Dashboard />} />
             
              <Route path="menu" element={<Users />} />
              <Route path="menu/:id" element={<Edit />} />
              <Route path="menu/create" element={<Create />} />

              <Route path="admin" element={<SuperAdminAdmin />} />
              <Route path="admin/:id" element={<SuperAdminEdit />} />
              <Route path="admin/create" element={<SuperAdminCreate />} />

              <Route path="hr" element={<SuperAdminHr />} />
              <Route path="hr/:id" element={<SuperAdminHrEdit />} />
              <Route path="hr/create" element={<SuperAdminHrCreate />} />

              <Route path="teacher" element={<SuperAdminTeacher />} />
              <Route path="teacher/:id" element={<SuperAdminTeacherEdit />} />
              <Route path="teacher/create" element={<SuperAdminTeacherCreate />} />

              <Route path="student" element={<SuperAdminStudent />} />
              <Route path="student/:id" element={<SuperAdminStudentEdit />} />
              <Route path="student/create" element={<SuperAdminStudentCreate />} />

            </Route>

          <Route path="/admin/" element={<Admin />}>
              <Route index element={<AdminDashboard />} />
             
              <Route path="menu" element={<AdminHr />} />
              <Route path="menu/:id" element={<AdminHrEdit />} />
              <Route path="menu/create" element={<AdminHrCreate />} />

              <Route path="teacher" element={<AdminTeacher />} />
              <Route path="teacher/:id" element={<AdminTeacherEdit />} />
              <Route path="teacher/create" element={<AdminTeacherCreate />} />

              <Route path="student" element={<AdminStudent />} />
              <Route path="student/:id" element={<AdminStudentEdit />} />
              <Route path="student/create" element={<AdminStudentCreate />} />
          </Route>

          <Route path="/hr/" element={<HrAdmin />}>
              <Route index element={<HrDashboard />} />

              <Route path="teacher" element={<HrTeacher />} />
              <Route path="teacher/:id" element={<HrTeacherEdit />} />
              <Route path="teacher/create" element={<HrTeacherCreate />} />

              <Route path="student" element={<HrStudent />} />
              <Route path="student/:id" element={<HrStudentEdit />} />
              <Route path="student/create" element={<HrStudentCreate />} />
              
              <Route path="group" element={<HrGroup />} />
              <Route path="group/:id" element={<HrGroupEdit />} />
              <Route path="group/create" element={<HrGroupCreate />} />

              <Route path="study/lang" element={<HrLang />} />
              <Route path="study/lang/:id" element={<HrLangEdit />} />
              <Route path="study/lang/create" element={<HrLangCreate />} />

              <Route path="study/step" element={<HrStep />} />
              <Route path="study/step/:id" element={<HrStepEdit />} />
              <Route path="study/step/create" element={<HrStepCreate />} />

              <Route path="study/type" element={<HrType />} />
              <Route path="study/type/:id" element={<HrTypeEdit />} />
              <Route path="study/type/create" element={<HrTypeCreate />} />

          </Route>
           
          <Route path="/teacher/" element={<TeacherAdmin />}>
              <Route index element={<TeacherDashboard />} />
             
              <Route path="menu" element={<TeacherUsers />} />
              <Route path="menu/:id" element={<TeacherEdit />} />
              <Route path="menu/create" element={<TeacherCreate />} />

              <Route path="group/:id" element={<TeacherGroups />} /> 
              <Route path="group/list/:id" element={<TeacherGroup />} /> 

              <Route path="group/work/:id" element={<TeacherGroupWork />} /> 
              {/* <Route path="group/work/create/:id" element={<TeacherGroupWorkCreate />} />  */}
              {/* <Route path="group/work/:id/:slug" element={<TeacherGroupWorkEdit />} />  */}
              
          </Route>
           
          <Route path="/student/" element={<StudentAdmin />}>
              <Route index element={<StudentDashboard />} />
             
              <Route path="menu" element={<StudentUsers />} />
              <Route path="menu/:id" element={<StudentEdit />} />
              <Route path="menu/create" element={<StudentCreate />} />
          </Route>

        </Routes>
        </Suspense>
    </div>
  )
}

export default App;
