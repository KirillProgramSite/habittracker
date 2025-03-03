import { useEffect } from "react";
import { convertTimestampBigInt } from "../help/convertTimestampBigInt";
import { useHabbitStore, useStoreLoading } from "../store/habbitStore";
import Skeleton from "./UI/Sketelon";

const HabbitList = () => {
    const { loading, setLoading } = useStoreLoading()
    const { habbits, loadHabbitsFromDb } = useHabbitStore()

    useEffect(() => {
        loadHabbitsFromDb(setLoading)
    }, [loadHabbitsFromDb])


    return (
        <>
            {loading ? (
                <Skeleton />
            ) : (
                habbits.map((habbit) => (
                    <div key={habbit.id}>
                        <h1>{habbit.name}</h1>
                        {/* <input type="checkbox" checked={habbit.complened} />
                        <p>{convertTimestampBigInt(habbit.data.seconds, habbit.data.nanoseconds).toLocaleString()}</p> */}
                    </div>
                ))
            )}
        </>
    )
}

export default HabbitList;