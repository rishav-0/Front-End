import { Carousel } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel className="mb-[80px]">
      <img
        src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/27-10-23/4/samsung-diwali/bb/SamsungDiwaliBP_BigBanner_2_Desk_samsunggalaxys225g128gbstoragepurple8gbramsmartphone_PDP_B2B.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/27-10-23/4/samsung-diwali/bb/SamsungDiwaliBP_BigBanner_1_Desk_samsunggalaxya345g128gbstoragelightviolet8gbram_PDP_B2B.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.bajajmall.in/content/dam/emistoremarketplace/index/27-10-23/4/samsung-diwali/bb/SamsungDiwaliBP_BigBanner_3_Desk_samsunggalaxyf545g256gbstoragestardustsilver8gbramsmartphone_PDP_B2B.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}