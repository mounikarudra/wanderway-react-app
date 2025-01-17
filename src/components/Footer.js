import React from "react";

function Footer() {
    return (
        <div className="container-fluid">
            <footer className="text-center text-lg-start bg-info-subtle">
                <div className="container d-flex justify-content-center py-5">
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }} aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>Facebook
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }} aria-label="YouTube">
                        <i className="fab fa-youtube"></i>YouTube
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }} aria-label="Instagram">
                        <i className="fab fa-instagram"></i>Instagram
                    </button>
                    <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }} aria-label="Twitter">
                        <i className="fab fa-twitter"></i>Twitter
                    </button>
                </div>

                <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2025 Copyright:
                    <a className="text-white" href="http://localhost:3000/">Copyright</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;