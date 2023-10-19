import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { getCourses } from '../../../../sanity/sanity-utils';

const Classroom = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  const courses = await getCourses();

  return (
    <>
      <h1 className="text-2xl mb-6">Classroom</h1>
    </>
  );
};

export default Classroom;
