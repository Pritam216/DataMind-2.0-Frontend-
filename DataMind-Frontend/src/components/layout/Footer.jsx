import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} DataMind • Built by <b>Pritam Kumar Roy</b>
      </p>

      <div className="footer-links">
        <a href="https://github.com/yourusername" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank">
          Twitter
        </a>
      </div>
    </footer>
  );
}
