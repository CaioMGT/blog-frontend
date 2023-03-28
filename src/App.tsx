import { createSignal, onCleanup } from "solid-js"

export const App = () => {
    /*const
        [count, setCount] = createSignal(0),
        timer = setInterval(() => {
            setCount(count() + 360)
            document.getElementById("solid-logo")?.style.setProperty("--solid-logo-rotation", `${count()}deg`)
            console.log(`Set Logo rotation to ${count()}deg.`)
        }, 1000)

    onCleanup(() => clearInterval(timer))
    */
    return <>
        <div id="root" class="roboto center">
            hi
        </div>
    </>
}
