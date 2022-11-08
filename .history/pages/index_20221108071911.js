import config from '../config.json';
import styled from 'styled-components';

function HomePage() {
    const estiloDaHomePage = { backgroundColor: 'red' };

    //console.log(config.playlists);
    return (
        <div style={estiloDaHomePage}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists}>Conteudo</TimeLine>
        </div>
    );
}

export default HomePage;

function Menu() {
    return <div>Menu</div>;
}

const StyledHeader = styled.div`
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

function Header() {
    return (
        <StyledHeader>
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

function TimeLine(props) {
    console.log('dentro do componente', props.playlists);
    const playlistNames = Object.keys(props.playlists);
    //statment
    // Retorno por expressao
    // map converte de uma coisa para outra coisa (de objeto para objeto)
    // converter da lista de nomes para components react
    return (
        <div>
            {playlistNames.map(function (playlistNames) {
                const videos = props.playlists[playlistNames];
                return playlistNames;
            })}
        </div>
    );
}
