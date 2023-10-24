import Time_table from "./Component/Time_table";
import {Routes,Route} from "react-router-dom"
import Navbar from "./Component/Navbar";
function App() {
 return(
    <div className="App">
           <Navbar/>
           <Routes>
            <Route path="/" element={<Time_table/>}/>
           </Routes>
      </div>
  );
}

export default App;
