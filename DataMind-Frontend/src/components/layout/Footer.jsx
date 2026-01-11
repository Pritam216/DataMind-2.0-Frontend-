import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} DataMind • Built by <b>Pritam Kumar Roy</b>
      </p>

      <div className="footer-links">
        <a href="https://pritam-kumar-roy.vercel.app/" target="_blank">
          Contact
        </a>
      </div>
    </footer>
  );
}
