import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Player from './components/Player';
import SearchBar from './components/SearchBar';
import Thumbnails from './components/Thumbnails';

function App() {
  const [playlist, setPlaylist] = useState([])
  const [searchVideo, setSearchVideo] = useState('')
  const navigate = useNavigate()

  const loadResources = async () => {
    // The key supposed to be in .env, but in this case I would like to embed directly in the fetch url
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyBirl1Z3xggefBnd3ZSD3SgDcqTYNtC87U&part=snippet&type=video&maxResults=10&q=${searchVideo}`)
    const data = await response.json()
    setPlaylist(data.items)
  }

  useEffect(() => {
    loadResources()
  }, [])

  const handleSearch = () => {
    loadResources()
    setSearchVideo('')
    navigate('/')
  }
  
  return (
    <div className='wrapper'>
      <SearchBar setSearchVideo={setSearchVideo} submitQuery={handleSearch} searchVideo={searchVideo} />
      <div className='player-thumbnail-wrapper'>
        <Player playlist={playlist?.slice(0, 1)?.[0]}/>
        <Thumbnails thumbnails={playlist?.slice(1, playlist.length)} />
      </div>
    </div>
  )
}

export default App
