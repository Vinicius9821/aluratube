import React from 'react';
import config from '../config.json';
import styled from 'styled-components';

import Menu from '../src/components/Menu/Menu';
import { StyledTimeline } from '../src/components/Timeline';

function HomePage() {
    const estiloDaHomePage = {
        //backgroundColor: 'red'
    };
    const [valorDoFiltro, setValorDoFiltro] = React.useState('');

    //console.log(config.playlists);
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                }}
            >
                {/* Prop Driling */}
                <Menu
                    valorDoFiltro={valorDoFiltro}
                    setValorDoFiltro={setValorDoFiltro}
                />
                <Header />
                <TimeLine
                    searchValue={valorDoFiltro}
                    playlists={config.playlists}
                >
                    Conteudo
                </TimeLine>
            </div>
        </>
    );
}

export default HomePage;

const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
    }
`;

const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    height: 230px;
`;

function Header() {
    return (
        <StyledHeader>
            <StyledBanner bg={config.bg}/>
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <h2>{config.job}</h2>
                </div>
            </section>
        </StyledHeader>
    );
}

//statment
// Retorno por expressao
// map converte de uma coisa para outra coisa (de objeto para objeto)
// converter da lista de nomes para components react

function TimeLine({ searchValue, ...props }) {
    // console.log('dentro do componente', props.playlists);
    const playlistNames = Object.keys(props.playlists);
    return (
        <StyledTimeline>
            {playlistNames.map(function (playlistName) {
                const videos = props.playlists[playlistName];
                // console.log(playlistNames);
                // console.log(videos);
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    );
}
