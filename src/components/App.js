
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail"; 

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <Router>
        <Routes>
          {/* Homepage showing list of items */}
          <Route path="/" element={<ItemList />} />
          {/* Dynamic route for item details */}
          <Route path="/items/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
