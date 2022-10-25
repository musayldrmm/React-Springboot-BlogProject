import "../css/App.css";
import Navbar from "./navbar";
import Footer from "./footer";
import ContentPage from "./contentpage";
import Login from "./loginRegisterComponent/login";
import Register from "./loginRegisterComponent/register";
import Homepage from "./HomePage";
import AddPost from "./addPost";
import AdminPage from "./adminComponent/adminpage";
import EditPost from "./adminComponent/editpost";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: [],
      logginState: {
        accestoken: "",
        islogged: false,
        userRole: "",
        userid: 0,
      },
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:8080/post/all").then((response) => {
      this.setState((state) => ({ content: response.data }));
    });
    if(window.localStorage.getItem("logininfo")){
      const Data = window.localStorage.getItem("logininfo");
      this.setState((state)=>({
        logginState:JSON.parse(Data)
      })) 
    }
  }
  logout = () => {
    this.setState((state) => ({
      logginState: { islogged: false, accestoken: "", userRole: "", userid: 0 },
    }));
    window.localStorage.removeItem("logininfo");
  };
  login = (userid) => {
    const Data = window.localStorage.getItem("logininfo");

    this.setState((state) => ({
      logginState: {
        islogged: true,
        accestoken: JSON.parse(Data).accestoken,
        userRole: "ADMIN",
        userid: userid,
      },
    }));
  };
  addContentState=(element)=>{
    this.setState({
      content:[...this.state.content,element]
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar logininfo={this.state.logginState} logout={this.logout} />
        <Routes>
          <Route
            path="/login"
            exact
            element={
              this.state.logginState.islogged == true ? (
                <Navigate to="/" />
              ) : (
                <Login loginprocess={this.login} />
              )
            }
          />
          <Route
            path="/register"
            exact
            element={
              this.state.logginState.islogged == true ? (
                <Navigate to="/" />
              ) : (
                <Register />
              )
            }
          />
          <Route
            path="/"
            exact
            element={<Homepage content={this.state.content} />}
          />
          <Route
            path="/content/:id"
            exact
            element={<ContentPage logininfo={this.state.logginState} />}
          />
          <Route
            path="/addPost/:id"
            exact
            element={
              this.state.logginState.islogged == true ? (
                <AddPost token={this.state.logginState.accestoken} addPost={this.addContentState} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/adminPage"
            exact
            element={
              this.state.logginState.userRole == "ADMIN" &&
              this.state.logginState.islogged == true ? (
                <AdminPage content={this.state.content} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/adminPage/editPost/:id"
            exact
            element={
              this.state.logginState.userRole == "ADMIN" &&
              this.state.logginState.islogged == true ? (
                <EditPost/>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}
export default App;
