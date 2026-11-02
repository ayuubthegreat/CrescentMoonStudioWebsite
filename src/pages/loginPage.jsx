
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema, LoginUser, setFromExternal } from '../slices/userSlice';
import Section from '../components/Section';
import './loginPage.css'
import { useEffect, useState } from 'react';
import { determineIfRedirectValid } from '../funcs/API_funcs';

export default function loginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(userLoginSchema),
    }); 
    const {user, isFromExternal} = useSelector((state) => state.user);
    const [redirectService, setRedirectService] = useState(null);
    useEffect(() => {
        determineIfRedirectValid(setRedirectService, dispatch, nav);
    }, [isFromExternal])
   
    const dispatch = useDispatch();
    const nav = useNavigate();
    const serviceRedirectInfo = [{label: "gitspedia", redirectHref: "https://www.gitspedia.org/auth"}];
    
    const onSubmit = async (data) => {
        try {
            await dispatch(LoginUser(data)).unwrap();
            reset();
            console.log(user);
            setTimeout(() => {
                if (isFromExternal) {
                    if (redirectService === "gitspedia") {
                        window.location.href = `https://www.gitspedia.org/auth/?id=${user.id}`;
                    }
                } else {
                    nav('/');
                }
            }, 2000);
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <>
        <title>Login | Crescent Moon Studio</title>
        <div className="login-section">
        <Section add_class="login-intro-section" title="Sign in" description={`${isFromExternal ? `Login to continue to ${redirectService}` : ""}`} />
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
                <p>Don't have an account? <Link to={`/register${isFromExternal ? `/${redirectService}` : ""}`}>Register here</Link>.</p>
            </div>
        </form>
        </div>
        </>
    )
}