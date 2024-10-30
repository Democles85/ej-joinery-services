const AboutPage = () => {
  return (
    <main className="flex place-items-center justify-center w-full min-h-screen">
      <div className="flex flex-col max-w-[60rem] w-full justify-center items-center p-4 border border-green-600/40 rounded-md">
        <h1 className="text-xl md:text-2xl font-semibold">About Us</h1>

        <p className="text-justify my-2 max-w-[66.6667%]">
          For over 30 years, we have been your trusted partner in quality and
          craftsmanship. From elegant sash windows and stylish front doors to
          energy-efficient casement windows, sleek patio doors, and brightening
          skylights, we offer products designed to enhance your home. Ensure
          your security with our reliable door keys. Discover the perfect blend
          of style and functionality with us!
        </p>

        <div className="my-2">
          <video controls width="1500" autoPlay className="rounded-md">
            <source src="/videos/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
