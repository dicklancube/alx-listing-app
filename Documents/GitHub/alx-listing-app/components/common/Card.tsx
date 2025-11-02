import Image from 'next/image';
import type { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, imageSrc = '/assets/placeholder.jpg', children }) => {
  return (
    <div className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow'>
      <div className='relative h-48 w-full'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
      <div className='p-4'>
        <h3 className='mb-2 text-lg font-semibold'>{title}</h3>
        <div className='text-sm text-gray-600'>{children}</div>
      </div>
    </div>
  );
};

export default Card;

