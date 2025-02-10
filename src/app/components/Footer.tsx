import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-4">K.A Tech</h3>
            <p className="font-rubik text-sm text-gray-600 dark:text-gray-300">
              Empowering developers with innovative tools and solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Tools', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="font-rubik text-sm text-gray-600 dark:text-gray-300 hover:text-[#442781] dark:hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-raleway font-semibold text-gray-800 dark:text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {['GitHub', 'Twitter', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#442781] dark:hover:text-white transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-center font-rubik text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} K.A Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
