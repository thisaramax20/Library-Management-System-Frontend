const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-blue-500 mb-4">LibTrack</h2>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Empowering libraries with seamless management and tracking.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold text-gray-300">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} LibTrack. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#privacy" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-blue-400">
              Terms of Service
            </a>
            <a href="#support" className="hover:text-blue-400">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;