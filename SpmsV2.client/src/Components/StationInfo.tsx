import { useEffect, useState } from "react";


const StationInfo = () => {

    //type station={
    //    organization: String,
    //    name: String,
    //    code: String,
    //    version: String
    //}

    const [StationData, setStationData] = useState({
        organization: ".....",
        name: ".....",
        code: ".....",
        version: "....."
    });

    useEffect(() => {
                 
        fetch('/home/Package')
            .then(response => response.json())
            .then((response) => {
                setStationData(response);
                
                console.table(response);
                //console.table(StationData);
                
            }).catch(error => {
                console.error('Fetch error /home/Package:', error);
            });

    }, []);


    return (
        <>
            <div id="company-info-wraper" className="d-none d-lg-block">
                <div className=" text-center">
                    <p id="company-name">{StationData.organization} </p>
                    <p id="package-name" style={{ fontWeight: "600" }}> {StationData.name} </p>
                    <p id="package-code">({StationData.code}) ( {StationData.version})</p>
                </div>
            </div>
        </>

    );

};

export default StationInfo;