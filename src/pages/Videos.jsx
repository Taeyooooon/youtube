import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  return (
    <>
      <div>{keyword}Videos</div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}