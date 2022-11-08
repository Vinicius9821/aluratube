import config from '../config.json';

function HomePage() {
    const estiloDaHomePage = { backgroundColor: 'red' };
    return (
        <div style={estiloDaHomePage}>
            <Menu />
            <Header />
            <TimeLine />
        </div>
    );
}

export default HomePage;

function Menu() {
    return <div>Menu</div>;
}

function Header() {
    return (
        <div>
            <img src="banner" />
            <img src="fotinha-do-perfil" />
            {config.}
        </div>
    );
}

function TimeLine() {
    return <div>Timeline</div>;
}
