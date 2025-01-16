import React from 'react';

const Footer = function () {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#about" className="text-light">
              Chi siamo
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#privacy" className="text-light">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#contact" className="text-light">
              Contattaci
            </a>
          </li>
        </ul>
        <p className="mb-1">© 2025 Bookscape. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer