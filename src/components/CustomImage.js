import Image from 'next/image';

export default function CustomImage({ src, alt, priority }) {
  const prioritized = priority ? true : false;

  return (
    <div className='w-full h-full'>
      <Image
        className='rounded-lg mx-auto'
        priority={prioritized}
        src={src}
        alt={alt}
        width={650}
        height={650}
      />
    </div>
  );
}
