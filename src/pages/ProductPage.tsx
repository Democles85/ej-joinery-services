import { useParams } from "react-router-dom";
import { data } from "../models/services";
import Masonry from "react-masonry-css";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = data.find((product) => product.id === id);
  const breakpointColumns = {
    default: 4,
    768: 2,
    640: 1,
  };

  if (!product) {
    return (
      <div className="flex place-items-center justify-center min-h-screen min-w-full">
        Product not found
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen place-items-center justify-center">
      <div className="flex flex-col max-w-[70rem] place-items-center justify-center">
        <div className="flex flex-col max-w-[60rem] p-8 place-items-center justify-center">
          <h1 className="text-xl font-bold md:text-2xl my-6">
            {product.title}
          </h1>
          <div className="flex gap-x-8 items-center">
            <iframe
              className="rounded-md border border-primary"
              title="3d box & sash"
              width="360px"
              height="400px"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking
              execution-while-out-of-viewport
              execution-while-not-rendered
              web-share
              src={product.object}
            />

            <p>{product.description}</p>
          </div>
        </div>

        <div className="flex flex-col my-6 md:my-8 place-items-center">
          <h1 className="text-xl font-bold md:text-2xl my-6">Varieties</h1>

          <Tabs defaultValue={product.table.parts[0].id} className="w-full">
            <ScrollArea className="max-w-[1200px] w-fit whitespace-nowrap rounded-md border">
              <div className="flex w-max p-2">
                <TabsList>
                  {product.table.parts.map((part) => (
                    <TabsTrigger key={part.id} value={part.id}>
                      {part.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {product.table.parts.map((part) => (
              <TabsContent key={part.id} value={part.id}>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-40">Photo</TableHead>
                      <TableHead className="w-80">Description</TableHead>
                      <TableHead className="w-96">Features</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {part.content.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="w-40">
                          <img
                            className="w-36 h-36 rounded-md object-cover"
                            src={item.image}
                            alt={item.description}
                          />
                        </TableCell>
                        <TableCell className="w-80">
                          {item.description}
                        </TableCell>
                        {index === 0 && (
                          <TableCell
                            rowSpan={part.content.length}
                            className="w-96 cursor-default"
                          >
                            <ul className="list-disc pl-4 space-y-2">
                              {part.features.map((feature, featureIndex) => (
                                <li key={featureIndex}>{feature}</li>
                              ))}
                            </ul>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="max-w-[40rem]">
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex w-fit mx-2 md:m-0"
            columnClassName="pl-4"
          >
            {product.images.map((image, index) => (
              <div key={index} className="mb-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <img
                      className="w-auto md:w-fit rounded-lg cursor-pointer"
                      src={image}
                      alt={`Product image ${index + 1}`}
                    />
                  </DialogTrigger>

                  <DialogContent>
                    <div className="flex flex-col place-items-center m-1 md:m-4">
                      <img
                        className="w-fit rounded-lg"
                        src={image}
                        alt={`Product image ${index + 1}`}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;
