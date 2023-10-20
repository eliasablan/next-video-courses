import Image from 'next/image';
import { getVideo } from '../../../../../sanity/sanity-utils';
import { capitalizeFirstLetter } from '@/lib/utils';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

const Video = async ({ params }) => {
  const slug = params.video;
  const video = await getVideo(slug);
  console.log('video', video);

  return (
    <div className="grid grid-cols-12">
      {/* Seccion de video y contenito */}
      <div className="col-span-8 grid grid-cols-12">
        <h1 className="text-2xl font-medium mb-2 col-span-full">
          {video.title}
        </h1>
        <h2 className="mb-2 col-span-full">
          <Link
            href={`/courses/${video.course_slug}`}
            className="text-l hover:text-destructive"
          >
            Curso de Programacion
          </Link>
        </h2>
        <video controls className="col-span-full">
          <source src={video.file} />
        </video>
        <div className="col-span-full">
          <PortableText value={video.content} components={{}} />
        </div>
      </div>
      {/* Seccion de Comentarios */}
      <div className="col-span-4">
        <h3 className="text-xl">Comentarios</h3>
      </div>
    </div>
  );
};

export default Video;
