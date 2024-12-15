import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
            <a href='https://www.facebook.com/sebas.roman2/' target="_blank" rel="noopener noreferrer">
                <img src="/img/facebook.png" alt="Facebook"  />
            </a>
            <a href='https://x.com/SebastianRoman_' target="_blank" rel="noopener noreferrer">
                <img src="/img/twitter.png" alt="Twitter" />
            </a>
            <a href='https://www.instagram.com/sebasroman2/' target="_blank" rel="noopener noreferrer">
                <img src="/img/instagram.png" alt="Instagram" />
            </a>
        </div>
        <strong>Desarrollado por Sebastian Roman</strong>
        <img src="/img/Logo.png" alt="org" />
    </footer>
}

export default Footer