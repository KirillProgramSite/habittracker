import { useEffect, useState } from "react"
import Skeleton from "./components/UI/Sketelon";
import { convertTimestampBigInt } from "./help/convertTimestampBigInt";
import { useHabbitStore, useStoreLoading } from "./store/habbitStore";
import HabbitList from "./components/HabbitList";

const App = () => {
    const {habbits, setHabbits, loadHabbitsFromDb} = useHabbitStore();
    // const [loading, setLoading] = useState(true)
    const {loading, setLoading} = useStoreLoading()

    useEffect(() => {
        loadHabbitsFromDb(setLoading)
    }, [loadHabbitsFromDb])



    return (
        <>
            <h1>HELLO</h1>
            <form action="">
                <label htmlFor="">
                    <p>Введите привычку которую вы хотите соблюдать:</p>
                    <input type="text" placeholder="Введите привычку" />
                </label>

                <button type="submit">Добавить</button>
            </form>

            <HabbitList />
        </>
    )
}

export default App
