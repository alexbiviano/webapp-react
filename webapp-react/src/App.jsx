import DefaultLayout from "./layouts/defaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage";
import Moviepage from "./pages/MoviePage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/movies/:id" element={<Moviepage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App