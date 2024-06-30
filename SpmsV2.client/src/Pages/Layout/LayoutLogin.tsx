import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import aboutsvg from '../../assets/svg/about.svg';
//import bellsvg from '../../assets/svg/bell.svg';
import burgermenusvg from '../../assets/svg/burger-menu.svg';
import calendersvg from '../../assets/svg/calender.svg';
import chartsvg from '../../assets/svg/chart.svg';
import exitsvg from '../../assets/svg/exit.svg';
import homesvg from '../../assets/svg/home.svg';
//import hourglasssvg from '../../assets/svg/hourglass.svg';
//import passwordsvg from '../../assets/svg/password.svg';
import powersvg from '../../assets/svg/power.svg';
//import refreshsvg from '../../assets/svg/refresh.svg';
import settingsvg from '../../assets/svg/setting.svg';
//import signalerrorsvg from '../../assets/svg/signal-error.svg';
//import signallostsvg from '../../assets/svg/signal-lost.svg';
//import signaloksvg from '../../assets/svg/signal-ok.svg';
import logo from '../../assets/image/logo.png';



function LayoutLogin({ children }) {

    //const [user, setUser] = useState({});
    //const { id } = useParams();

    useEffect(() => {
        console.info('layoutLogin -> useEffect');
        //console.info(children);
    }, [])

    
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default LayoutLogin