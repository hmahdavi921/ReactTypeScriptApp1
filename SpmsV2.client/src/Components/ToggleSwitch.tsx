import { useState, ChangeEvent, useEffect } from 'react';
import { useMount, useUpdate } from 'react-use';


const ToggleSwitch = ({ id, active }: { id: string, active: boolean }) => {

    const [switchState, setSwitchState] = useState(active);
    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        //console.log("ToggleSwitch-" + id + " : ", e.target.checked);
        setSwitchState(!switchState);
        // 👇️ this is the checked value of the field
        console.log(id + " --- " + event.target.checked);
    }

    return (
        <div className="form-check form-switch" >
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                checked={switchState}
                onChange={handleOnChange}
            />
            <label
                className="form-check-label"
                htmlFor={id}>
                {switchState ? "فعال" : "غیر فعال"}
            </label>
        </div>
    );
};

export default ToggleSwitch;