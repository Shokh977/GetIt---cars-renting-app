import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card } from "./Card";

const Slider = ({ options, children }) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  return (
    // 3. set ref as emblaRef.
    // make sure we have overflow-hidden and flex so that it displays properly
    <div className="overflow-hidden" ref={emblaRef}>  
      <div className="flex ">{children}</div>
    </div>
  );
};

export default Slider;

// export function Slider() {
//   const [emblaRef] = useEmblaCarousel()

//   return (
//     <div className="overflow-hidden section container" ref={emblaRef}>
//       <div className="flex">
//         <div className="flex-0 flex-grow-0 flex-shrink-0 w-full min-w-0">
//             <Card/>
//         </div>
//       </div>
//     </div>
//   )
// }
