const FindMore = () => {
  return (
    <section className="flex justify-center items-center w-full p-4 my-12">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-xl md:text-2xl font-bold">
          Find out more about our work
        </h1>

        <div className="w-full max-w-[60rem] h-[20rem] p-2">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1mXnrl3H6yQry-V5-XGCRzOevl3AHy1g&ehbc=2E312F&noprof=1"
            className="w-full h-[20rem] rounded-md border border-green-700"
          />
        </div>
      </div>
    </section>
  );
};

export default FindMore;
