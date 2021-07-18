import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #201B2C;
    display: flex;
    justify-content: center;
    align-items: center;

    .left-login {
        width: 50vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > h1 {
            font-size: 3vw;
            color: #77FFC0;
        }

        .left-login-image { 
            width: 35vw;
        }
    }

    .right-login {
        width: 50vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card-login {
        width: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px 35px;
        background: #2F2841;
        border-radius: 20px;
        box-shadow: 0px 10px 40px #00000056;

        > h1 {
            color: #00FF88;
            font-weight: 800;
            margin: 0;
        }

        > form {
            width: 100%;
        }
    }

    .text-field {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 10px 0px;

        > input {
            width: 100%;
            border: none;
            border-radius: 10px;
            padding: 15px;
            background: #514869;
            color: #F0FFFFDE;
            font-size: 12pt;
            box-shadow: 0px 10px 40px #00000056;
            outline: none;
            box-sizing: border-box;

            &::placeholder {
                color: #F0FFFF94;
            }
        }

        > label {
            color: #F0FFFFde;
            margin-bottom: 10px;
        }
    }

    .btn-login {
        width: 100%;
        padding: 16px 0px;
        margin: 20px 0;
        border: none;
        border-radius: 8px;
        outline: none;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 3px;
        color: #2B134B;
        background: #00FF88;
        cursor: pointer;
        box-shadow: 0px 10px 40px -12px #00FF8052;
        transition: .3s ease all;

        &:disabled {
            cursor: not-allowed;
        }

        &:hover {
            opacity: 0.8;
        }
    }

    @media (max-width: 950px) {
        .card-login {
            width: 85%;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column; 

        .left-login {
            width: 100%;
            height: auto;

            > h1 {
                display: none;
            }

            .left-login-image {
                width: 50vw;
            }
        }

        .right-login {
            width: 100%;
            height: auto;
        }

        .card-login {
            width: 90vw;
        }
    }
`;