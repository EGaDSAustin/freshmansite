import React from "react";
import EGaDSTheme from "./Theme";
import { ThemeProvider } from "@material-ui/styles";
import Page from "./Page.jsx";

function App() {
    return (
        <ThemeProvider theme={EGaDSTheme}>
            <div className="App">
                <Page />
            </div>
        </ThemeProvider>
    );
}

export default App;
