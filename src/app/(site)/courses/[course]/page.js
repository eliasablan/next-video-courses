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
    <div className="grid grid-cols-12 lg:gap-12">
      {/* Info */}
      <div className="col-span-12 lg:col-span-6 p-4">
        <h1 className="text-3xl font-semibold mb-4">
          {capitalizeFirstLetter(course.title)}
        </h1>
        {course.category && (
          <p className="mb-2">
            <span className="font-semibold">Category: </span>
            {capitalizeFirstLetter(course.category)}
          </p>
        )}
        {course.courseLevel && (
          <p className="mb-2">
            <span className="font-semibold">Nivel: </span>
            {capitalizeFirstLetter(course.courseLevel)}
          </p>
        )}
        <hr className="my-6" />
        <div className="flex flex-wrap">
          {course.price && (
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <p className="font-semibold">Price:</p>
              <p>{course.price}</p>
            </div>
          )}
          {course.discount && (
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <p className="font-semibold">Discount:</p>
              <p>{course.discount}%</p>
            </div>
          )}
          {course.user?.username && (
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <p className="font-semibold">Teacher:</p>
              <p>{course.user?.username}</p>
            </div>
          )}
        </div>
      </div>
      {/* Image */}
      <div className="relative col-span-12 lg:col-span-6 p-6 md:p-4">
        <Image
          className="rounded-lg border-4 mt-6 lg:mt-0"
          src={course.image_url}
          width={800}
          height={400}
          alt={course.image_alt}
        />
      </div>
      {/* Description */}
      <div className="col-span-12 lg:col-span-6 p-6 md:p-4">
        <h2 className="text-2xl mb-4">Description</h2>
        <PortableText value={course.content} components={{}} />
      </div>
      {/* Videos */}
      <div className="col-span-12 lg:col-span-6 p-6 md:p-4">
        <h2 className="text-2xl">Videos</h2>
        {videos ? (
          videos.map((video) => (
            <div
              className="p-4 my-4 border-4 rounded-md hover:scale-105 transition"
              key={video._id}
            >
              <Link
                href={`/videos/${video.slug}`}
                className="text-lg font-semibold hover:opacity-75"
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
