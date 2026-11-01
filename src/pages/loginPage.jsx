
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema } from '../slices/userSlice';
import Section from '../components/Section';
import './loginPage.css'

export default function loginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(userLoginSchema),
    });
    return (
        <>
        <Section title="Login" description={<>
            <p>A</p>
            <form className='login-form' onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div>
                <label>Email</label>
                <input {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Login</button>
        </form>
            </>} />

        
        </>
    )
}