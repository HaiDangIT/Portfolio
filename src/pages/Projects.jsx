import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import useScrollReveal from "../hooks/useScrollReveal";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 });
  const [filterRef, filterVisible] = useScrollReveal({ threshold: 0.2 });
  const [projectsRef, projectsVisible] = useScrollReveal({ threshold: 0.1 });
  const [statsRef, statsVisible] = useScrollReveal({ threshold: 0.2 });
  const [techStackRef, techStackVisible] = useScrollReveal({ threshold: 0.2 });

  const categories = [
    { name: "All", icon: "🎯", count: projects.length },
    {
      name: "Full-stack Web",
      icon: "🌐",
      count: projects.filter((p) => p.category === "Full-stack Web").length,
    },
    {
      name: "Frontend",
      icon: "🎨",
      count: projects.filter((p) => p.category === "Frontend").length,
    },
    {
      name: "Game",
      icon: "🎮",
      count: projects.filter((p) => p.category === "Game").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="max-container">
      {/* Header Section with Animation */}
      <div
        ref={headerRef}
        className={`relative transition-all duration-1000 ${
          headerVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="head-text">
          Dự Án Của Tôi{" "}
          <span className="blue-gradient_text font-semibold drop-shadow animate-pulse">
            💼
          </span>
        </h1>
        <div className="absolute -top-6 sm:-top-10 right-0 text-5xl sm:text-8xl opacity-5 pointer-events-none">
          🚀
        </div>
      </div>

      <div
        className={`mt-4 sm:mt-5 flex flex-col gap-2 sm:gap-3 text-slate-500 transition-all duration-1000 ${
          headerVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-sm sm:text-base md:text-lg">
          Đây là tổng hợp các dự án mà tôi đã thực hiện, từ các ứng dụng
          full-stack đến các website frontend hiện đại. Mỗi dự án đều được xây
          dựng với sự tận tâm và áp dụng các công nghệ mới nhất.
        </p>
      </div>

      {/* Category Filter with Icons */}
      <div
        ref={filterRef}
        className={`mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-4 justify-center transition-all duration-1000 ${
          filterVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`group relative px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 transform ${
              selectedCategory === category.name
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105 sm:scale-110"
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-105"
            } border-2 ${
              selectedCategory === category.name
                ? "border-transparent"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-base sm:text-xl">{category.icon}</span>
              <span className="whitespace-nowrap">{category.name}</span>
              <span
                className={`ml-0.5 sm:ml-1 px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${
                  selectedCategory === category.name
                    ? "bg-white/20 text-white"
                    : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                }`}
              >
                {category.count}
              </span>
            </div>
            {selectedCategory === category.name && (
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl"></div>
            )}
          </button>
        ))}
      </div>

      {/* Projects Count Display */}
      <div className="mt-6 sm:mt-8 text-center">
        <div className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border-2 border-blue-200">
          <span className="text-lg sm:text-2xl">📊</span>
          <span className="text-gray-700 font-medium text-xs sm:text-base">
            Hiển thị{" "}
            <span className="text-blue-600 font-bold">
              {filteredProjects.length}
            </span>{" "}
            dự án
            {selectedCategory !== "All" && (
              <span className="text-gray-500">
                {" "}
                trong danh mục{" "}
                <span className="text-purple-600 font-semibold">
                  {selectedCategory}
                </span>
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div
        ref={projectsRef}
        className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {filteredProjects.map((project, index) => (
          <div
            key={`project-${index}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-1000 overflow-hidden border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-2 ${
              projectsVisible
                ? "opacity-100 translate-x-0"
                : index % 2 === 0
                ? "opacity-0 -translate-x-20"
                : "opacity-0 translate-x-20"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            {/* Card Header with Icon */}
            <div
              className={`${project.theme} p-6 relative overflow-hidden transition-all duration-500`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {/* Large Background Icon */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-110 transform">
                <img
                  src={project.iconUrl}
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Main Icon */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 p-2">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-8 h-8 object-contain drop-shadow-md"
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-white text-xl font-bold drop-shadow-lg group-hover:translate-x-1 transition-transform duration-300">
                  {project.name}
                </h3>
                <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                  {project.category === "Full-stack Web"}
                  {project.category === "Frontend"}
                  {project.category === "Game"}
                  {project.category}
                </span>
              </div>

              {/* Hover Indicator */}
              {hoveredProject === index && (
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-full p-2 animate-bounce">
                  <span className="text-white text-xl">✨</span>
                </div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3 group-hover:text-gray-900 transition-colors">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-medium rounded-full border border-blue-200 hover:bg-blue-100 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <Link
                to={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-blue-600 text-sm sm:text-base font-semibold hover:text-blue-800 transition-all duration-300 group/link mt-3 sm:mt-4 hover:gap-3"
              >
                <span className="relative">
                  Xem dự án
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300"></span>
                </span>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 h-3 sm:w-4 sm:h-4 object-contain group-hover/link:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Hover Effect Border Glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400 rounded-2xl transition-all duration-500 pointer-events-none opacity-0 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="mt-12 sm:mt-20 text-center py-12 sm:py-20">
          <div className="text-6xl sm:text-8xl mb-3 sm:mb-4">😕</div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-700 mb-2">
            Không tìm thấy dự án
          </h3>
          <p className="text-gray-500 text-sm sm:text-base">
            Hiện tại chưa có dự án nào trong danh mục này.
          </p>
        </div>
      )}

      {/* Stats Section with Icons */}
      <div
        ref={statsRef}
        className={`mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-1000 ${
          statsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative group bg-gradient-to-br from-blue-50 to-cyan-50 p-4 sm:p-6 rounded-2xl text-center border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden">
          <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
            📁
          </div>
          <div className="relative z-10">
            <div className="text-3xl sm:text-5xl font-bold text-blue-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              {projects.length}
            </div>
            <div className="text-[10px] sm:text-sm text-gray-600 font-medium flex items-center justify-center gap-0.5 sm:gap-1">
              <span>📁</span>
              <span>Dự án hoàn thành</span>
            </div>
          </div>
        </div>

        <div className="relative group bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-6 rounded-2xl text-center border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden">
          <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
            ⚡
          </div>
          <div className="relative z-10">
            <div className="text-3xl sm:text-5xl font-bold text-green-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              9
            </div>
            <div className="text-[10px] sm:text-sm text-gray-600 font-medium flex items-center justify-center gap-0.5 sm:gap-1">
              <span>⚡</span>
              <span>Công nghệ sử dụng</span>
            </div>
          </div>
        </div>

        <div className="relative group bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-2xl text-center border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden">
          <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
            🎯
          </div>
          <div className="relative z-10">
            <div className="text-3xl sm:text-5xl font-bold text-purple-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="text-[10px] sm:text-sm text-gray-600 font-medium flex items-center justify-center gap-0.5 sm:gap-1">
              <span>🎯</span>
              <span>Loại dự án</span>
            </div>
          </div>
        </div>

        <div className="relative group bg-gradient-to-br from-orange-50 to-yellow-50 p-4 sm:p-6 rounded-2xl text-center border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-xl cursor-pointer overflow-hidden">
          <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 text-6xl sm:text-8xl opacity-5 group-hover:opacity-10 transition-opacity">
            🔥
          </div>
          <div className="relative z-10">
            <div className="text-3xl sm:text-5xl font-bold text-orange-600 mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
              ∞
            </div>
            <div className="text-[10px] sm:text-sm text-gray-600 font-medium flex items-center justify-center gap-0.5 sm:gap-1">
              <span>🔥</span>
              <span>Đam mê học hỏi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Showcase */}
      <div
        ref={techStackRef}
        className={`mt-12 sm:mt-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-blue-200 transition-all duration-1000 ${
          techStackVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2 sm:gap-3">
            <span>🛠️</span>
            <span>Tech Stack</span>
            <span>🚀</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-base">
            Các công nghệ tôi sử dụng trong các dự án
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {[
            { name: "React", icon: "⚛️", color: "blue" },
            { name: "Node.js", icon: "💚", color: "green" },
            { name: "PostgreSQL", icon: "🐘", color: "indigo" },
            { name: "Java", icon: "☕", color: "red" },
            { name: "Tailwind CSS", icon: "🎨", color: "cyan" },
            { name: "Unity", icon: "🎮", color: "gray" },
            { name: "C#", icon: "🔷", color: "purple" },
            { name: "Git", icon: "🔀", color: "orange" },
            { name: "Three.js", icon: "🎲", color: "yellow" },
          ].map((tech, idx) => (
            <div
              key={idx}
              className={`group px-3 sm:px-5 py-2 sm:py-3 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300 border-2 border-${tech.color}-200 hover:border-${tech.color}-400 hover:scale-110 cursor-pointer`}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-base sm:text-xl group-hover:scale-125 transition-transform">
                  {tech.icon}
                </span>
                <span className="font-semibold text-gray-700 group-hover:text-gray-900 text-xs sm:text-base">
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
