
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-red-500 text-white">
                <div>
                    <img className="h-32 rounded-xl" src="https://img.freepik.com/premium-vector/soccer-player-logo-vector-silhouette_61778-19.jpg?w=740" alt="" />
                    <p className="font-bold">Sports Hero<br />Learn the game from any part of the country and stay fit</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Sponsors</a>
                    <a className="link link-hover">Help</a>
                    <a className="link link-hover">Enroll Now</a>
                    <a className="link link-hover">Our Instructors</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Classes</a>
                </div>
                
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Sports Hero</p>
                </div>
            </footer>
            
        </div>
    );
};

export default Footer;