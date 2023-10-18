import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { getVideos } from '../../../../sanity/sanity-utils';

const Videos = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  const videos = await getVideos();

  return (
    <>
      <h1 className="text-2xl mb-6">Videos</h1>
      {videos ? (
        videos?.map((video) => (
          <div className="p-3 my-3 border-2" key={video._id}>
            <h3 className="text-xl font-semibold">{video.title}</h3>
            {video.category && <p>Category: {video.category}</p>}
            {/* <video controls style={{ width: '500px', height: 'auto' }}>
              <source src={video.file} />
            </video> */}
          </div>
        ))
      ) : (
        <p>No courses uploaded.</p>
      )}
    </>
  );
};

export default Videos;
