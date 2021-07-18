import nookies from 'nookies';
import jwt from 'jsonwebtoken';
import Box from '../components/Box';
import Menu from '../components/Menu';
import MainGrid from '../components/MainGrid';
import Dropzone from '../components/Dropzone';
import ProfileRelationsBox from '../components/ProfileRelations';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';
import MenuProfileSidebar from '../components/MenuProfileSidebar';
import { useEffect, useState } from 'react';

export default function Home(props) {
    const githubUser = props.githubUser;
    const [followers, setFollowers] = useState([]);
    const [selectedFile, setSelectedFile] = useState('');
    const [communities, setCommunities] = useState([]);
    const favoriteUsers = ['facebook', 'react', 'magento', 'nodejs'];

    useEffect(function () {
        fetch(`https://api.github.com/users/${githubUser}/followers`)
            .then((res) => res.json())
            .then((res) => setFollowers(res.splice(0, 6)));

        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': '88c6c4c4127ba5d443f85710c06747',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "query": `query {
                allCommunities{
                    id
                    title
                    imageUrl
                    creatorSlug
                }
            }`})
        })
            .then((res) => res.json())
            .then((res) => setCommunities(res.data.allCommunities));
    }, [])

    return (
        <>
            <Menu githubUser={githubUser} />

            <MainGrid>
                <div className="profileArea" style={{ gridArea: 'profileArea' }}>
                    <Box>
                        <MenuProfileSidebar githubUser={githubUser} />
                    </Box>
                </div>
                <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
                    <Box>
                        <h1 className="title">
                            Bem vindo(a)
                        </h1>

                        <OrkutNostalgicIconSet />
                    </Box>

                    <Box>
                        <h2 className="subTitle">O que você deseja fazer?</h2>
                        <form onSubmit={function handleSubmit(e) {
                            e.preventDefault();
                            const valuesForm = new FormData(e.target);

                            const community = {
                                title: valuesForm.get('title'),
                                imageUrl: valuesForm.get('image'),
                                creatorSlug: githubUser
                            }

                            fetch('/api/communities', {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(community),
                            }).then(async (res) => {
                                const json = await res.json();
                                setCommunities([...communities, json.data]);
                            })
                        }}>
                            <div>
                                <input
                                    placeholder="Qual vai ser o nome da sua comunidade?"
                                    name="title"
                                    aria-label="Qual vai ser o nome da sua comunidade?"
                                    type="text"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="image"
                                    value={selectedFile}
                                    onChange={e => setSelectedFile(e.target.value)}
                                    aria-label="Coloque uma url para usar de capa"
                                    placeholder="Coloque uma url para usar de capa"
                                />
                            </div>
                            <Dropzone
                                imageUrl={selectedFile}
                                onRemove={() => {
                                    setSelectedFile('');
                                }}
                            />
                            <button>
                                Criar comunidade
                            </button>
                        </form>
                    </Box>
                </div>
                <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
                    <ProfileRelationsBox>
                        <h2 className="smallTitle">
                            Seguidores ({followers.length})
                        </h2>
                        <ul>
                            {followers.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={`https://github.com/${item.login}`} >
                                            <img src={item.avatar_url} />
                                            <span>{item.login}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBox>

                    <ProfileRelationsBox>
                        <h2 className="smallTitle">
                            Comunidades ({communities.length})
                        </h2>
                        <ul>
                            {communities.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a href={`user/${item.title}`} >
                                            <img src={item.imageUrl} />
                                            <span>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBox>

                    <ProfileRelationsBox>
                        <h2 className="smallTitle">
                            Pessoas da Comunidade ({favoriteUsers.length})
                        </h2>

                        <ul>
                            {favoriteUsers.map((item) => {
                                return (
                                    <li key={item}>
                                        <a href={`user/${item}`} >
                                            <img src={`https://github.com/${item}.png`} />
                                            <span>{item}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </ProfileRelationsBox>
                </div>
            </MainGrid>
        </>
    )
}

export const getServerSideProps = async (ctx) => {
    const cookies = nookies.get(ctx);
    const token = cookies.USER_TOKEN;
    const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
        headers: {
            Authorization: token
        }
    })
        .then((res) => res.json());

    if (!isAuthenticated) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    const { githubUser } = jwt.decode(token);
    return {
        props: {
            githubUser
        }
    }
}