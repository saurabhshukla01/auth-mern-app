import Nav from './Nav';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h2>List of products</h2>} />
          <Route path="/add-product" element={<h2>Add product</h2>} />
          <Route path="/update-product" element={<h2>Update product</h2>} />
          <Route path="/profile" element={<h2>Profile Page</h2>} />
          <Route path="/logout" element={<h2>Logout Page</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
