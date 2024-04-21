/* @refresh reload */
import { render } from "solid-js/web"

import "./index.css"
import App from "./App"
import { init } from "@neutralinojs/lib"

init()

const root = document.getElementById("root")

render(() => <App />, root!)
