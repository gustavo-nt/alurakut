import styled from 'styled-components';

const Box = styled.div`
    background: #201B2C;
    border-radius: 8px;
    padding: 16px;
    color: #FFF;
    margin-bottom: 10px;

    .boxLink {
        font-size: 14px;
        color: #FFF;
        text-decoration: none;
        font-weight: 800;
    }

    .title {
        font-size: 32px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .subTitle {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 20px;
    }

    .smallTitle {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    hr {
        margin-top: 12px;
        margin-bottom: 8px;
        border-color: transparent;
        border-bottom-color: #FFF;
    }

    input {
        width: 100%;
        background-color: #514869;
        color: #F0FFFFDE;
        border: 0;
        padding: 14px 16px;
        margin-bottom: 14px;
        border-radius: 10px;
        outline: none;
        box-shadow: 0px 10px 40px #00000056;

        &::placeholder {
            color: #F0FFFFDE;
            opacity: 1;
        }
    }

    button {
        border: 0;
        padding: 8px 12px;
        color: #2B134B;
        border-radius: 10000px;
        cursor: pointer;
        background: #00FF88;
        box-shadow: 0px 10px 40px -12px #00FF8052;
    }
`;

export default Box;