import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route} from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Signin from "./components/Authentication/Signin";
import SignupNew from "./components/Authentication/SignupNew";


function App() {
  return (
    <div className="App">
      {/* {/* <Route path="/" component={Homepage} exact /> */}
      <Route path="/chats" component={Chatpage} />
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Homepage /> */}
      {/* <SignupNew /> */}
        <Route path="/" component={Signin }  exact />
        {/* <Chatpage /> */}
        <Route path="/signup" component={SignupNew} />
     
    </div>
  );
}

export default App;
