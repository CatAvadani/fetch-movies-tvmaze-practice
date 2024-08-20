interface SearchShowsProps {
  text: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // New prop for form submission
}

export default function SearchShows({
  text,
  onSearch,
  onSubmit,
}: SearchShowsProps) {
  return (
    <form
      className='flex justify-center items-center w-1/2 rounded-lg border border-gray-300 my-8'
      onSubmit={onSubmit}
    >
      <input
        type='text'
        value={text}
        onChange={onSearch}
        placeholder='Search movies, shows or people...'
        className='px-8 py-4 w-full'
      />
      <button className='bg-yellow-500 px-8 py-4 text-white text-lg'>
        Search
      </button>
    </form>
  );
}
