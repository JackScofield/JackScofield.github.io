
const Footer = () => {
    return (
        <footer id="footer">
          <p>&copy; {new Date().getFullYear()} Jack Scofield. All rights reserved.</p>
          <ul className="icons">
            <li><a href="https://github.com/JackScofield" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="mailto:you@example.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
          </ul>
        </footer>
    );
}



export default Footer;