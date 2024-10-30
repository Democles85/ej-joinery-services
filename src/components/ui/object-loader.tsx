import { forwardRef } from "react";
import { MoonLoader } from "react-spinners";

export const ObjectSpinner = () => (
  <MoonLoader
    color="#16a34a"
    size="90px"
    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  />
);

export const ObjectContainer = forwardRef<
  HTMLDivElement,
  { children: React.ReactNode }
>(({ children }, ref) => (
  <div
    ref={ref}
    className="w-[280px] h-[280px] m-auto mt-[-20px] mb-[-40px] relative md:w-[480px] lg:w-[640px] md:h-[480px] lg:h-[640px] md:mt-[-60px] lg:mt-[-120px] md:mb-[-1400px] lg:mb-[-240px]"
  >
    {children}
  </div>
));

const Loader = () => (
  <ObjectContainer>
    <ObjectSpinner />
  </ObjectContainer>
);

export default Loader;
