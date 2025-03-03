import { useForm } from "react-hook-form"
import { useUserStore } from "../../store/userStore"
import { logIn } from "../../firebase/user/singIn"


const LogInForm = () => {
    const { setEmail, setPassword } = useUserStore()

    const { 
            register,
            handleSubmit,
            formState: { errors },
            reset
    } = useForm()

    const onSignSubmit = (data) => {
        setEmail(data.email)
        setPassword(data.password)
                
        
        logIn(data.email, data.password)
        reset()
    }

    return(
        <form onSubmit={handleSubmit(onSignSubmit)}>
            <input type="email" placeholder="Email..." {...register("email", { required: true })} />
            <input type="password" placeholder="Password..." {...register("password", { required: true })} />

            {errors.email && <span>Email is required</span>}
            {errors.password && <span>Password is required</span>}

            <button type="submit">Log in</button>
        </form>
    )
}


export default LogInForm