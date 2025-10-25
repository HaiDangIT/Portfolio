import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../constants";
import { javascript, react } from "../assets/icons";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { name: "All", icon: "📚", color: "blue" },
    { name: "Java", icon: "☕", color: "red" },
    { name: "JavaScript", icon: "⚡", color: "yellow" },
    { name: "Comparison", icon: "⚖️", color: "purple" },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter((post) => post.featured);

  if (selectedPost) {
    return (
      <section className="max-container">
        <button
          onClick={() => setSelectedPost(null)}
          className="mb-8 flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 rounded-lg transition-all duration-300 font-medium"
        >
          <span className="text-xl">←</span>
          <span>Quay lại danh sách</span>
        </button>

        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-gray-100">
          {/* Header */}
          <div className="border-b-2 border-gray-200 pb-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">
                {selectedPost.category === "Java" && "☕"}
                {selectedPost.category === "JavaScript" && "⚡"}
                {selectedPost.category === "Comparison" && "⚖️"}
              </span>
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {selectedPost.category}
              </span>
              {selectedPost.featured && (
                <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
                  ⭐ Nổi bật
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {selectedPost.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
              <span className="flex items-center gap-1">
                <span className="text-lg">👤</span>
                <span>{selectedPost.author}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="text-lg">📅</span>
                <span>{selectedPost.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span className="text-lg">⏱️</span>
                <span>{selectedPost.readTime}</span>
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: selectedPost.content
                  .split("\n")
                  .map((line) => {
                    // Headers
                    if (line.startsWith("### ")) {
                      return `<h3 class="text-2xl font-bold text-gray-900 mt-8 mb-4">${line.replace(
                        "### ",
                        ""
                      )}</h3>`;
                    }
                    if (line.startsWith("## ")) {
                      return `<h2 class="text-3xl font-bold text-gray-900 mt-10 mb-6">${line.replace(
                        "## ",
                        ""
                      )}</h2>`;
                    }
                    // Bold text
                    if (line.startsWith("**") && line.endsWith("**")) {
                      return `<p class="font-bold text-gray-900 mt-6 mb-3">${line.replace(
                        /\*\*/g,
                        ""
                      )}</p>`;
                    }
                    // Lists
                    if (line.match(/^\d+\./)) {
                      return `<li class="ml-6 my-2">${line.replace(
                        /^\d+\.\s*/,
                        ""
                      )}</li>`;
                    }
                    if (line.startsWith("- ")) {
                      return `<li class="ml-6 my-2">${line.replace(
                        "- ",
                        ""
                      )}</li>`;
                    }
                    // Code blocks
                    if (line.startsWith("```")) {
                      return line.includes("java")
                        ? '<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4"><code>'
                        : line.includes("javascript")
                        ? '<pre class="bg-gray-900 text-yellow-300 p-4 rounded-lg overflow-x-auto my-4"><code>'
                        : line === "```"
                        ? "</code></pre>"
                        : "";
                    }
                    // Regular paragraphs
                    if (line.trim() && !line.startsWith("|")) {
                      return `<p class="my-4 leading-relaxed">${line}</p>`;
                    }
                    return line;
                  })
                  .join(""),
              }}
            />
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t-2 border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📢</span> Chia sẻ bài viết
            </h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                📘 Facebook
              </button>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                🐦 Twitter
              </button>
              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                💼 LinkedIn
              </button>
            </div>
          </div>
        </article>
      </section>
    );
  }

  return (
    <section className="max-container">
      {/* Header with Animation */}
      <div className="relative">
        <h1 className="head-text">
          Blog Công Nghệ{" "}
          <span className="blue-gradient_text font-semibold drop-shadow animate-pulse">
            📝
          </span>
        </h1>
        <div className="absolute -top-10 right-0 text-8xl opacity-5 pointer-events-none">
          💡
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-lg">
          Chia sẻ kiến thức về lập trình, công nghệ và kinh nghiệm học tập. Từ
          Java, JavaScript và C# đến các so sánh chuyên sâu giữa các công nghệ.
        </p>
      </div>

      {/* Category Filter with Icons */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform ${
              selectedCategory === category.name
                ? `bg-gradient-to-r from-${category.color}-600 to-${category.color}-500 text-white shadow-xl scale-110`
                : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg hover:scale-105"
            } border-2 ${
              selectedCategory === category.name
                ? "border-transparent"
                : `border-gray-200 hover:border-${category.color}-300`
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-xl">{category.icon}</span>
              <span>{category.name}</span>
              {category.name !== "All" && (
                <span
                  className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                    selectedCategory === category.name
                      ? "bg-white/20 text-white"
                      : `bg-${category.color}-100 text-${category.color}-600 group-hover:bg-${category.color}-200`
                  }`}
                >
                  {blogPosts.filter((p) => p.category === category.name).length}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Blog Count Display */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border-2 border-blue-200">
          <span className="text-2xl">📖</span>
          <span className="text-gray-700 font-medium">
            Hiển thị{" "}
            <span className="text-blue-600 font-bold">
              {filteredPosts.length}
            </span>{" "}
            bài viết
            {selectedCategory !== "All" && (
              <span className="text-gray-500">
                {" "}
                về{" "}
                <span className="text-purple-600 font-semibold">
                  {selectedCategory}
                </span>
              </span>
            )}
          </span>
        </div>
      </div>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="text-4xl">⭐</span>
            <span>Bài Viết Nổi Bật</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group cursor-pointer bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 transform hover:-translate-y-2"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 z-10 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <span>⭐</span>
                  <span>Featured</span>
                </div>

                <div className="p-6 relative">
                  {/* Background Icon */}
                  <div className="absolute top-0 right-0 text-8xl opacity-5">
                    {post.category === "Java" && "☕"}
                    {post.category === "JavaScript" && "⚡"}
                    {post.category === "Comparison" && "⚖️"}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">
                        {post.category === "Java" && "☕"}
                        {post.category === "JavaScript" && "⚡"}
                        {post.category === "Comparison" && "⚖️"}
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-blue-200">
                      <span className="flex items-center gap-1">
                        <span>📅</span> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>⏱️</span> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Posts Grid */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
          <span className="text-3xl">📚</span>
          <span>
            {selectedCategory === "All"
              ? "Tất Cả Bài Viết"
              : `Bài Viết ${selectedCategory}`}
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className={`group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border-2 hover:border-blue-300 transform hover:-translate-y-1 ${
                post.category === "Java"
                  ? "border-red-200"
                  : post.category === "JavaScript"
                  ? "border-yellow-200"
                  : "border-purple-200"
              }`}
            >
              {/* Category Header */}
              <div
                className={`h-2 ${
                  post.category === "Java"
                    ? "bg-gradient-to-r from-red-500 to-orange-500"
                    : post.category === "JavaScript"
                    ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                    : "bg-gradient-to-r from-purple-500 to-pink-500"
                }`}
              ></div>

              <div className="p-6 relative">
                {/* Background Icon */}
                <div className="absolute top-0 right-0 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {post.category === "Java" && "☕"}
                  {post.category === "JavaScript" && "⚡"}
                  {post.category === "Comparison" && "⚖️"}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">
                        {post.category === "Java" && "☕"}
                        {post.category === "JavaScript" && "⚡"}
                        {post.category === "Comparison" && "⚖️"}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          post.category === "Java"
                            ? "bg-red-100 text-red-700"
                            : post.category === "JavaScript"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        {post.category}
                      </span>
                    </div>
                    {post.featured && <span className="text-xl">⭐</span>}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <span className="flex items-center gap-1">
                      <span>📅</span> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>⏱️</span> {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section - Balanced */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
          <span className="text-3xl">📊</span>
          <span>Thống Kê Blog</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Java Posts */}
          <div className="relative group bg-gradient-to-br from-red-50 to-orange-50 w-52 h-52 rounded-full text-center border-4 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden flex items-center justify-center hover:scale-105">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity flex items-center justify-center">
              <img
                src={javascript}
                alt="Java"
                className="w-32 h-32 opacity-30"
              />
            </div>
            <div className="relative z-10">
              <img
                src={javascript}
                alt="Java"
                className="w-20 h-20 mb-2 mx-auto group-hover:scale-125 transition-transform"
              />
              <div className="text-6xl font-bold text-red-600 mb-1 group-hover:scale-110 transition-transform">
                {blogPosts.filter((p) => p.category === "Java").length}
              </div>
              <div className="text-xs text-gray-600 font-semibold">
                Bài viết Java
              </div>
            </div>
          </div>

          {/* JavaScript Posts */}
          <div className="relative group bg-gradient-to-br from-yellow-50 to-orange-50 w-52 h-52 rounded-full text-center border-4 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden flex items-center justify-center hover:scale-105">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity flex items-center justify-center">
              <img
                src={javascript}
                alt="JavaScript"
                className="w-32 h-32 opacity-30"
              />
            </div>
            <div className="relative z-10">
              <img
                src={javascript}
                alt="JavaScript"
                className="w-20 h-20 mb-2 mx-auto group-hover:scale-125 transition-transform"
              />
              <div className="text-6xl font-bold text-yellow-600 mb-1 group-hover:scale-110 transition-transform">
                {blogPosts.filter((p) => p.category === "JavaScript").length}
              </div>
              <div className="text-xs text-gray-600 font-semibold">
                Bài viết JavaScript
              </div>
            </div>
          </div>

          {/* Comparison Posts */}
          <div className="relative group bg-gradient-to-br from-purple-50 to-pink-50 w-52 h-52 rounded-full text-center border-4 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden flex items-center justify-center hover:scale-105">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity flex items-center justify-center">
              <img
                src={react}
                alt="Comparison"
                className="w-32 h-32 opacity-30"
              />
            </div>
            <div className="relative z-10">
              <img
                src={react}
                alt="Comparison"
                className="w-20 h-20 mb-2 mx-auto group-hover:scale-125 transition-transform"
              />
              <div className="text-6xl font-bold text-purple-600 mb-1 group-hover:scale-110 transition-transform">
                {blogPosts.filter((p) => p.category === "Comparison").length}
              </div>
              <div className="text-xs text-gray-600 font-semibold">
                Bài so sánh
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          <div className="relative group bg-gradient-to-br from-blue-50 to-cyan-50 w-52 h-52 rounded-full text-center border-4 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl cursor-pointer overflow-hidden flex items-center justify-center hover:scale-105">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity flex items-center justify-center">
              <img
                src={react}
                alt="Featured"
                className="w-32 h-32 opacity-30"
              />
            </div>
            <div className="relative z-10">
              <img
                src={react}
                alt="Featured"
                className="w-20 h-20 mb-2 mx-auto group-hover:scale-125 transition-transform"
              />
              <div className="text-6xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                {featuredPosts.length}
              </div>
              <div className="text-xs text-gray-600 font-semibold">
                Bài nổi bật
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
