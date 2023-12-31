import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { getCourses } from '../../../../sanity/sanity-utils';

const Courses = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  const courses = await getCourses();

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <h1 className="text-2xl mb-6 col-span-full">Courses</h1>
        {courses ? (
          courses?.map((course) => (
            <div
              className="flex flex-col justify-between col-span-12 md:col-span-4 lg:col-span-3 p-4 my-3 border-2 rounded-md hover:scale-105 transition"
              key={course._id}
            >
              <div>
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-xl font-semibold hover:opacity-75"
                >
                  {course.title}
                </Link>
                {course.category && (
                  <p className="italic mb-3">{course.category}</p>
                )}
              </div>
              {course.description && <p>{course.description}</p>}
              <Link href={`/courses/${course.slug}`}>
                <Image
                  className="mt-3 justify-center rounded-md border-2 hover:opacity-75"
                  src={course.image_url}
                  width={300}
                  height={300}
                  alt={course.image_alt}
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No courses uploaded.</p>
        )}
      </div>
    </>
  );
};

export default Courses;
