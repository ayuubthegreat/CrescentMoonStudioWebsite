
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { userRegisterSchema, RegisterUser } from '../slices/userSlice';
import Section from '../components/Section';
import './registerPage.css';

export default function registerPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(userRegisterSchema),
    });
    const dispatch = useDispatch();
    const onSubmit = async (data) => {
        try {
            data.role = "PENDING_APPROVAL";
            await dispatch(RegisterUser(data)).unwrap();
            reset();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
        <Section add_class="register-section" title="Register" description={<>
            <p>Ak</p>
            
            </>} />
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='register-form-group'>
                <label>Username</label>
                <input placeholder="Enter your username" {...register('username')} />
                {errors.username && <span>{errors.username.message}</span>}
            </div>
            <div className='register-form-group'>
                <label>Email</label>
                <input placeholder="Enter your email" {...register('email')} />
                {errors.email && <span>{errors.email.message}</span>}
            </div>
            <div className='register-form-group'>
                <label>Password</label>
                <input type="password" placeholder="Enter your password" {...register('password')} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            <button type="submit">Register</button>
        </form>
        </>
        
    );
}