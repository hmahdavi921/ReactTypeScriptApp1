
import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutLink(props: { children: React.ReactNode, className: string }) {

    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        fetch("/logout",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: ""

                })
            .then((data) => {
                if (data.ok) {

                    navigate("/login");
                } else {
                }


            })
            .catch((error) => {
                console.error(error);
            });

    };

    return (
        <React.Fragment>
            <a href="#" className={props.className} onClick={handleSubmit}>{props.children}</a>
        </React.Fragment>
    );
}

export default LogoutLink;
