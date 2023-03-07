import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Reviews = () => {
  return (
    <div
      className=" bg-black text pt-20 pb-16 bg-cover bg-fixed bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
      }}
    >
      <div className="w-4/5 md:w-3/4 mx-auto">
        <h1 className="text-white font-primary tracking-wide text-4xl text-center uppercase">
          What clients say
        </h1>
        <Carousel
          swipeable={true}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          <div key="slide1" className="p-3 min-h-[180px]">
            <p className="text-white my-3">
              {" "}
              Throughout the management of our portfolio of over 150 units, CREM
              Management has consistently exuded transparency, honest and a
              commitment to manage costs as if each property was their own. As
              owners in real estate portfolios themselves, they seemed to be
              directly aligned with our interest in the diligent and
              economically efficient management of our units. They're truly that
              unicorn vendor and we're so happy with our partnership.
            </p>
            <p className="text-white font-bold">
              - DAVE TRIKIN, TRIKIN CAPITA MANAGEMENT.
            </p>
          </div>
          <div key="slide2" className="p-3 min-h-[180px]">
            <p className="text-white my-3">
              I cannot stress this enough, for any multifamily/retail property
              management needs, CREM Mangement is a must consideration. Their
              management prices are at market but their service, without a
              doubt, is above anything we've experienced on the management side.
              Unfortunately, it took us 4 years, headaches and multiple
              management companies to finally connect.
            </p>
            <p className="text-white font-bold">
              - DAVE TRIKIN, TRIKIN CAPITA MANAGEMENT.
            </p>{" "}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
