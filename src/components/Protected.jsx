// Protected.jsx
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const token = localStorage.getItem("token");

export default function Protected({ children, ...rest }) {
    if (token) {
        return <Route {...rest}>{children}</Route>;
    } else {
        return <Navigate to="/login" />;
    }
}
