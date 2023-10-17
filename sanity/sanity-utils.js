import { createClient, groq } from 'next-sanity';

const getCourses = async () => {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    title: 'Video Courses App',
    apiVersion: '2023-09-17',
  });

  return client.fetch(
    groq`*[_type=="course"]{
      // ...,
      _id,
      _createdAt,
      title,
        "slug":slug.current,
      description,
      url,
      content,
      "image": image.asset->url,
      category,
      tags,
      courseLevel,
      price,
      discount,
    }`
  );
};

export { getCourses };
