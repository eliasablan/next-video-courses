import { createClient, groq } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  title: 'Video Courses App',
  apiVersion: '2023-09-17',
});

const getCourses = async () => {
  return client.fetch(
    groq`*[_type=="course"]{
      // ...,
      _id,
      _createdAt,
      title,
      "slug":slug.current,
      description,
      courseLevel,
      price,
      discount,
      user->{
        username,
        role
      },
      "image_crop": image.crop,
      "image_url": image.asset->url,
      "image_alt": image.alt,
      category,
      tags,
    }`
  );
};

const getVideos = async () => {
  return client.fetch(
    groq`*[_type=="video"]{
      // ...,
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "category": course->category,
      description,
      duration,
      "course": course->title,
      "course_price": course->price,
      "course_level": course->courseLevel,
      "course_thumbnail": course->image.asset->url,
      "teacher": course->user->username,
      "thumbnail_url": thumbnail.asset->url,
      "file": file.asset->url,
    }`
  );
};

export { getCourses, getVideos };
