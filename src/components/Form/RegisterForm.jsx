import { useForm } from "react-hook-form"
import { useUserStore } from "../../store/userStore"
import { createUser } from "../../firebase/user/createUser"

const RegisterForm = () => {

    const { setEmail, setPassword, setUsername } = useUserStore()

    const { 
            register,
            handleSubmit,
            formState: { errors },
            reset
        } = useForm()
    

    const onRegisterSubmit = (data) => {
            setEmail(data.email)
            setPassword(data.password)
            setUsername(data.username)
    
            createUser(data.email, data.password, data.username)
            reset()
        }

    return (
    <form onSubmit={handleSubmit(onRegisterSubmit)}>
        <input type="text" placeholder="Username..." {...register("username", { required: true })} />
        <input type="email" placeholder="Email..." {...register("email", { required: true })} />
        <input type="password" placeholder="Password..." {...register("password", { required: true })} />

        {errors.username && <span>Name is required</span>}
        {errors.email && <span>Email is required</span>}
        {errors.password && <span>Password is required</span>}

        <button type="submit">Sign in</button>
    </form>
    )
}

export default RegisterForm;