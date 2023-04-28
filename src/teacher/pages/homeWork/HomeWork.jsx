import { NavLink } from "react-router-dom";

// ['0000', '0100', '0200', ... '2300']
function HomeWork() {


  return (
    <div className="App">
         <div className="card Create row">
    <div className="col-md-12">
    <div className="d-flex justify-content-between align-items-center">
      <h5 className="font-18 mb-0 text-muted font-weight-bold">Home Work</h5>
      <NavLink
                  to={"/teacher/menu/create"}
                  className={`btn btn-primary align-center`}
                >
                  Create
                </NavLink>
    </div>
    </div>
  <div className="col-md-12">
  <div className="row">
      <div className="col-md-3">
        <div style={{background:"rgba(238, 0, 57, 0.82)", color:"white",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}} className="card">
          <h4 style={{color:"white"}}>1-Topshiriq</h4>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <div className="col-md-3">
        <div style={{background:"rgba(197, 100, 245, 0.74)", color:"white",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}} className="card">
          <h4 style={{color:"white"}}>2-Topshiriq</h4>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <div className="col-md-3">
        <div style={{background:"rgba(103, 195, 165, 0.79)", color:"white",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}} className="card">
          <h4 style={{color:"white"}}>3-Topshiriq</h4>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <div className="col-md-3">
        <div style={{background:"rgba(71, 100, 245, 0.74)", color:"white",boxShadow:"rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}} className="card">
          <h4 style={{color:"white"}}>4-Topshiriq</h4>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  );
}

export default HomeWork;
