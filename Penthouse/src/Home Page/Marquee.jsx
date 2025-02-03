import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
  return (
    <div style={{backgroundColor: 'red', color: 'white'}}>
        <Marquee speed={50} gradient={false} 
        style={{fontSize: 22, color: 'white'}}>
         * USE PROMO CODE &quot;ILUVSHWRMA&quot; FOR 40% OFF *
        </Marquee>
    </div>
  );
};

export default MarqueeComponent;