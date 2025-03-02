import { convertTimestampBigInt } from "../help/convertTimestampBigInt";
import { useHabbitStore, useStoreLoading } from "../store/habbitStore";
import Skeleton from "./UI/Sketelon";

const HabbitList = () => {

    const { loading } = useStoreLoading()
    const { habbits } = useHabbitStore()


    return (
        <>
            {loading ? (
                <Skeleton />
            ) : (
                habbits.map((habbit) => (
                    <div key={habbit.id}>
                        <h1>{habbit.name}</h1>
                        <input type="checkbox" checked={habbit.complened} />
                        <p>{convertTimestampBigInt(habbit.data.seconds, habbit.data.nanoseconds).toLocaleString()}</p>
                    </div>
                ))
            )}
        </>
    )
}

export default HabbitList;