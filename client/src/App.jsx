import Editor from "./components/Editor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = uuid();
    navigate(`/docs/${id}`);
  }, [navigate]);

  return (
    <Routes>
      <Route path="/docs/:id" element={<Editor />} />
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
