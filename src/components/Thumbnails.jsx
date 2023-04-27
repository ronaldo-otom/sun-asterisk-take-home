import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const Thumbnails = ({ thumbnails }) => {
  const navigate = useNavigate()
  return (
    <div className="thumbnails">
      <div className="thumbnails-wrapper">
        {thumbnails?.map((thumbnail) => {
          return (
            <div className="thumbnail-view" key={thumbnail.etag} onClick={() => navigate(`/watch?q=${thumbnail?.id?.videoId}`)}>
              <div className="thumbnail-player">
                <img src={thumbnail?.snippet?.thumbnails?.high?.url} width={'100%'} height="100%" />
              </div>
              <div className="thumbnail-details">
                <p><strong>{thumbnail?.snippet?.title}</strong></p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Thumbnails;

Thumbnails.propTypes = {
  thumbnails: PropTypes.array,
};
