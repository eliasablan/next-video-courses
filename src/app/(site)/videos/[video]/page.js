import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { PortableText } from '@portabletext/react';

import { getVideo } from '../../../../../sanity/sanity-utils';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { capitalizeFirstLetter } from '@/lib/utils';
import { Fragment } from 'react';

const commentsData = [
  {
    _id: 1,
    date: new Date(),
    username: 'pepe',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 2,
    date: new Date(),
    username: 'usuario1',
    content:
      'Este es un comentario bastante largo que tiene mucho contenido y detalles interesantes que compartir. Puedo seguir escribiendo para hacerlo aún más largo si es necesario. Pero, por ahora, creo que ya es lo suficientemente largo.',
    parent: 1,
  },
  {
    _id: 3,
    date: new Date(),
    username: 'usuario2',
    content: 'Comentario mediano',
    parent: null,
  },
  {
    _id: 4,
    date: new Date(),
    username: 'usuario3',
    content:
      'Comentario medio-largo con información importante para compartir con todos los lectores. La longitud de este comentario es adecuada para explicar en detalle el tema en cuestión.',
    parent: null,
  },
  {
    _id: 5,
    date: new Date(),
    username: 'usuario4',
    content: 'Comentario corto',
    parent: 4,
  },
  {
    _id: 6,
    date: new Date(),
    username: 'usuario5',
    content:
      'Este comentario tiene una longitud moderada y proporciona información relevante sobre el tema. No es muy largo ni muy corto, lo que lo hace fácil de leer.',
    parent: null,
  },
  {
    _id: 7,
    date: new Date(),
    username: 'usuario6',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 8,
    date: new Date(),
    username: 'usuario7',
    content:
      'Este comentario es muy largo y detallado, proporciona una gran cantidad de información sobre el tema en cuestión. Puede llevar tiempo leerlo en su totalidad.',
    parent: 7,
  },
  {
    _id: 9,
    date: new Date(),
    username: 'usuario8',
    content:
      'Comentario mediano-largo con detalles adicionales sobre el tema. Proporciona información valiosa y es más extenso que un comentario corto.',
    parent: null,
  },
  {
    _id: 10,
    date: new Date(),
    username: 'usuario9',
    content:
      'Este comentario es de longitud moderada y ofrece información relevante. No es demasiado largo ni demasiado corto, lo que lo hace fácil de leer.',
    parent: null,
  },
  {
    _id: 11,
    date: new Date(),
    username: 'usuario10',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 12,
    date: new Date(),
    username: 'usuario11',
    content:
      'Este comentario es de longitud moderada y proporciona detalles adicionales sobre el tema. Es más extenso que un comentario corto, pero no tan largo como otros.',
    parent: 1,
  },
  {
    _id: 13,
    date: new Date(),
    username: 'usuario12',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 14,
    date: new Date(),
    username: 'usuario13',
    content:
      'Comentario medio-largo con información relevante sobre el tema. Tiene una longitud adecuada para explicar detalles importantes.',
    parent: 4,
  },
  {
    _id: 15,
    date: new Date(),
    username: 'usuario14',
    content:
      'Este comentario es de longitud moderada y proporciona información interesante. No es muy largo ni muy corto, lo que lo hace fácil de leer.',
    parent: null,
  },
  {
    _id: 16,
    date: new Date(),
    username: 'usuario15',
    content:
      'Comentario medio-largo con detalles adicionales sobre el tema. Ofrece una cantidad significativa de información sin ser excesivamente largo.',
    parent: null,
  },
  {
    _id: 17,
    date: new Date(),
    username: 'usuario16',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 18,
    date: new Date(),
    username: 'usuario17',
    content:
      'Este comentario es muy largo y proporciona una gran cantidad de detalles sobre el tema en cuestión. Puede llevar tiempo leerlo en su totalidad.',
    parent: 7,
  },
  {
    _id: 19,
    date: new Date(),
    username: 'usuario18',
    content:
      'Comentario medio-largo con información relevante. Ofrece una longitud adecuada para explicar detalles importantes.',
    parent: null,
  },
  {
    _id: 20,
    date: new Date(),
    username: 'usuario19',
    content:
      'Este comentario es de longitud moderada y proporciona información interesante. No es muy largo ni muy corto, lo que lo hace fácil de leer.',
    parent: null,
  },
  {
    _id: 21,
    date: new Date(),
    username: 'usuario20',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 22,
    date: new Date(),
    username: 'usuario21',
    content:
      'Comentario medio-largo con detalles adicionales sobre el tema. Ofrece una cantidad significativa de información sin ser excesivamente largo.',
    parent: null,
  },
  {
    _id: 23,
    date: new Date(),
    username: 'usuario22',
    content:
      'Comentario medio-largo con información relevante. Ofrece una longitud adecuada para explicar detalles importantes.',
    parent: 1,
  },
  {
    _id: 24,
    date: new Date(),
    username: 'usuario23',
    content:
      'Comentario medio-largo con detalles adicionales sobre el tema. Ofrece una cantidad significativa de información sin ser excesivamente largo.',
    parent: 4,
  },
  {
    _id: 25,
    date: new Date(),
    username: 'usuario24',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 26,
    date: new Date(),
    username: 'usuario25',
    content:
      'Este comentario es de longitud moderada y proporciona detalles adicionales sobre el tema. Es más extenso que un comentario corto, pero no tan largo como otros.',
    parent: null,
  },
  {
    _id: 27,
    date: new Date(),
    username: 'usuario26',
    content:
      'Comentario medio-largo con información relevante. Ofrece una longitud adecuada para explicar detalles importantes.',
    parent: null,
  },
  {
    _id: 28,
    date: new Date(),
    username: 'usuario27',
    content:
      'Este comentario es muy largo y proporciona una gran cantidad de detalles sobre el tema en cuestión. Puede llevar tiempo leerlo en su totalidad.',
    parent: 7,
  },
  {
    _id: 29,
    date: new Date(),
    username: 'usuario28',
    content:
      'Comentario medio-largo con detalles adicionales sobre el tema. Ofrece una cantidad significativa de información sin ser excesivamente largo.',
    parent: null,
  },
  {
    _id: 30,
    date: new Date(),
    username: 'usuario29',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 31,
    date: new Date(),
    username: 'usuario30',
    content:
      'Este comentario es de longitud moderada y proporciona detalles adicionales sobre el tema. Es más extenso que un comentario corto, pero no tan largo como otros.',
    parent: null,
  },
  {
    _id: 32,
    date: new Date(),
    username: 'usuario31',
    content: 'Comentario corto',
    parent: null,
  },
  {
    _id: 33,
    date: new Date(),
    username: 'usuario32',
    content:
      'Comentario medio-largo con información relevante. Ofrece una longitud adecuada para explicar detalles importantes.',
    parent: 1,
  },
  {
    _id: 34,
    date: new Date(),
    username: 'usuario33',
    content:
      'Comentario medio-largo con detalles adicionales sobre el tema. Ofrece una cantidad significativa de información sin ser excesivamente largo.',
    parent: 4,
  },
  {
    _id: 35,
    date: new Date(),
    username: 'usuario34',
    content: 'Comentario corto',
    parent: null,
  },
];

