import React, { useState } from 'react';
import Input from '../../components/Input';
import RestServer from '../../services/RestServer'

import './styles.css';

function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    async function logar() {
        const response = await RestServer.patch('/api/usuario/login', { Usuario: usuario, Senha: senha });
        alert(response);    
    }

    return (
        <div id="login-page" className="page-container">
            <main className="form-wrapper">
                <form onSubmit={logar} >
                    <fieldset>
                        <legend>Login</legend>
                        <Input name="Usuario" label="Usuário" type="text" onChange={e => setUsuario(e.target.value)} />
                        <Input name="Senha" label="Senha" type="password" onChange={e => setSenha(e.target.value)} />

                        <button type="submit">Logar</button>
                    </fieldset>
                </form>
            </main>
        </div>
    )
}

export default Login;