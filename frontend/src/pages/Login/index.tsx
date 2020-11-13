import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import RestServer from '../../services/RestServer'

import './styles.css';

export interface IValues {
    Usuario: string,
    Senha: string,
}

const defaultValues: IValues = {
    Usuario: "",
    Senha: "",
}

function Login() {
    const [values, setValues] = useState(defaultValues as IValues);

    // const history = useHistory();
    
    const handleChange = (event: any) => {
        event.persist();
        
        setValues(values => ({
            ...values,
            [event.target.id]: event.target.value
        }));
    }

    const handleSubmit = async (event:any) => {
        event.persist();

        const response = await RestServer.patch(`/api/usuario/login`, values);
        console.log(response.data);
    }

    return (
        <div id="login-page" className="page-container">
            <main className="form-wrapper">
                <fieldset>
                    <legend>Login</legend>
                    <Input name="Usuario" label="Usuário" type="text" defaultValue={values.Usuario} onChange={handleChange} />
                    <Input name="Senha" label="Senha" type="password" defaultValue={values.Senha} onChange={handleChange} />
                </fieldset>
                <button type="submit" onClick={handleSubmit}>Logar</button>
            </main>
        </div>
    )
}

export default Login;