import React, { useState, useRef, useEffect } from "react";
import { songs } from "../data/songs";

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  // Lấy thông tin bài nhạc hiện tại
  const songInfo = songs[currentSong];

  // Load bài hát khi currentSong thay đổi
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.src = songInfo.path;
      audio.load();
      setCurrentTime(0);

      // Nếu đang phát thì tự động phát bài mới
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) =>
            console.log("Auto-play prevented:", error)
          );
        }
      }
    }
  }, [currentSong]);

  // Cài đặt volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Tự động chuyển bài khi kết thúc
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      handleNext();
    };

    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, [currentSong]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Playback failed:", error));
    }
  };

  const handleNext = () => {
    const nextSong = currentSong >= songs.length - 1 ? 0 : currentSong + 1;
    setCurrentSong(nextSong);
  };

  const handlePrev = () => {
    const prevSong = currentSong <= 0 ? songs.length - 1 : currentSong - 1;
    setCurrentSong(prevSong);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 group/player"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative backdrop-blur-lg rounded-full shadow-xl transition-all duration-700 ease-out flex items-center ${
          isHovered
            ? "bg-gradient-to-br from-black/90 to-gray-900/90 border border-white/20 px-3 sm:px-6 py-1.5 shadow-2xl shadow-blue-500/30 scale-105"
            : "p-0 hover:scale-110"
        }`}
      >
        {/* White Circle Background - Only when collapsed */}
        {!isHovered && (
          <div className="absolute inset-0 rounded-full bg-white/90 shadow-2xl"></div>
        )}

        {/* Animated Background Pulse */}
        {isPlaying && !isHovered && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 animate-pulse"></div>
        )}

        {/* Outer Ring Animation when playing */}
        {isPlaying && !isHovered && (
          <div className="absolute -inset-2 rounded-full border-4 border-blue-400/40 animate-ping"></div>
        )}

        {/* Play/Pause Button - Always visible */}
        <button
          onClick={togglePlay}
          className={`relative rounded-full flex items-center justify-center active:scale-95 transition-all duration-300 shrink-0 ${
            isHovered
              ? "w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
              : "w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl shadow-blue-500/50 m-2"
          }`}
        >
          {isPlaying ? (
            <svg
              className={`text-white drop-shadow-lg ${
                isHovered ? "w-4 h-4 sm:w-5 sm:h-5" : "w-5 h-5 animate-pulse"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg
              className={`text-white ml-0.5 drop-shadow-lg ${
                isHovered ? "w-4 h-4 sm:w-5 sm:h-5" : "w-5 h-5"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Expanded Controls - Show on hover */}
        <div
          className={`flex flex-col transition-all duration-700 ease-out ${
            isHovered
              ? "max-w-[240px] sm:max-w-[400px] opacity-100 translate-x-0 ml-2 sm:ml-4"
              : "max-w-0 opacity-0 translate-x-4"
          } overflow-hidden`}
        >
          {/* Song Info */}
          <div className="flex items-center mb-2 sm:mb-3">
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs sm:text-sm font-semibold truncate">
                🎵 {songInfo.name}
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs truncate">
                {songInfo.artist}
              </div>
            </div>

            {/* Volume */}
            <div className="hidden sm:flex items-center shrink-0 ml-2">
              <svg
                className="w-4 h-4 text-white/50 shrink-0 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer transition-all duration-200"
                style={{
                  background: `linear-gradient(to right, #3b82f6 ${
                    volume * 100
                  }%, rgba(255,255,255,0.1) ${volume * 100}%)`,
                }}
              />
            </div>
          </div>

          {/* Controls Row */}
          <div className="flex items-center">
            {/* Skip Buttons */}
            <div className="flex items-center shrink-0">
              <button
                onClick={handlePrev}
                className="text-white/50 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 p-1 hover:bg-white/10 rounded-full mr-0.5 sm:mr-1"
                title="Bài trước"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="text-white/50 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 p-1 hover:bg-white/10 rounded-full"
                title="Bài tiếp"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center ml-2 sm:ml-3 flex-1 min-w-0">
              <span className="text-white/70 text-[9px] sm:text-[10px] font-mono shrink-0 tabular-nums mr-1 sm:mr-2">
                {formatTime(currentTime)}
              </span>
              <div className="relative flex-1">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 sm:h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer transition-all duration-200"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 ${
                      (currentTime / duration) * 100 || 0
                    }%, rgba(255,255,255,0.1) ${
                      (currentTime / duration) * 100 || 0
                    }%)`,
                  }}
                />
              </div>
              <span className="text-white/70 text-[9px] sm:text-[10px] font-mono shrink-0 tabular-nums ml-1 sm:ml-2">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        preload="metadata"
      />
    </div>
  );
};

export default MusicPlayer;
