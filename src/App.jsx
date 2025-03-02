import { useEffect, useState } from "react"
import { db, collection, addDoc, getDocs, deleteDoc, doc } from "./firebase";

const App = () => {
    const [habbits, setHabbits] = useState([])

    const habbitCollectionRef = collection(db, "habbit")

    function convertTimestampBigInt(seconds, nanoseconds) {
        const milliseconds = Number(BigInt(seconds) * 1000n + BigInt(nanoseconds) / 1_000_000n);
        return new Date(milliseconds);
    }

    useEffect(() => {
        const getHabbit = async () => {
            try {
                const data = await getDocs(habbitCollectionRef)
                const filtredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))

                setHabbits(filtredData)
                console.log(filtredData)
            } catch (err) {
                console.error(`Error in farebase: ${err}`)
            }
        }

        getHabbit()
    }, [])

    return (
        <>
            <h1>HELLO</h1>
            {habbits.map((habbit) => (
                <div key={habbit.id}>
                    <h1>{habbit.name}</h1>
                    <input type="checkbox" checked={habbit.complened} />
                    <p>{convertTimestampBigInt(habbit.data.seconds, habbit.data.nanoseconds).toLocaleString()}</p>
                </div>
            ))}
        </>
    )
}

export default App
