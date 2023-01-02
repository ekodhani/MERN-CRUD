import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import DetailUser from "./components/DetailUser";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />}/>
          <Route path="add" element={<AddUser />}/>
          <Route path="edit/:id" element={<EditUser />}/>
          <Route path="detail/:id" element={<DetailUser/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
