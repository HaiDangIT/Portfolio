import React from "react";
import {
  skills,
  education,
  certificates,
  journey,
  hobbies,
  goals,
} from "../constants";
import { avatar } from "../assets/images";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <img
            src={avatar}
            alt="Lê Hải Đăng"
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="head-text">
            Tôi là{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              Lê Hải Đăng
            </span>
          </h1>
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-xl border-l-4 border-blue-500">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4 italic">
              "Hãy theo đuổi sự ưu tú, thành công sẽ theo đuổi bạn"
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Tôi tin rằng học tập là hành trình không ngừng nghỉ. Mỗi dòng
              code, mỗi dự án, mỗi thử thách đều là cơ hội để chúng ta trở nên
              tốt hơn. Đừng sợ thất bại, hãy sợ việc không dám thử! 💪
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-3">
              Với tôi, lập trình không chỉ là công việc mà là đam mê. Tôi muốn
              truyền cảm hứng để mọi người cùng theo đuổi ước mơ công nghệ,
              không ngừng học hỏi và phát triển bản thân mỗi ngày! 🚀
            </p>
          </div>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text flex items-center gap-3">
          <span className="text-4xl">⚡</span>
          Kỹ Năng
          <span className="text-4xl">🚀</span>
        </h3>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div className="group relative w-28 h-28" key={skill.name}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              <div className="relative w-full h-full bg-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex justify-center items-center border-4 border-blue-100 hover:border-blue-400 group-hover:scale-110">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-16 h-16 object-contain group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text flex items-center gap-3">
          <span className="text-4xl">🎓</span>
          Học Vấn
          <span className="text-4xl">📚</span>
        </h3>
        <div className="mt-8 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg hover:scale-110 transition-transform duration-300">
                🎓
              </div>
            </div>
            <div className="flex-grow">
              <h4 className="text-2xl font-bold text-black mb-3 flex items-center gap-2">
                {education.school}
                <span className="text-2xl">🏛️</span>
              </h4>
              <p className="text-gray-700 font-semibold mb-2 text-lg">
                📖 {education.degree}
              </p>
              <p className="text-gray-600 mb-3">{education.description}</p>
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                📅 {education.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <h3 className="subhead-text flex items-center gap-3">
          <span className="text-4xl">🏆</span>
          Chứng Chỉ
          <span className="text-4xl">📜</span>
        </h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-400"
            >
              <div className="relative overflow-hidden h-80 bg-gradient-to-br from-blue-50 to-purple-50">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  🏆
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-blue-50">
                <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                  <span className="text-xl">📜</span>
                  {cert.title}
                </h4>
                <p className="text-blue-600 text-sm font-semibold mb-2 flex items-center gap-2">
                  <span>🏢</span>
                  {cert.issuer}
                </p>
                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <span>📅</span>
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text flex items-center gap-3">
          <span className="text-4xl">🚀</span>
          Hành Trình Học Tập
          <span className="text-4xl">📈</span>
        </h3>
        <p className="mt-4 text-slate-500 text-lg">
          Từ những dòng code đầu tiên năm 2022 đến hiện tại, đây là hành trình
          phát triển kỹ năng của tôi 💪
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {journey.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                      📅 {item.year}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-black mb-3 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-10">
        <h3 className="subhead-text flex items-center gap-3">
          <span className="text-4xl">🎮</span>
          Sở Thích & Đam Mê
          <span className="text-4xl">💖</span>
        </h3>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {hobby.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
                    <span className="text-2xl">✨</span>
                    {hobby.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    {hobby.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {hobby.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-110 transition-transform duration-300 cursor-pointer"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text flex items-center gap-3">
          <span className="text-4xl">🎯</span>
          Mục Tiêu & Định Hướng
          <span className="text-4xl">🌟</span>
        </h3>
        <p className="mt-4 text-slate-500 text-lg">
          Kế hoạch phát triển bản thân và sự nghiệp trong lĩnh vực công nghệ 🚀
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {goal.icon}
                </div>
                <h4 className="text-2xl font-bold text-black flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  {goal.title}
                </h4>
              </div>
              <ul className="space-y-4">
                {goal.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-700 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md">
                      ✓
                    </span>
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
