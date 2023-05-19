import "./App.css";
import HomePage from "./HomePage";
import Apple from "./Apple";
import { NotFound } from "./NotFound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import GlobalStyle from "./constants";
// import  styles from './appStyle.module.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <img src = {`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" />
      <div
        className="navbar-style"
        style={{
          ...GlobalStyle.navbar,
        }}
        // className ={styles.navbarStyle}
      >
        <Link to="/" style={{margin : 10}}>
          Home
        </Link>
        <Link to="/apple" style={{margin : 10}}>
          Apple
        </Link>
      </div>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/apple" element={<Apple />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
