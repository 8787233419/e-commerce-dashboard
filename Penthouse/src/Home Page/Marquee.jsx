import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
  return (
    <div style={{backgroundColor: '#e53f19', color: 'white'}}>
        <Marquee speed={100} gradient={false} 
        style={{fontSize: 22, color: 'white', height: '2em', width: '100%'}}>
         * USE PROMO CODE &quot;ILUVSHWRMA&quot; FOR 40% OFF *
        </Marquee>
    </div>
  );
};

export default MarqueeComponent;