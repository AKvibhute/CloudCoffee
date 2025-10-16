import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="aboutus-page">
      <div className="about-section">
        <h2 className="fancy-title">About Us</h2>
        <p>
          Welcome to <span style={{ fontFamily: "'Times New Roman', Times, serif", fontStyle: 'italic' }}>
            <strong> Cloudcoffee </strong>
          </span> — your ultimate destination for everything coffee!
        </p>
        <p>
          At <strong>CloudCofffee</strong>, we believe coffee isn’t just a drink — it’s an experience, a story, a culture. Whether you're fueling a morning routine or indulging in an afternoon pause, we're here to make every sip special.
        </p>
        <p>
          We offer freshly roasted beans, elegant brewing tools, and expert tips to elevate your coffee ritual — whether you're a curious beginner or a seasoned espresso artist.
        </p>
        <p><em>Let’s share a cup and brew some memories!</em></p>
      </div>

      <div className="terms-section">
        <h2 className="fancy-title">Terms & Conditions</h2>

        <section>
          <h3>Ordering & Payment</h3>
          <ul>
            <li>Order via our website or app for home delivery or café pickup.</li>
            <li>Prices include applicable taxes unless otherwise mentioned.</li>
            <li>We accept UPI, cards, net banking, and trusted wallets.</li>
            <li>Confirmed orders can’t be modified. Cancellations are allowed before prep begins.</li>
          </ul>
        </section>

        <section>
          <h3>Delivery</h3>
          <ul>
            <li>Estimated delivery times may vary with traffic, weather, or demand.</li>
            <li>Refunds won’t apply to failed deliveries caused by wrong addresses or absence.</li>
          </ul>
        </section>

        <section>
          <h3>Menu & Availability</h3>
          <ul>
            <li>Menus & prices are managed by partner cafés.</li>
            <li>Real-time item availability may differ.</li>
            <li>We’re not responsible for vendor menu errors or omissions.</li>
          </ul>
        </section>

        <section>
          <h3>Cancellations & Refunds</h3>
          <ul>
            <li>If an order is cancelled by a vendor, you'll get a full refund as per our policy.</li>
            <li>Wrong, stale, or damaged orders must be reported within 24 hours with proof (photo/video).</li>
          </ul>
        </section>

        <section>
          <h3>User Conduct</h3>
          <ul>
            <li>Respect towards delivery staff and partners is a must.</li>
            <li>Abuse, fraud, or platform misuse may result in account suspension.</li>
          </ul>
        </section>

        <section>
          <h3>Privacy</h3>
          <ul>
            <li>We collect only the necessary data to serve you better.</li>
            <li>Your personal info is safe and shared only as required by law or with consent.</li>
          </ul>
        </section>

        <section>
          <h3>Intellectual Property</h3>
          <ul>
            <li>All content, branding, and features are property of Brew Bliss.</li>
            <li>Copying or using our materials without permission is not allowed.</li>
          </ul>
        </section>

        <section>
          <h3>Modifications</h3>
          <p>
            We may update these terms occasionally. Continued use of our platform confirms your agreement with updated terms.
          </p>
        </section>

        <section>
          <h3>Support</h3>
          <p>
            Need help? Reach out to us anytime:<br />
            Email: <strong>support@coludcoffee.com</strong><br />
            Phone: <strong>+91-98765-43210</strong>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
