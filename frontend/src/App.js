import "./App.css";
import Homepage from "./Pages/Homepage";
// import { Route } from "react-router-dom";
// import Chatpage from "./Pages/Chatpage";
import Signin from "./components/Authentication/Signin";

function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} /> */}
      <Signin />
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
