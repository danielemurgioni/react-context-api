import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Homepage from "./pages/Homepage";
import PostsPage from "./pages/PostsPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Homepage} />
            <Route path="/posts" Component={PostsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
