import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Player = ({ playlist }) => {
  const [searchParams] = useSearchParams();
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    setVideoId(searchParams.get("q"));
  }, [searchParams]);

  return (
    <div className="player-wrapper">
      <div className="player">
        {videoId ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="How to Use the YouTube API in React to Add a Playlist to a Next.js App"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${playlist?.id?.videoId}`}
            title="How to Use the YouTube API in React to Add a Playlist to a Next.js App"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div>
        <h1>{playlist?.snippet?.title}</h1>
        <p>{playlist?.snippet?.description}</p>
      </div>
    </div>
  );
};

export default Player;

Player.propTypes = {
  playlist: PropTypes.object,
};
