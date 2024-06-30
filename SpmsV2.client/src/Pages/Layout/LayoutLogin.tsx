import React, { useEffect } from 'react';
import logo from '../../assets/image/logo.png';
import '../../assets/css/bootstrap.rtl.min.css';
import '../../assets/css/dashboard.rtl.css';
import '../../assets/js/bootstrap.bundle.min.js';




function LayoutLogin({ children }) {

    //const [user, setUser] = useState({});
    //const { id } = useParams();

    useEffect(() => {
        console.info('layoutLogin -> useEffect');
        //console.info(children);
    }, [])


    return (
        <React.Fragment>
            <header className="navbar flex-md-nowrap" data-bs-theme="light">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-7 text-white" href="/">
                    <img src={logo} />
                    <span className="d-md-inline">سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
                </a>
            </header>
            <div id="company-info-wraper" className="d-none d-lg-block">
                <div className=" text-center">
                    <p id="company-name">آب منطقه ای چهارمحال و بختیاری</p>
                    <p id="package-name" style={{ fontWeight: "600" }}>پروژه بن بروجن ایستگاه شماره 1</p>
                    <p id="package-code">( P18 + p6 ) ( 14020901)</p>
                </div>
            </div>
            <div id="main-container" className="container-fluid">
                <div className="row">
                    <main id="main" className="col text-center">

                        {children}

                    </main>
                </div>
            </div>

        </React.Fragment>
    )
}

export default LayoutLogin