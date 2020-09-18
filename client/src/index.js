import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './Context/AuthContext.js'

ReactDOM.render(
    <AuthProvider>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </AuthProvider>,
    document.getElementById('root'));
