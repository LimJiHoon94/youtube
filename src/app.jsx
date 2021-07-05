import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]); 

  useEffect(()=>{
    //페이지 로딩 시 api로 현재 인기 동영상 리스트를 받아온다.
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCj7thOuRfvBcSZsFv-7lCMOgtD1xbGKco&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCj7thOuRfvBcSZsFv-7lCMOgtD1xbGKco", requestOptions)
      //text에서 json으로 변경
      .then(response => response.json())
      //video에 저장한다. 
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));

  },[]);

  return (
   <VideoList videos={videos} />
  );
}

export default App;
