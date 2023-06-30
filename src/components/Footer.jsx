
import "./footer.css";

export function Footer() {
 

  return (
    <>
    <footer>
    <div class="footer-container">
              <div class="footer-column">
                <h3>About Us</h3>
                <ul>
                  <li>About Company</li>
                  <li>Our Team</li>
                  <li>Contact Us</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Services</h3>
                <ul>
                  <li>Buy Properties</li>
                  <li>Sell Properties</li>
                  <li>Rent Properties</li>
                  <li>Property Management</li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Resources</h3>
                <ul>
                  <li>Blog</li>
                  <li>FAQs</li>
                  <li>Guides & Tips</li>
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div class="footer-column">
                <h3>Follow Us</h3>
                <ul>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </ul>
              </div>
              
             
            </div>
            <div className="footEnd">
              <p>©2023 Property Paradise, All Rights Reserved.
                <br/>
                Web Design & Development by Wictronix | DMCA | PRIVACY POLICY
              </p>
            </div>
            </footer>
            </>

  );
}