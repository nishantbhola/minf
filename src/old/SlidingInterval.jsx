'use client';

import { Carousel } from 'flowbite-react';

export default function SlidingInterval() {
  return (
    <>
    <Carousel className='relative' slideInterval={2000}>
      <img
        alt="..."
        className="object-cover  h-full "
        src="https://media.nationthailand.com/uploads/images/md/2021/09/7Wr5R59tzfww9398qwnW.jpg"
      />
      <img
        alt="..."
        className="object-cover  h-full "
        src="https://media.nationthailand.com/uploads/images/md/2021/09/7Wr5R59tzfww9398qwnW.jpg"
      />
      <img
        alt="..."
        className="object-cover  h-full "
        src="https://media.nationthailand.com/uploads/images/md/2021/09/7Wr5R59tzfww9398qwnW.jpg"
      />
      <img
        alt="..."
        className="object-cover  h-full "
        src="https://media.nationthailand.com/uploads/images/md/2021/09/7Wr5R59tzfww9398qwnW.jpg"
      />
      <img
        alt="..."
        className="object-cover  h-full "
        src="https://media.nationthailand.com/uploads/images/md/2021/09/7Wr5R59tzfww9398qwnW.jpg"
      />
    </Carousel>

    </>
    
  )
}


