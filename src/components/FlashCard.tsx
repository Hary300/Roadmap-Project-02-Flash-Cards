import { useEffect, useRef, useState } from 'react';
import { questions } from './question';

const smallestNumber = 1;
const biggestNumber = questions.length;

export default function FlashCard() {
  const [number, setNumber] = useState<number>(1);
  const [barWidth, setBarWidth] = useState(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function getWidth() {
      if (!barRef.current) return;
      const width = barRef.current?.clientWidth;

      setBarWidth(width);
    }
    getWidth();
    window.addEventListener('resize', getWidth);

    return () => {
      window.removeEventListener('resize', getWidth);
    };
  }, []);

  function handlePrevClick() {
    if (number <= smallestNumber) return;
    setNumber((prev) => prev - 1);
    setShowAnswer(false);
  }

  function handleNextClick() {
    if (number >= biggestNumber) return;
    setNumber((prev) => prev + 1);
    setShowAnswer(false);
  }

  const percent = (number / biggestNumber) * 100;
  const width = (barWidth * percent) / 100;

  return (
    <div className='font-mono  flex flex-col max-w-100 m-auto pt-10 gap-1'>
      <h1 className='font-bold text-2xl'>Javascript Flash Card</h1>
      <div className='relative flex items-center border border-black rounded-md p-1'>
        <p className='absolute right-1 z-10'>
          {number} of {biggestNumber}
        </p>
        <div ref={barRef} className='w-full'>
          <div id='bar' className='relative flex gap-1 items-center '>
            <div
              className={`h-8 bg-[#BFBFBF] rounded-sm transition-all duration-100`}
              style={{ width: `${width}px` }}
            ></div>
            <div className='absolute left-1'>{`${percent.toFixed(0)}%`}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full m-auto rounded-md border border-black p-1 gap-1'>
        <div className='relative min-h-50 flex flex-col justify-center items-center bg-[#F5F5F5]'>
          <p
            className={`font-bold absolute transition-opacity duration-200 text-center p-4 ${showAnswer ? 'opacity-0 pointer-events-none invisible' : 'opacity-100'}`}
          >
            {questions[number - 1].question}
          </p>
          <p
            className={`transition-opacity duration-200 text-center p-4 ${showAnswer ? 'opacity-100' : 'opacity-0 pointer-events-none invisible'}`}
          >
            {questions[number - 1].answer}
          </p>
        </div>
        <div className='flex justify-between bg-[#F5F5F5] p-1 rounded-md'>
          <button className='cursor-pointer' onClick={handlePrevClick}>
            &lt; Previous
          </button>
          <button
            className='cursor-pointer'
            onClick={() => setShowAnswer((prev) => !prev)}
          >
            {showAnswer ? 'Hide' : 'Show'} Answer
          </button>
          <button className='cursor-pointer' onClick={handleNextClick}>
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
