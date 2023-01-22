import { useContext,useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";
import { useNavigation } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const Navigate = useNavigation();
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleLogin = (e) => {
    e.preventDefault();
    login();
    console.log({email,password});
    <Navigate to="/"/>
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="password" placeholder="Password" value={password}  onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