function getThreadedComments(data) {
  const comments = [];

  for (let comment of data) {
    if (comment.parent) {
      const index = comments.findIndex((i) => i._id === comment.parent);
      comments[index].responses.push(comment);
    } else {
      comments.push({ ...comment, responses: [] });
    }
  }

  return comments;
}

const Video = async ({ params }) => {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect('/api/auth/signin');
  }
  const slug = params.video;
  const video = await getVideo(slug);
  const comments = getThreadedComments(commentsData);

  return (
    <div className="grid grid-cols-12 gap-x-6">
      {/* Seccion de video y contenito */}
      <div className="col-span-12 h-min mb-6">
        <video controls className="col-span-full">
          <source src={video.file} />
        </video>
      </div>
      <div className="col-span-12 md:col-span-7">
        <h1 className="text-3xl font-medium mb-2">
          {capitalizeFirstLetter(video.title)}
        </h1>
        <h2 className="mb-2">
          <Link
            href={`/courses/${video.course_slug}`}
            className="text-l hover:opacity-50"
          >
            {video.course}
          </Link>
        </h2>
        <div className="my-6">
          <PortableText value={video.content} components={{}} />
        </div>
      </div>
      <div className="col-span-12 md:col-span-5">
        {/* Seccion de Comentarios */}
        <div className="col-span-12 md:col-span-4">
          <h3 className="col-span-full text-xl mb-5">Comentarios</h3>
          <Separator className="col-span-full" />
          {comments.map((comment) => (
            <Fragment key={comment._id}>
              <div className="grid grid-cols-10 my-3">
                <Avatar className="col-span-1 md:col-span-2 left-4 md:left-2">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="col-span-8 ml-2">
                  <p className="text-md font-medium">{comment.username}</p>
                  <p className="text-sm text-muted-foreground">
                    {comment.content}
                  </p>
                  <p className="text-xs font-light mt-2">Reply</p>
                </div>
              </div>
              <Separator />
              {comment.responses &&
                comment.responses.map((response) => (
                  <Fragment key={response._id}>
                    <div className="grid grid-cols-10 my-3">
                      <div className="col-span-1 bg-accent"></div>
                      <Avatar className="col-span-1 md:col-span-2 left-4 md:left-2">
                        <AvatarImage src="https://github.com/shaadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="col-span-6 ml-2">
                        <p className="text-md font-medium">
                          {response.username}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {response.content}
                        </p>
                      </div>
                    </div>
                    <Separator />
                  </Fragment>
                ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
