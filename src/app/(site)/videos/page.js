import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

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
          <div
            className="p-3 my-3 border-2 hover:scale-105 hover: transition"
            key={video._id}
          >
            <Link
              href={`/videos/${video.slug}`}
              className="text-xl font-semibold"
            >
              {video.title}
            </Link>
            {video.course && (
              <p className="font-medium">
                {video.course}{' '}
                {video.category && (
                  <span className="italic font-thin">
                    {video.category}
                  </span>
                )}
              </p>
            )}
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
