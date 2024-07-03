import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dangersvg from '../../src/assets/svg/danger.svg';
import loginsvg from '../../src/assets/svg/login.svg';
import LayoutLogin from '../Pages/Layout/LayoutLogin.tsx';


function Login() {
    // state variables for email and passwords
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberme, setRememberme] = useState<boolean>(false);
    const [btnText, setBtnText] = useState<string>("ورود");
    // state variable for error messages
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    

    // handle change events for input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
        if (name === "rememberme") setRememberme(e.target.checked);
    };

    const handleRegisterClick = () => {
        navigate("/register");
    }

    // handle submit event for the form
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // validate email and passwords
        if (!email || !password) {
            setError("نام کاربری و کلمه عبور را وارد کنید.");
        } else {
            // clear error message
            setError("");
            // post data to the /register api

            var loginurl = "";
            if (rememberme == true) {
                loginurl = "/login?useCookies=true";
            }
            else {
                loginurl = "/login?useSessionCookies=true";
            }

            setBtnText("ورود ...");
            //loginurl = loginurl + "&email=" + email + "&password=" + password;
            fetch(loginurl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            }).then((data) => {
                // handle success or error from the server
                console.log(data);
                if (data.ok) {
                    //setError("ورود شما  با موفقیت انجام شد.");
                    window.location.href = '/';
                }
                else {
                    setError("نام کاربری یا کلمه عبور نادرست است!");
                }
                setBtnText("ورود");
            }).catch((error) => {
                // handle network error
                console.error(error);
                setError("خطای سیستمی - با پشتیبانی سیستم تماس بگیرید!");
                setBtnText("ورود");
            });
        }
    };

    return (
        <LayoutLogin>
            <div className="col-sm-12 col-lg-3 mx-auto">
                
                <div className="card mt-5">
                    <div className="card-header bg-success text-center">
                        ورود به سیستم
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="forminput" htmlFor="email">نام کاربری :</label>
                                <input type="email" id="email" name="email" className="form-control text-end" value={email} onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password">کلمه عبور :</label>
                                <input type="password" id="password" name="password" className="form-control text-lg-end text-end" value={password} onChange={handleChange} />
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="checkbox" id="rememberme" name="rememberme" checked={rememberme} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="rememberme">
                                    مرا به خاطر بسپار
                                </label>
                            </div>
                            <div className="mb-3 w-100">
                                <button type="submit" className="btn btn-success w-100 p-1">
                                    <img src={loginsvg} width="24" height="24" />
                                    {btnText}
                                </button>
                            </div>
                        </form>
                        {
                            error &&
                            <div className="alert alert-danger d-flex align-items-center" role="alert">
                                <img src={dangersvg} width="20" height="20" />
                                <div className="m-1">
                                    {error}
                                </div>
                            </div>  
                        }
                        
                    </div>
                </div>
            </div>

        </LayoutLogin>

    );
}

export default Login;
