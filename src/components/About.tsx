const About = () => {
  return (
    <div className="flex w-full justify-center mx-2 md:mx-4 mt-20 md:mt-0">
      <div className="flex w-full relative max-w-[80rem] place-items-center">
        <div className="flex items-center">
          <div className="max-w-[32rem]">
            <img
              src="/src/assets/PUNE9.jpg"
              alt="Working Van"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 bg-green-900/15 border border-green-900/50 backdrop-blur-lg p-6 max-w-[48rem] shadow-lg rounded-md">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-4">
              For over <span className="text-primary">30 years</span>, we have
              been your trusted partner in quality and craftsmanship. From
              elegant sash windows and stylish front doors to energy-efficient
              casement windows, sleek patio doors, and brightening skylights, we
              offer products designed to enhance your home. Ensure your security
              with our reliable door keys. Discover the perfect blend of style
              and functionality with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
