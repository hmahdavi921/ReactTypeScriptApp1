import { useState, ChangeEvent, useEffect } from 'react';



const ToggleSwitch = ({ id, active }: { id: string, active: boolean }) => {

    const [switchState, setSwitchState] = useState(false);
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        
        setSwitchState(!switchState);
        // 👇️ this is the checked value of the field
        console.log(id + " --- " + event.target.checked);
        //sendCommand();
    }
    //useEffect(() => {
        //setSwitchState();
    //});
    return (
        <div className="form-check form-switch" >
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                checked={active}
                onChange={handleOnChange}
            />
            <label
                className="form-check-label"
                htmlFor={id}>
                {!switchState ? "فعال" : "غیرفعال"}
            </label>
        </div>
    );
};

export default ToggleSwitch;