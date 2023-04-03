import LeftArrowIcon from "../assets/LeftArrowIcon";
import RightArrowIcon from "../assets/RightArrowIcon";

function Carousel() {
  const;
  const imgArray = [
    { id: 1, src: "/img1.jpg" },
    { id: 2, src: "./img2.jpg" },
    { id: 3, src: "./img3.jpg" },
  ];

  const videoArray = [
    { id: 1, src: "/vid1.mp4" },
    { id: 2, src: "./vid2.mp4" },
    { id: 3, src: "./vid3.mp4" },
  ];

  function nextSlide(event: Event) {
    console.log(event.target);
  }

  return (
    <div>
      <div className="flex justify-center items-center mx-auto w-full max-w-[700px] min-h-[500px] overflow-hidden relative">
        {imgArray.map((img) => (
          <div key={img?.id} className="w-fit h-full">
            <img src={img?.src} className="h-full min-w-[700px] rounded-lg" />
          </div>
        ))}
        <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full text-black absolute left-4">
          <LeftArrowIcon className="w-6 h-6" />
        </div>
        <div className="w-12 h-12 flex justify-center items-center bg-white rounded-full text-black absolute right-4">
          <RightArrowIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
