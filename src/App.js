import "./App.css";
import Login from './components/Login.js'
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import GetVideoFromId from "./components/GetVideoFromId";
import { NotificationContainer } from "react-notifications";


function App() {
  return(
    <>
       <NotificationContainer/>
  <Router>
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/get_data" element={<GetVideoFromId/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App;
