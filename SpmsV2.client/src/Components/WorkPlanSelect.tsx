import { ChangeEventHandler, useEffect, useState } from "react";

function WorkPlanSelect(selectedValue: number, onChange: ChangeEventHandler<HTMLSelectElement> | undefined) {

    const [value, setValue] = useState(selectedValue);


    function handleOnChange(e): void {
        setValue(e.target.value);
        onchange();
    }
    useEffect(() => {

        setValue(selectedValue);
    });
    return (
        <select className="form-select form-select-sm fs-7"
            id="work-plan"
            value={selectedValue}
            onChange={handleOnChange}>
            <option value="1">برنامه روزانه</option>
            <option value="2">فشار اتوماتیک</option>
            <option value="3">کنترل دستی</option>
        </select>
    );
}

export default WorkPlanSelect;