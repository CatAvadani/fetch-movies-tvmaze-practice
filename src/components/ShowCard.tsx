import { Show } from '../data/apiRequest';

export default function ShowCard({ show }: Show) {
  return (
    <div key={show.id} className=' bg-white rounded-lg'>
      <img
        src={show.image?.medium}
        alt={show.name}
        className=' w-full rounded-t-lg h-52 object-cover'
      />
      <p className=' font-bold text-lg mt-2 px-4'>{show.name}</p>
      <p className=' text-sm text-gray-500 mt-2 px-4'>
        Rating: {show.rating?.average}
      </p>
      <p
        className=' text-sm text-gray-500 mt-2 p-4'
        dangerouslySetInnerHTML={{ __html: show.summary }}
      ></p>
    </div>
  );
}
