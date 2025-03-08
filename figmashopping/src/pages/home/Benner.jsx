import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="mb-[140px]">
      <img
        src="https://img.freepik.com/free-psd/smartphone-camera-control-social-media-banner-design-template_47987-25416.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://i.pinimg.com/736x/8e/f7/26/8ef726ffe903afa19aa545e23f3b9c72.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4D0zsh8pvemnZ26GOHdYOkCXyltu0G9V6zhnCG5mJaO2_Qckvb6xOMa_06Tqndlux78&usqp=CAU"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}