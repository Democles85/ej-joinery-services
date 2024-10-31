import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { PhoneInput } from "./ui/phone-input";
import { Facebook, Instagram, Mail, MapPin, PhoneIcon } from "lucide-react";

const Contact = () => {
  const formSchema = z.object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters long" })
      .max(255, { message: "First name must be at most 255 characters long" }),
    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters long" })
      .max(255, { message: "Last name must be at most 255 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    mobile: z
      .string()
      .min(10, { message: "Mobile number must be at least 10 numbers long" })
      .max(14, { message: "Mobile number must be at most 14 numbers long" }),
    message: z
      .string()
      .min(10, { message: "Message must be at least 10 characters long" })
      .max(500, { message: "Message must be at most 500 characters long" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Send the data as a message on WhatsApp
    const message = `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nMobile: ${data.mobile}\nMessage: ${data.message}`;

    // testing phone number +355 69 579 5601
    window.open(
      `https://wa.me/+11234567890?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    form.reset();
  }

  return (
    <section className="flex justify-center items-center w-full p-4 my-12">
      <div className="flex flex-col justify-center items-center w-full max-w-[72rem] rounded-md bg-primary/15 p-6">
        <h1 className="text-xl md:text-2xl font-bold">Get in Touch</h1>

        <div className="w-full grid grid-cols-1 p-2 m-2 md:grid-cols-2 md:grid-rows-[max-content_1fr]">
          <div className="flex flex-col w-full place-items-center justify-center md:row-span-2 md:col-span-1">
            <h1 className="text-md md:text-lg text-primary">Send a message</h1>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid grid-cols-1 gap-4 w-full p-2 m-2 md:grid-cols-2"
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile</FormLabel>
                      <FormControl>
                        <PhoneInput
                          {...field}
                          placeholder="123 456 7890"
                          international
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex place-items-center justify-center w-full md:col-span-2">
                  <Button className="w-36" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="flex flex-col col-span-1 row-span-1 w-full place-items-center">
            <h1 className="text-md md:text-lg text-primary">Contact Info</h1>

            <div className="flex flex-col w-full place-items-center justify-center p-4">
              <div className="flex flex-col space-y-3">
                <p className="flex place-items-center text-sm md:text-md">
                  <MapPin className="size-5 mr-2" /> 2A Goldsmith Road, London,
                  United Kingdom
                </p>
                <a
                  className="flex place-items-center text-sm md:text-md"
                  href="mailto:info@ejjoineryservices.com"
                >
                  <Mail className="size-5 mr-2" /> info@ejjoineryservices.com
                </a>
                <a
                  className="flex place-items-center text-sm md:text-md"
                  href="tel:+11234567890"
                >
                  <PhoneIcon className="size-5 mr-2" /> +1 123 456 7890
                </a>
              </div>

              <div className="flex flex-col w-full place-items-center justify-center p-4">
                {/* Socials */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/EJ.JoineryServicesLtd"
                    className="flex place-items-center text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Facebook className="mr-2" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/ej_joineryservices_ltd/"
                    className="flex place-items-center text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram className="mr-2" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex col-span-1 row-span-1 w-full place-items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.4295794887535!2d-0.1532065844288203!3d51.61533958654768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487619975bce1f91%3A0xf98cbd35e5dc22b0!2s2A%20Goldsmith%20Rd%2C%20London%20N11%203JP%2C%20Mbret%C3%ABria%20e%20Bashkuar!5e0!3m2!1ssq!2s!4v1718321270777!5m2!1ssq!2s"
              width="600"
              height="450"
              loading="lazy"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
