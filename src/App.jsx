import { useEffect } from "react"
import { useHabbitStore, useStoreLoading } from "./store/habbitStore";
import HabbitList from "./components/HabbitList";
import Register from "./pages/Register";


const App = () => {
    return (
        <>
            <Register />
            <HabbitList />
        </>
    )
}

export default App
