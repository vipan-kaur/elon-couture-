import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 border-t">
      <div className="max-w-7xl mx-auto px-10 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* ABOUT */}
          <div className="md:border-r md:pr-10">
            <h3 className="font-semibold tracking-wide mb-6">ABOUT</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>About Us</li>
              <li>Careers</li>
              <li>World of RL</li>
              <li>Protecting Our Brands</li>
              <li>Privacy</li>
              <li>Terms Of Use</li>
              <li>Terms Of Sale</li>
              <li>Imprint</li>
              <li>Cookies</li>
              <li>Manage Cookie Settings</li>
              <li>Accessibility Statement</li>
            </ul>
          </div>

          {/* ACCOUNT */}
          <div className="md:border-r md:px-10">
            <h3 className="font-semibold tracking-wide mb-6">ACCOUNT</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>My Account</li>
              <li>Check Order</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div className="md:pl-10">
            <h3 className="font-semibold tracking-wide mb-6">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li>Help</li>
              <li>Shipping</li>
              <li>Free Online Returns</li>
              <li>Operating Guidelines</li>
              <li>Sitemap</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
