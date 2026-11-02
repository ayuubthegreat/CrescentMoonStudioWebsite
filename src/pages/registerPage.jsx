import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { determineIfRedirectValid } from '../funcs/API_funcs';
import { setFromExternal } from '../slices/userSlice';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { userRegisterSchema, RegisterUser } from '../slices/userSlice';
import Section from '../components/Section';
import './registerPage.css';

export default function registerPage() {
    const {user, isFromExternal} = useSelector((state) => state.user);
    const [redirectService, setRedirectService] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(userRegisterSchema),
    });
    useEffect(() => {
        determineIfRedirectValid(setRedirectService, dispatch, nav);
    }, [isFromExternal]);
    const dispatch = useDispatch();
    const nav = useNavigate();
    const onSubmit = async (data) => {
        try {
            data.role = "PENDING_APPROVAL";
            await dispatch(RegisterUser(data)).unwrap();
            reset();
            setTimeout(() => {
            if (isFromExternal) {
                if (redirectService === "gitspedia") {
                    nav(`/login/${redirectService}`);
                }
            } else {
                nav('/');
            }
            }, 3000);

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
        <title>Register | Crescent Moon Studio</title>
        <div className="register-section">
        <Section title="Register" description={<>
            <h4>Create an account to get started</h4>
            <p>Fill in the details below to create your account.</p>
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
            <div className='info'>
                <p>Already have an account? <Link to={`/login${isFromExternal ? `/${redirectService}` : ""}`}>Login here</Link>.</p>
            </div>
        </form>
        </div>
        </>
        
    );
}