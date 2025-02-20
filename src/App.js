import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import users from "./data/users";

function App() {
  const [user, setUser] = useState(null);

  return (
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} users={users} setUser={setUser}/>} />
        <Route path="/product/:id" element={<ProductPage user={user} users={users} />} />
      </Routes>
  );
}

export default App;
