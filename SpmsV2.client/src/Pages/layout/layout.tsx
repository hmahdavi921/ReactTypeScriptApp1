import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import '../../assets/css/dashboard.rtl.css';
import '../../assets/js/bootstrap.bundle.min.js';
import StationInfo from '../../Components/StationInfo.tsx';
import Header from '../../Components/Header.tsx';
import Footer from '../../Components/Footer.tsx';


function Layout(_props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {



    return (
        <React.Fragment>
            <Header />
            <StationInfo />
            {_props.children}
            <Footer />
        </React.Fragment>
    )
}

export default Layout