import { Show } from '../data/apiRequest';

const truncateText = (text: string, limit: number) => {
  return text.length > limit ? text.slice(0, limit) + '...' : text;
};

export default function ShowCard({ show }: Show) {
  return (
    <div key={show.id} className=' bg-white rounded-lg'>
      {!show.image ? (
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKOdHsVBWDoUWUyzC4WJFuffKTTc7kiVXVNwfSrrVl4_f7g4he2BzyqhfetHh-BZRD5NQ&usqp=CAU'
          alt='placeholder'
          className='w-full rounded-t-lg h-52 object-cover'
        />
      ) : (
        <img
          src={show.image?.medium}
          alt={show.name}
          className=' w-full rounded-t-lg h-52 object-cover'
        />
      )}
      <p className=' font-bold text-lg mt-2 px-4'>{show.name}</p>
      <p className=' text-sm text-gray-500 mt-2 px-4'>
        Rating: {show.rating?.average}
      </p>
      <p
        className=' text-sm text-gray-500 mt-2 p-4'
        dangerouslySetInnerHTML={{ __html: truncateText(show.summary, 100) }}
      ></p>
    </div>
  );
}
