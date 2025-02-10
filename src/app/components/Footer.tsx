const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-raleway text-sm font-semibold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-rubik text-sm text-gray-500 hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="font-rubik text-sm text-gray-500 hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-raleway text-sm font-semibold text-gray-800 mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-rubik text-sm text-gray-500 hover:text-gray-900">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="font-rubik text-sm text-gray-500 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-raleway text-sm font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="font-rubik text-sm text-gray-500 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-rubik text-sm text-gray-500 hover:text-gray-900">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="font-rubik text-sm text-gray-500">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
