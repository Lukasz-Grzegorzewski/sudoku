import { useEffect, useState } from 'react';
import Matrix from './Matrix';
import { customFetchWord } from '../../api/customFetchWord';

export default function Game() {
  const [word, setWord] = useState('');

  const fetchWord = async () => {
    const result = await customFetchWord(9, 382);
    if (typeof result === 'string' && result.length > 0) {
      setWord(result);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-bold text-center pb-10 tracking-[2rem] '>
        {word}
      </h1>
      <Matrix word={word} />
    </div>
  );
}
