import { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Nav() {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${inputValue}`);
    // setInputValue('');
  };

  useEffect(() => setInputValue(keyword || ''), [keyword]);

  return (
    <>
      <header className=' w-full flex p-4 mb-4 text-2xl border-b border-zinc-600'>
        <Link to='/' className=' flex items-center'>
          <BsYoutube className='text-4xl text-brand' />
          <h1 className=' font-bold ml-2 text-3xl'>TYTUBE</h1>
        </Link>
        <form onSubmit={onSubmit} className='w-full flex justify-center'>
          <input
            type='text'
            value={inputValue}
            placeholder='Search'
            onChange={onChange}
            className='w-7/12 p-2 outline-none bg-black text-gray-50'
          />
          <button className='bg-zinc-600 px-4'>
            <BsSearch />
          </button>
        </form>
      </header>
    </>
  );
}
