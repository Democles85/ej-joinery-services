import { services } from "@/models/services";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 my-12 md:p-8">
      <h2 className="text-xl font-bold md:text-2xl">Our Services</h2>
      <p className="text-lg text-center text-green-700 dark:text-green-600">
        Transform your space with tailor-made joinery masterpieces, meticulously
        crafted to perfection and uniquely designed to exceed your expectations!
      </p>
      <div className="grid grid-cols-1 gap-4 mt-6 max-w-[60rem] md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link to={service.href} key={service.href}>
            <div className="flex flex-col items-center justify-center p-4 border border-primary rounded-md min-h-full md:p-8 dark:border-green-900 hover:bg-green-100/15">
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold my-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
