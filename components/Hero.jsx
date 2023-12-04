import YoutubeVideo from "./YoutubeVideo";

const Hero = () => {
  const descriptionColor = '#8D8E99';
  return (
    <section
      className='text-gray-600 body-font'
      style={{ minHeight: 'calc(85vh - 60px)' }}
    >
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col '>
        <h1 className='title-font sm:text-5xl text-3xl mb-8 font-medium text-gray-900 text-center lg:text-left'>
          👋 Welcome to uOttaApp!
        </h1>
        <p className='mb-16 leading-relaxed text-center lg:text-left sm:text-lg'>
          Hey, we're so excited you're here! uOttaApp is our hacker application tracker, designed to let you apply and track your application for uOttaHack 6, happening March 1st - 3rd, 2024, at the University of Ottawa. To get started, log in or sign up! If you've already applied, check out our FAQ to learn more about our event, or check out our recap video below from uOttaHack 5 to get excited!
        </p>
        <YoutubeVideo />
      </div>
    </section>
  );
};

export default Hero;
