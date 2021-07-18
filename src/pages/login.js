import Head from 'next/head';
import Login from '../components/Login';

export default function LoginScreen() {
    return (
        <>
            <Head>
                <title>Alurakut | Login</title>
                <link rel="icon" href="/logo-small.png" />
            </Head>

            <Login />
        </>
    )
}