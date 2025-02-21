import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";
import MovieEdit from "./components/MovieEdit";
import MovieAdd from "./components/MovieAdd";
import logo from "./assets/logo.png";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <header className="bg-gray-800 px-5 py-3">
        <img src={logo} alt="Logo" className="block w-40" draggable="false" />
      </header>
      <main className="pb-5">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/details/:id" element={<MovieInfo />} />
          <Route path="/movie/edit/:id" element={<MovieEdit />} />
          <Route path="/movie/add" element={<MovieAdd />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
