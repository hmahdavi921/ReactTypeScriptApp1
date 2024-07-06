import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
               {/* <Route path="logout" element={<Logout />} />*/}
                <Route path="register" element={<Register />} />
                <Route path="/" element={<Home />} />
                {/*<Route path="*" element={NotFoundPage} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;