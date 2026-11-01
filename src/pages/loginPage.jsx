
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema, LoginUser } from '../slices/userSlice';
import Section from '../components/Section';
import './loginPage.css'

export default function loginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(userLoginSchema),
    });
    const dispatch = useDispatch();
    const onSubmit = async (data) => {
        try {
            await dispatch(LoginUser(data)).unwrap();
            reset();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
        <Section title="Login" description={<>
            <p>A</p>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='login-form-group'>
                <label>Email</label>
                <input placeholder="Enter your email" {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className='login-form-group'>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Login</button>
        </form>
            </>} />

        
        </>
    )
}