import { ParallaxBanner } from 'react-scroll-parallax';

function Paralax() {
  return (
    <ParallaxBanner
      layers={[{ image: '/static/banner.jpg', speed: -15 }]}
      className="aspect-[2/1]"
    />
  );
}


export default Paralax;