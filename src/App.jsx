import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import LikedSongs from "./pages/LikedSongs"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/explore" element={<Explore/>}></Route>
        <Route path="/liked-songs" element={<LikedSongs/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
