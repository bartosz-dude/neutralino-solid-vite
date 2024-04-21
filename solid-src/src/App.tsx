import { os } from "@neutralinojs/lib"
import { createSignal } from "solid-js"
import "./App.css"
import solidLogo from "./assets/solid.svg"
import viteLogo from "/vite.svg"
import neuLogo from "/neutralinojs.svg"

function App() {
	const [count, setCount] = createSignal(0)

	return (
		<>
			<div>
				<a
					onClick={() => {
						os.open("https://neutralino.js.org/")
					}}
				>
					<img
						src={neuLogo}
						class="logo neutralino"
						alt="Neutralino logo"
					/>
				</a>
				<a
					onClick={() => {
						os.open("https://solidjs.com")
					}}
				>
					<img
						src={solidLogo}
						class="logo solid"
						alt="Solid logo"
					/>
				</a>
				<a
					onClick={() => {
						os.open("https://vitejs.dev")
					}}
				>
					<img
						src={viteLogo}
						class="logo"
						alt="Vite logo"
					/>
				</a>
			</div>
			<h1>Neutralino + Solid + Vite</h1>
			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count()}
				</button>
				<p>
					Edit <code>solid-src/src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Neutralino, Solid or Vite logos to learn more
			</p>
		</>
	)
}

export default App
