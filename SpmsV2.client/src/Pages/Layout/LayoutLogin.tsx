import React, { useEffect, useState } from 'react';
import logo from '../../assets/image/logo.png';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import '../../assets/css/dashboard.rtl.css';





function LayoutLogin({ children }) {

    const [packageData, setPackage] = useState({
        Organization: String,
        Name: String,
        Code: String,
        Version: String
    })

    useEffect(() => {
        fetch('/home/Package')
            .then(response => response.json())
            .then((response) => {
                setPackage(response);
                console.log("LayoutLogin -> packageData : " + packageData);
            }).catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Fetch error:', error);
            });

    }, []);


    return (
        <React.Fragment>
            <header className="navbar flex-md-nowrap" data-bs-theme="light">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-7 text-white" href="/">
                    <img src={logo} />
                    <span className="d-md-inline">&nbsp; سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
                </a>
            </header>
            {/*<div id="company-info-wraper" className="d-none d-lg-block" style={{ top: "-55px" }}>*/}
            {/*    <div className="text-center">*/}
            {/*        <p id="company-name">آب منطقه ای چهارمحال و بختیاری</p>*/}
            {/*        <p id="package-name " style={{ fontWeight: "600" }}>پروژه بن بروجن ایستگاه شماره 1</p>*/}
            {/*        <p id="package-code">( P18 + p6 ) ( 14020901)</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div id="main-container" className="container-fluid">
                <div className="row">
                    <main id="main" className="col">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        {children}

                    </main>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <footer>
                <div className="container-fluid">
                    <p className="text-center m-0">
                        کلیه حقوق این سیستم متعلق به <a href="https://emtco.ir/">« شرکت اتصال مکانیک »</a> می باشد
                    </p>
                </div>

            </footer>
        </React.Fragment>
    )
}

export default LayoutLogin