import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  return (
    <main>
      {session?.user?.name ? (
        <h1>Welcome, {session.user.name}</h1>
      ) : (
        <h1>Sign in for more</h1>
      )}
    </main>
  );
}
