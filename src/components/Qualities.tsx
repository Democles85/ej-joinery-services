import styles from "../styles/skills.module.css";

const qualities = [
  {
    title: "Quality Materials",
    image: "/images/qualitymaterial.jpg",
  },
  {
    title: "Skilled Artisians",
    image: "/images/skilledartizanals.jpg",
  },
  {
    title: "Variety of Styles",
    image: "/images/Variety of Styles.jpg",
  },
  {
    title: "Eco-Friendly",
    image: "/images/ecofriendly.jpg",
  },
  {
    title: "Energy Efficient",
    image: "/images/Energy Efficiency.jpg",
  },
  {
    title: "Tailored Solutions",
    image: "/images/Tailored Solutions.jpg",
  },
];

const Qualities = () => {
  const mouseMoveHandler = (e: { clientX: number; clientY: number }) => {
    for (const card of document.getElementsByClassName(
      styles.card
    ) as HTMLCollectionOf<HTMLElement>) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div className="flex justify-center max-w-full bg-[#f0fff0] dark:bg-green-900/15 mt-28 md:mt-12">
      <div className="w-full place-items-center justify-center my-8 max-w-[60rem]">
        <h1 className="font-bold text-3xl text-center mb-4">Qualities</h1>

        <div className="flex justify-center">
          <div
            className="grid grid-cols-1 gap-4 max-w-fit md:grid-cols-2 lg:grid-cols-3"
            onMouseMove={mouseMoveHandler}
            id="cards"
          >
            {qualities.map((quality, index) => (
              <div key={index} className={styles.card}>
                <div className={styles["card-content"]}>
                  <div className="w-full h-fit">
                    <img
                      src={quality.image}
                      alt={quality.title}
                      className="w-full object-cover rounded-md"
                    />
                  </div>

                  <h1 className="text-lg font-bold text-center mt-1">
                    {quality.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualities;
