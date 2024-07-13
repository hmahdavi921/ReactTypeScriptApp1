import { createContext } from "react";

const LayoutContext = createContext({

    Organization: "",
    Name: "",
    Code: "",
    Version: ""
});

export default LayoutContext;