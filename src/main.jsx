import React from "react";
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from "./HelloWorldApp";
import { FirstApp } from "./FirstApp";
//importacion global de estilos:
import './styles.css';
import { CounterApp } from "./counterApp";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {20} />
        {/*<FirstApp title = "Hello World" subtitle = "I'm a new react dev"/>*/}
    </React.StrictMode>

)
