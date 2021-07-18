import styled from 'styled-components';
import { BASE_URL } from '../../utils/variables';

export const Wrapper = styled.header`
    width: 100%;
    background-color: #201b2c;

    .menuProfileSidebar {
        background: #171029;
        position: fixed;
        z-index: 100;
        padding: 46px;
        bottom: 0;
        left: 0;
        right: 0;
        top: 48px;
        transition: .3s;
        pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
        opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
        transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};
     
        @media(min-width: 860px) {
            display: none;
        }

        > div {
            max-width: 400px;
            margin: auto;

            img {
                max-width: 200px;
            }
        }

        a {
            font-size: 18px;
        }

        .boxLink {
            font-size: 18px;
            color: #FFF;
            -webkit-text-decoration: none;
            text-decoration: none;
            font-weight: 800;
        }

        hr {
            margin-top: 12px;
            margin-bottom: 8px;
            border-color: transparent;
            border-bottom-color: #ECF2FA;
        }
    }

    .container {
        padding: 7px 16px;
        max-width: 1110px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 101;

        @media(min-width: 860px) {
            justify-content: flex-start;
        }

        button {
            border: 0;
            background: transparent;
            align-self: center;
            display: inline-block;
            cursor: pointer;

            @media(min-width: 860px) {
                display: none;
            }
        }

        nav {
            display: none;

            @media(min-width: 860px) {
                display: flex;
            }

            a {
                font-size: 12px;
                color: white;
                padding: 10px 16px;
                position: relative;
                text-decoration: none;
            }
        }

        input {
            background-color: #514869;
            color: #F0FFFFDE;
            padding: 10px 42px;
            border: 0;
            box-shadow: 0px 10px 40px #00000056;
            background-image: url(${`${BASE_URL}/icons/search.svg`});
            background-position: 15px center;
            background-repeat: no-repeat;
            border-radius: 10px;
            font-size: 12px;
            outline: none;

            &::placeholder {
                color: #F0FFFFDE;
                opacity: 1;
            }
        } 
    }
`;

export const Logo = styled.img`
    height: 23px;
    padding-right: 10px;
`;