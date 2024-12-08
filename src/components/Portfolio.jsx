import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of the project.",
      link: "https://yourproject.com",
    },
    {
      title: "Project 2",
      description: "Another cool project.",
      link: "https://yourproject.com",
    },
  ];

  const tweets = [
    {
      id: "1860603341010800850", // Replace with the Tweet ID you want to embed
    },
    {
      id: "1863187152932397123", // Another Tweet ID
    },
  ];

  return (
    <div className="py-10 px-4 bg-zinc-950 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-400">
        My Portfolio
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Projects Section */}

        {/* Tweets Section */}
        {tweets.map((tweet, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105"
          >
            {/* Ensure dark theme for tweets */}
            <TwitterTweetEmbed tweetId={tweet.id} options={{ theme: "dark" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
