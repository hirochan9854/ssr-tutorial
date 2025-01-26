import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-8 text-center">
        <div className="relative mb-6">
          <img
            src="images/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500"
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">伊藤滉</h1>
        <h2 className="text-xl text-gray-600 mb-4">専門学生 / Webエンジニア</h2>
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://github.com/hirochan9854"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-blue-600">スキル</h3>
            <ul className="text-xs text-gray-700 text-left">
              <li>• Next.js</li>
              <li>• React</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-600">趣味</h3>
            <ul className="text-xs text-gray-700 text-left">
              <li>• 音楽</li>
              <li>• 映画</li>
              <li>• 温泉・サウナ</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-purple-600">出身</h3>
            <ul className="text-xs text-gray-700">
              <li>愛知県</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
