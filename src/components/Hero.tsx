const Hero = () => {
  return (
    <div className="flex flex-col h-[calc(100vh_-_3.5rem)] mx-2 md:mx-4 items-center justify-center md:flex-row">
      <div>
        <h1 className="text-3xl font-bold">EJ Joinery Services LTD</h1>
        <p className="text-lg">
          Crafting quality for over{" "}
          <span className="text-primary">30 years</span>!
        </p>

        <p>
          Transforming Spaces, Building Dreams - Where Craftsmanship Meets
          Innovation!
        </p>
      </div>
      <div></div>
      <img
        src="/images/background-removebg.png"
        alt="Hero"
        className="h-96 object-cover rounded-lg md:h-[36rem]"
      />
    </div>
  );
};

export default Hero;
