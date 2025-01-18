import React from 'react';

const VideoSnippets = () => {
  // List of video URLs or IDs
  const videoList = [
    { id: 1, title: 'iPhone Features', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID1' },
    { id: 2, title: 'iPhone Unboxing', url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID2' },
    // Add more video objects as needed
  ];

  return (
    <div className="video-snippets">
      <h2>Video Snippets</h2>
      <div className="video-container">
        {videoList.map(video => (
          <div key={video.id} className="video-item">
            <h3>{video.title}</h3>
            <div className="iframe-container">
              <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSnippets;