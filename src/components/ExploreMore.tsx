import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const ExploreMore = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full bg-[url('/images/thinking.jpg')] bg-repeat bg-center bg-contain h-[40vh] text-black">
      <h1 className="text-sm font-semibold md:text-md">
        Ensuring 100% Quality Products
      </h1>

      <h2 className="text-xl font-bold md:text-2xl lg:text-3xl">
        Ultimate Guide to <span className="text-green-600">Perfection</span>
      </h2>

      <Dialog>
        <DialogTrigger asChild>
          <Button color="primary" className="mt-2">
            Explore More
          </Button>
        </DialogTrigger>

        <DialogContent>
          <div className="flex flex-col place-items-center m-1 md:m-4">
            <h1 className="text-lg font-semibold my-2"> Explore More </h1>
            <iframe
              src="/images/Day_1_prezantim.pdf"
              className="w-full h-[70vh] rounded-md"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExploreMore;
