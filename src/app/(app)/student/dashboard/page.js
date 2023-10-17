import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

import { getCourses } from '../../../../../sanity/sanity-utils';

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  const courses = await getCourses();
  console.log('courses', courses);

  return (
    <>
      <h1 className="text-2xl mb-6">Dashboard</h1>
      <h2 className="text-xl">Courses</h2>
      {courses ? (
        courses?.map((course) => (
          <div className="p-3 my-3 border-2" key={course._id}>
            <p>{course._id}</p>
            <p>{course.title}</p>
            <p>{course.slug}</p>
            <p>{course.category}</p>
          </div>
        ))
      ) : (
        <p>No courses uploaded.</p>
      )}
    </>
  );
};

export default Dashboard;
