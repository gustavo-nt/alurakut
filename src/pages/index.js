import Box from '../components/Box';
import Menu from '../components/Menu';
import MainGrid from '../components/MainGrid';
import ProfileRelationsBox from '../components/ProfileRelations';
import OrkutNostalgicIconSet from '../components/OrkutNostalgicIconSet';
import MenuProfileSidebar from '../components/MenuProfileSidebar';
import { useEffect, useState } from 'react';

export default function Home() {
    const githubUser = 'gustavo-nt';
    const [followers, setFollowers] = useState([]);
    const [communities, setCommunities] = useState([]);
    const favoriteUsers = ['facebook', 'react', 'magento', 'nodejs'];

    useEffect(function() {
        fetch(`https://api.github.com/users/${githubUser}/followers`)
        .then((res) => res.json())
        .then((res) => setFollowers(res.splice(0,6))); 

        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Authorization': '88c6c4c4127ba5d443f85710c06747',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({"query": `query {
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
    },[])

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
                                const data = await res.json();
                                setCommunities([...communities, data.record]);
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
                                    placeholder="Coloque uma URL para usarmos de capa"
                                    name="image"
                                    aria-label="Coloque uma URL para usarmos de capa"
                                />
                            </div>
                            <button>
                                Criar comunidade
                            </button>
                        </form>
                    </Box>
                </div>
                <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
                    <ProfileRelationsBox>
                        <h2>
                            Seguidores {followers.length}
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
                        Pessoas da comunidade

                        <ul>
                            {favoriteUsers.map((item) => {
                                return (
                                    <li key={item}>
                                        <a href={`user/${item}`} >
                                            <img src={`https://github.com/${item}.png`} />
                                            <span>{githubUser}</span>
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