import React, { useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import useScrollReveal from "../hooks/useScrollReveal";

const Contact = () => {
  const { alert, showAlert, hideAlert } = useAlert();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 });
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.2 });
  const [contactInfoRef, contactInfoVisible] = useScrollReveal({
    threshold: 0.2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form
    if (!form.name || !form.email || !form.message) {
      showAlert({
        show: true,
        text: "Vui lòng điền đầy đủ thông tin!",
        type: "danger",
      });
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      showAlert({
        show: true,
        text: "Email không hợp lệ!",
        type: "danger",
      });
      setLoading(false);
      return;
    }

    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      showAlert({
        show: true,
        text: "Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể. 🎉",
        type: "success",
      });
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="max-container relative">
      {alert.show && <Alert {...alert} />}

      <div
        ref={headerRef}
        className={`transition-all duration-1000 ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="head-text">
          Liên Hệ{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            📬
          </span>
        </h1>

        <div className="mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3 text-slate-500">
          <p className="text-sm sm:text-base md:text-lg">
            Bạn có dự án muốn thảo luận? Hay đơn giản chỉ muốn chat về công
            nghệ? Hãy gửi tin nhắn cho tôi nhé!
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
        {/* Contact Form */}
        <div
          ref={formRef}
          className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 border-2 border-gray-100 transition-all duration-1000 ${
            formVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
            <span>✉️</span> Gửi Tin Nhắn
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:gap-6"
          >
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
              >
                Tên của bạn:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nguyễn Văn A"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2"
              >
                Tin nhắn:
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Xin chào, tôi muốn..."
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⌛</span> Đang gửi...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Gửi Tin Nhắn
                </span>
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div
          ref={contactInfoRef}
          className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${
            contactInfoVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Contact Info Cards */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 border-2 border-blue-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <span>📞</span> Thông Tin Liên Hệ
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base sm:text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Email
                  </h3>
                  <a
                    href="mailto:dangwork.dev@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-base break-all"
                  >
                    ledang3916@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base sm:text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                    Địa chỉ
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-base">
                    Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 shadow-lg">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <span>🌐</span> Mạng Xã Hội
            </h2>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 border-2 border-transparent hover:border-gray-300 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 text-xs sm:text-base">
                  GitHub
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm sm:text-xl font-bold">
                    in
                  </span>
                </div>
                <span className="font-semibold text-blue-700 group-hover:text-blue-900 text-xs sm:text-base">
                  LinkedIn
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 border-2 border-transparent hover:border-blue-300 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-white text-sm sm:text-xl font-bold">
                    f
                  </span>
                </div>
                <span className="font-semibold text-blue-700 group-hover:text-blue-900 text-xs sm:text-base">
                  Facebook
                </span>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/users/yourid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 border-2 border-transparent hover:border-indigo-300 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </div>
                <span className="font-semibold text-indigo-700 group-hover:text-indigo-900 text-xs sm:text-base">
                  Discord
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
