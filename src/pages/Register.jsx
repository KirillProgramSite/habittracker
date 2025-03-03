import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { useUserStore } from "../store/userStore";
import { createUser } from "../firebase/user/createUser";
import { useForm } from "react-hook-form"
import RegisterForm from "../components/Form/RegisterForm";
const Register = () => {
    //Store
    const { email, setEmail, password, setPassword, username, setUsername } = useUserStore()

    //Form
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



    // const logout = async () => {
    //     try {
    //         await signOut(auth)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            <h1>Register</h1>
            <RegisterForm />
        </>
    )
}


export default Register;