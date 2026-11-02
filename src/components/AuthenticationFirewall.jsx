import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthenticationFirewall = ({ children, needsAuthentication, needsSuperAuthentication = false }) => {
    const { user } = useSelector((state) => state.user);
    if (needsAuthentication && (!user || user.role == "USER")) {
        return <Navigate to="/login" />;
    }
    if (needsSuperAuthentication && (!user || user.role != "SUPERADMIN")) {
        return <Navigate to="/login" />;
    }
    if (!needsAuthentication && user) {
        return <Navigate to="/" />;
    }
    return children;
};

export default AuthenticationFirewall;