import Axios from 'axios';
import {  useNavigate } from "react-router-dom";



function Register() {
  const navigate = useNavigate();

  const registerProcess=(event)=>{
    let registerData={
      name:"",
      surname:"",
      email:"",
      password:"",
      role:[{
        id:0
      }]
    }
    registerData.name=document.getElementById("name").value
    registerData.surname=document.getElementById("surname").value
    registerData.email=document.getElementById("email").value
    registerData.password=document.getElementById("password").value
    registerData.role[0].id=2

    Axios.post("http://localhost:8080/user/save", registerData)
      .then(navigate("/"))
      .catch((err=>alert(err)));
  }
  return (
    <section className="vh-90" style={{ backgroundcolor: "#9A616D" }}>
      <div className="container mt-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderradius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderradius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold mb-0">Register</span>
                      </div>

                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterspacing: "1px" }}
                      >
                        Sign up your account
                      </h5>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id='name'
                        />
                        <label className="form-label">
                          Name
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id='surname'
                        />
                        <label className="form-label">
                          Surname
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id='email'
                        />
                        <label className="form-label">
                          Email address
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id='password'
                        />
                        <label className="form-label">
                          Password
                        </label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={(event)=>registerProcess(event)}
                        >
                          Register
                        </button>
                      </div>
                      <a href="#!" className="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" className="small text-muted">
                        Privacy policy
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
