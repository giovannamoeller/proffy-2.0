import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Cadastro from './pages/Cadastro';
import SuccessCadastro from './pages/Success-Cadastro';
import ForgotPassword from './pages/ForgotPassword';
import SuccessForgotPassword from './pages/Success-ForgotPassword';
import Profile from './pages/Profile';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Login} exact/>
            <Route path="/home" component={Landing} exact/>
            <Route path="/study" component={TeacherList} exact/>
            <Route path="/give-classes" component={TeacherForm} exact/>
            <Route path="/sign-up" component={Cadastro} exact/>
            <Route path="/success-sign-up" component={SuccessCadastro} exact/>
            <Route path="/forgot-password" component={ForgotPassword} exact/>
            <Route path="/success-forgot-password" component={SuccessForgotPassword} exact/>
            <Route path="/profile" component={Profile} exact/>
        </BrowserRouter>
    )
}