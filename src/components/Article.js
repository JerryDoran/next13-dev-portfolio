import Link from 'next/link';
import { getFormattedDate } from '@/lib/getFormattedDate';

export default function Article({ post }) {
  const { id, title, date, tags } = post;
  const formattedDate = getFormattedDate(date);
  console.log(post);
  return (
    <li className='border bg-slate-100 border-slate-200 p-4 rounded-md shadow-md dark:bg-slate-800'>
      <p className='text-xs text-slate-500 dark:text-slate-300'>
        {formattedDate}
      </p>
      <Link href={`/posts/${post.id}`}>
        <h2 className='font-semibold text-violet-600 mb-4 hover:underline'>
          {post.title}
        </h2>
      </Link>
      {post.tags.map((tag, index) => (
        <p key={index} className='mt-2 text-slate-500'>
          {tag}
        </p>
      ))}
    </li>
  );
}
