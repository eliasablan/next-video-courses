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
      "image_url": image.asset->url,
      "image_alt": image.alt,
      category,
      tags,
      courseLevel,
      price,
      discount,
    }`
  );
};

const getVideos = async () => {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    title: 'Video Courses App',
    apiVersion: '2023-09-17',
  });

  return client.fetch(
    groq`*[_type=="video"]{
      ...,
      course->{
        ...
      },
      "file": file.asset->url,
    }`
  );
};

export { getCourses, getVideos };
