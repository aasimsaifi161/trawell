import Marquee from "./Marquee";

const Marquees = () => {
  const images = [
    [
      "https://media1.thrillophilia.com/filestore/homepage/sangri_today.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/the_tribune.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/ani_news.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/dailyhunt.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/times_of_india.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/business_standard.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/republic.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/india_com.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/pr_news.png?w=300&dpr=2"
    ],
    [
      "https://media1.thrillophilia.com/filestore/homepage/sangri_today.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/the_tribune.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/ani_news.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/dailyhunt.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/times_of_india.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/business_standard.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/republic.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/india_com.png?w=300&dpr=2",
      "https://media1.thrillophilia.com/filestore/homepage/pr_news.png?w=300&dpr=2"
    ],
  ];

  return (
    <div className="mt-32 w-[80%] mx-auto relative overflow-hidden">
      <p className="text-center text-xl sm:text-3xl text-sky-800 font-bold mb-5 ">
        Recognised By Top Media
      </p>
      {images.map((item, index) => <Marquee key={index} imagesurl = {item} direction={index === 0 ? "left" : "right"} />)}
    </div>
  );
}

export default Marquees;
