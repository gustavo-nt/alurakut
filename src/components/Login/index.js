import nookies from 'nookies';
import { Container } from "./styles";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [githubUser, setGithubUser] = useState('gustavo-nt');

    return (
        <Container>
            <div className="left-login">
                <h1>Faça login<br/>E entre em nossa plataforma</h1>
                <img src="/astronaut-animate.svg" className="left-login-image" alt="Astronauta animação" />
            </div>
            <div className="right-login">
                <div className="card-login">
                    <h1>LOGIN</h1>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        fetch('https://alurakut.vercel.app/api/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ githubUser: githubUser })
                        })
                        .then(async (response) => {
                            const data = await response.json()
                            const token = data.token;

                            nookies.set(null, 'USER_TOKEN', token, {
                                path: '/',
                                maxAge: 86400 * 7
                            })
                            router.push('/')
                        })
                    }}>
                        <div className="text-field">
                            <label>Usuário</label>
                            <input 
                                type="text" 
                                placeholder="Usuário"
                                value={githubUser}
                                onChange={(event) => {
                                    setGithubUser(event.target.value)
                                }}
                            />
                        </div>
                        <button 
                            type="submit" 
                            className="btn-login"
                            disabled={githubUser.length === 0}
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </Container>
    )
}
