import Image from 'next/image';
import {
  getCourse,
  getVideosByCourse,
} from '../../../../../sanity/sanity-utils';
import { capitalizeFirstLetter } from '@/lib/utils';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

const Course = async ({ params }) => {
  const slug = params.course;
  const course = await getCourse(slug);
  const videos = await getVideosByCourse(course._id);

  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 lg:col-span-6">
        <h1 className="text-2xl font-semibold mb-3">
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
      <div className="relative col-span-12 lg:col-span-6">
        <Image
          className="rounded-full border-2 mt-4 lg:mt-0"
          src={course.image_url}
          width={1024}
          height={512}
          alt={course.image_alt}
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-xl mb-3">Description</h2>
        <PortableText value={course.content} components={{}} />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <h2 className="text-xl">Videos</h2>
        {videos ? (
          videos.map((video) => (
            <div
              className="p-3 my-3 border-2 rounded-md hover:scale-105 hover:border-destructive transition"
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
      </div>
    </div>
  );
};

export default Course;
