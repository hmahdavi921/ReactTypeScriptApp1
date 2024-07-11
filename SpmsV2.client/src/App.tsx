import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import LayoutContext from './Components/LayoutContext.tsx';
import { Component, useEffect, useState } from 'react';
//import NotFoundPage from './Pages/NotFoundPage';

function App() {


    const [layoutData, setlayoutData] = useState({
        Organization: String,
        Name: String,
        Code: String,
        Version: String
    });

    
    useEffect(() => {

        fetch('/home/Package')
            .then(response => response.json())
            .then((response) => {
                setlayoutData(response);
                //console.log(layoutData);
            }).catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error /home/Package:', error);
            });
        

     
    },[]);



    return (

        <LayoutContext.Provider value={{
            Organization: layoutData.Organization,
            Code: layoutData.Code,
            Name: layoutData.Name,
            Version: layoutData.Version
        }}>

            <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    {/* <Route path="logout" element={<Logout />} />*/}
                    <Route path="register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    {/*<Route path="*" element={NotFoundPage} />*/}
                </Routes>
            </BrowserRouter>

        </LayoutContext.Provider>

    );
}

export default App;