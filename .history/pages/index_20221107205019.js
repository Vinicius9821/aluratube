import config from '../config.json';
import styled from 'styled-components';

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

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src="banner" />
                <img src={`https://github.com/${config.github}.png`} />
                {config.name}
                {config.job}
            </section>
        </StyledHeader>
    );
}

function TimeLine() {
    return <div>Timeline</div>;
}
