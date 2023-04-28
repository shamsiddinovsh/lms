import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser(){
    const navigate = useNavigate();

    const getToken = () =>{
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    // const getUser = () =>{
    //     const userString = sessionStorage.getItem('user');
    //     const user_detail = JSON.parse(userString);
    //     return user_detail;
    // }

    const [token,setToken] = useState(getToken());
    // const [user,setUser] = useState(getUser());

    const saveToken = (token) =>{
        sessionStorage.setItem('token',JSON.stringify(token));
        // sessionStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        // setUser(user);
        navigate('/admin');
    }

    const logout = () => {
        sessionStorage.removeItem('token');
        navigate('/admin');
    }

    const http = axios.create({
        baseURL:"http://159.253.23.169:2001/api/admin",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`,
            'Access-Control-Allow-Origin' : "*"
        }
    });
    const hr = axios.create({
        baseURL:"http://159.253.23.169:2001/api/hr",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`,
            'Access-Control-Allow-Origin' : "*"
        }
    });
    const teacher = axios.create({
        baseURL:"http://159.253.23.169:2001/api/teacher",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`,
            'Access-Control-Allow-Origin' : "*"
        }
    });
    const student = axios.create({
        baseURL:"http://159.253.23.169:2001/api/students",
        headers:{
            "Content-type" : "application/json",
            "Authorization" : `Bearer ${token}`,
            'Access-Control-Allow-Origin' : "*"
        }
    });
    return {
        setToken:saveToken,
        token,
        // user,
        getToken,
        http,
        hr,
        student,
        teacher,
        logout
    }
}