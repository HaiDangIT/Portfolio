import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-white border-t-2 border-blue-100 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Lê Hải Đăng
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Backend Developer đam mê công nghệ, luôn học hỏi và sáng tạo để
              xây dựng những sản phẩm chất lượng.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Liên Kết Nhanh
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
              >
                🏠 Trang Chủ
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
              >
                👤 Về Tôi
              </Link>
              <Link
                to="/projects"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
              >
                💼 Dự Án
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-sm"
              >
                📧 Liên Hệ
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">
              Kết Nối Với Tôi
            </h4>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-1 border-2 border-gray-100 group-hover:border-blue-400">
                    {link.iconUrl ? (
                      <img
                        src={link.iconUrl}
                        alt={link.name}
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      <span className="text-xs font-semibold text-gray-700">
                        {link.name}
                      </span>
                    )}
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2025
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">
            Made with ❤️ using React, Tailwind CSS
          </p>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
    </footer>
  );
};

export default Footer;
