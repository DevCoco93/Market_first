import './scss/MainPage.scss';

const MainPage = () => {
  const imageUrl = process.env.PUBLIC_URL + '/image/ethereum.png';

  return (
    <>
      <section className='w-screen h-screen flexCol bg-gray-300 pt-10rem px-5rem'>
        <article className='rounded-lg h-100% w-100% mt-5rem overflow-hidden'>
          <div className='w-100% h-100% rounded-lg'>
            <img className='rounded-lg w-full h-full bg-center object-fit transition-transform transform hover:scale-125' src={imageUrl} />
          </div>
        </article>
        <article className='bg-coral h-100%'>
          <div>hi</div>
        </article>
      </section>
    </>
  );
};

export default MainPage;
