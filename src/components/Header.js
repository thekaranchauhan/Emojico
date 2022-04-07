import './styles/Header.css'

function Header() {

    return (
        <div className="header">
            <h1>
                Emojico <span role="img" aria-label="Unicorn Emoji">😜</span>
            </h1>
            <p>
                Search emojis for your projects and right click to copy it.
            </p>
        </div>
    )
}

export default Header