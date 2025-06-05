import DefaultLayout from "./layouts/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import FilmPage from "./pages/FilmPage";
import NotFoundPage from "./pages/NotFoundPage";
import CreateMovie from "./pages/CreateMovie";
import GeneralContext from "./contexts/GeneralContext";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movie/:id" element={<FilmPage />} />
          <Route path='movie/create' element={<CreateMovie />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App