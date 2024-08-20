import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SearchShows from './components/SearchShows';
import ShowCard from './components/ShowCard';
import { searchShows } from './data/apiRequest';

function App() {
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputText] = useState('');

  const { data, isLoading, isError } = useQuery({
    queryKey: ['searchShows', searchText],
    queryFn: () => searchShows(searchText),
    enabled: searchText !== '',
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchText(inputText);
    setInputText('');
  };

  console.log(data);
  return (
    <div className=' bg-violet-100 min-h-screen flex flex-col justify-center items-center'>
      <p className=' text-7xl font-black text-black/30'>TVmaZe</p>
      <SearchShows
        text={inputText}
        onSearch={handleSearch}
        onSubmit={handleSubmit}
      />

      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong...</p>}

      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-10 '>
        {data?.map((show) => (
          <ShowCard key={show.show.id} show={show.show} />
        ))}
      </div>
    </div>
  );
}

export default App;
