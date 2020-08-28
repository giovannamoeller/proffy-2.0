import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Landing} exact/>
            <Route path="/study" component={TeacherList} exact/>
            <Route path="/give-classes" component={TeacherForm} exact/>
        </BrowserRouter>
    )
}