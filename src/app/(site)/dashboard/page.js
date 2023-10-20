import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      <h1 className="text-2xl mb-6">This is your Dashboard</h1>
    </>
  );
};

export default Dashboard;
