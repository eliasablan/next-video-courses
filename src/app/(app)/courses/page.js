import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';

import { getCourses } from '../../../../sanity/sanity-utils';

const Courses = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  const courses = await getCourses();
  console.log('courses', courses[0]);

  return (
    <>
      <h1 className="text-2xl mb-6">Courses</h1>
      {courses ? (
        courses?.map((course) => (
          <div className="p-3 my-3 border-2" key={course._id}>
            <h3 className="text-xl font-semibold">{course.title}</h3>
            {course.category && <p>Category: {course.category}</p>}
            {course.description && (
              <p>Description: {course.description}</p>
            )}
            <Image
              className="mt-3"
              src={course.image_url}
              width={300}
              height={300}
              alt={course.image_alt}
            />
          </div>
        ))
      ) : (
        <p>No courses uploaded.</p>
      )}
    </>
  );
};

export default Courses;
