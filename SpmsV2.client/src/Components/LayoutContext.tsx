import { createContext } from "react";

const LayoutContext = createContext({

    Organization: String,
    Name: String,
    Code: String,
    Version: String
});

export default LayoutContext;