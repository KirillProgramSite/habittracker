import { useEffect } from "react"
import { useHabbitStore, useStoreLoading } from "./store/habbitStore";
import HabbitList from "./components/HabbitList";
import Register from "./pages/Register";
import Auth from "./pages/Auth";


const App = () => {
    return (
        <>
            <Register />
            <Auth />
            {/* <HabbitList /> */}
        </>
    )
}

export default App
