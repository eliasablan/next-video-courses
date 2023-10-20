import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PortableText } from '@portabletext/react';

import {
  getCourse,
  getVideosByCourse,
} from '../../../../../sanity/sanity-utils';
import { capitalizeFirstLetter } from '@/lib/utils';
import Link from 'next/link';

const Course = async ({ params }) => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }
  const slug = params.course;
  const course = await getCourse(slug);
  const videos = await getVideosByCourse(course._id);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Info */}
      <div className="col-span-12 lg:col-span-6 p-8 md:p-4">
        <h1 className="text-2xl font-semibold mb-2">
          {capitalizeFirstLetter(course.title)}
        </h1>
        {course.category && (
          <p>
            <span className="font-semibold">Category: </span>
            {capitalizeFirstLetter(course.category)}
          </p>
        )}
        {course.courseLevel && (
          <p>
            <span className="font-semibold">Nivel: </span>
            {capitalizeFirstLetter(course.courseLevel)}
          </p>
        )}
        <hr className="my-5" />
        <div className="flex justify-between gap-3">
          {course.price && (
            <div className="col-span-2">
              <p className="font-semibold">Price:</p>
              <p>{course.price}</p>
            </div>
          )}
          {course.discount && (
            <div className="col-span-2">
              <p className="font-semibold">Discount:</p>
              <p>{course.discount}%</p>
            </div>
          )}
          {course.user?.username && (
            <div className="col-span-2">
              <p className="font-semibold">Teacher:</p>
              <p>{course.user?.username}</p>
            </div>
          )}
        </div>
      </div>
      {/* Image */}
      <div className="relative col-span-12 lg:col-span-6 p-8 md:p-4">
        <Image
          className="rounded-lg border-2 mt-4 lg:mt-0"
          src={course.image_url}
          width={1024}
          height={512}
          alt={course.image_alt}
        />
      </div>
      {/* Description */}
      <div className="col-span-12 lg:col-span-6 p-8 md:p-4">
        <h2 className="text-xl mb-4">Description</h2>
        <PortableText value={course.content} components={{}} />
      </div>
      {/* Videos */}
      <div className="col-span-12 lg:col-span-6 p-8 md:p-4">
        <h2 className="text-xl">Videos</h2>
        {videos ? (
          videos.map((video) => (
            <div
              className="p-6 my-4 border-2 rounded-md hover:scale-105 hover:border-destructive transition"
              key={video._id}
            >
              <Link
                href={`/videos/${video.slug}`}
                className="text-xl font-semibold"
              >
                {video.title}
              </Link>
              {video.duration && (
                <p className="font-thin">
                  {Math.floor(video.duration / 60)}:{video.duration % 60}{' '}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No courses uploaded.</p>
        )}
      </div>
    </div>
  );
};

export default Course;
