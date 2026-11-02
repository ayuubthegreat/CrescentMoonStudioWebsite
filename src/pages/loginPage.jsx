
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema, LoginUser } from '../slices/userSlice';
import Section from '../components/Section';
import './loginPage.css'
import { useEffect, useState } from 'react';

export default function loginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(userLoginSchema),
    }); 
    const {user} = useSelector((state) => state.auth);
    const [isRedirect, setIsRedirect] = useState(false);
    const [redirectService, setRedirectService] = useState(null);
    useEffect(() => {
        determineIfRedirectValid();
    }, [isRedirect])
   
    const dispatch = useDispatch();
    const nav = useNavigate();
    const serviceRedirectInfo = [{label: "gitspedia", redirectHref: "https://www.gitspedia.org/auth"}];
    const determineIfRedirectValid = () => {
        const linkParts = window.location.href.split('/');
        if (linkParts.length != 5) 
            return false; 
        console.log(linkParts);
        if (linkParts[4] === "gitspedia") {
            setIsRedirect(true);
            setRedirectService("gitspedia");
        } else {
             nav('/error');
        }
    }
    const onSubmit = async (data) => {
        try {
            await dispatch(LoginUser(data)).unwrap();
            reset();
            setTimeout(() => {
                if (isRedirect) {
                    if (redirectService === "gitspedia") {
                        window.location.href = `https://www.gitspedia.org/auth?id=${user.id}`;
                    }
                } else {
                    nav('/');
                }
            }, 1000);
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <>
        <title>Login | Crescent Moon Studio</title>
        <div className="login-section">
        <Section add_class="login-intro-section" title="Sign in" description={`${isRedirect ? `Login to continue to ${redirectService}` : ""}`} />
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
            <button type="submit">Sign in</button>
            <div className='info'>
                <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
            </div>
        </form>
        </div>
        </>
    )
}