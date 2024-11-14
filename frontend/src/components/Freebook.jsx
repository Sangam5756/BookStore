import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-xl container mx-auto md:px-20 px-4  ">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Course</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
            architecto praesentium veniam saepe repellat illo eaque itaque
            doloremque dolores facilis voluptates excepturi!
          </p>
        </div>

      </div>
      <div>
        <Slider {...settings}>
          {filterData.map((item) =>(
            <Cards item={item} key ={item.id}/>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
