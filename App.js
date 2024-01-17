import React from "react";
import ReactDOM from "react-DOM/client";

/* component 
    -header
        -logo
        -nav Items
    -body
        -search
        -resto container
            -resto cards
                -img
                -name of res
                -star ratings
    -footer
        -copyrights
        -links
        -address
        -contactss
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurantcards = (props) => {
  const { resData } = props;

  // destructuring the data
  const { image, name, cuisins, rating, expectedDeliveryTime } = resData;

  return (
    <div className="res-cards">
      <img className="res-img" src={image} />
      <h3>{name}</h3>
      <h4>{rating}</h4>
      <h4>{expectedDeliveryTime} minutes</h4>
    </div>
  );
};

const reslist = [
  {
    image: "http://dummyimage.com/166x100.png/ff4444/ffffff",
    name: "Tagtune",
    cuisins: "sunmark all day relief",
    rating: 2.98,
    expectedDeliveryTime: "5:51 PM",
  },
  {
    image: "http://dummyimage.com/226x100.png/dddddd/000000",
    name: "Devpulse",
    cuisins: "Sonata",
    rating: 4.87,
    expectedDeliveryTime: "9:31 AM",
  },
  {
    image: "http://dummyimage.com/237x100.png/5fa2dd/ffffff",
    name: "Flashset",
    cuisins: "Lisinopril",
    rating: 2.24,
    expectedDeliveryTime: "8:35 PM",
  },
  {
    image: "http://dummyimage.com/244x100.png/cc0000/ffffff",
    name: "Eadel",
    cuisins: "Brontuss",
    rating: 1.36,
    expectedDeliveryTime: "7:16 AM",
  },
  {
    image: "http://dummyimage.com/117x100.png/dddddd/000000",
    name: "Zoomzone",
    cuisins: "Captopril",
    rating: 3.14,
    expectedDeliveryTime: "3:43 PM",
  },
  {
    image: "http://dummyimage.com/129x100.png/dddddd/000000",
    name: "Aimbo",
    cuisins: "OSCIMIN",
    rating: 3.52,
    expectedDeliveryTime: "9:32 PM",
  },
  {
    image: "http://dummyimage.com/143x100.png/dddddd/000000",
    name: "Jazzy",
    cuisins: "Amoxicillin",
    rating: 2.38,
    expectedDeliveryTime: "3:29 PM",
  },
  {
    image: "http://dummyimage.com/147x100.png/5fa2dd/ffffff",
    name: "Plajo",
    cuisins: "equaline milk of magnesia",
    rating: 4.25,
    expectedDeliveryTime: "11:14 PM",
  },
  {
    image: "http://dummyimage.com/223x100.png/cc0000/ffffff",
    name: "Jaloo",
    cuisins: "Purell Advanced Hand Sanitizer Tranquil Sunset",
    rating: 2.22,
    expectedDeliveryTime: "11:49 AM",
  },
  {
    image: "http://dummyimage.com/211x100.png/cc0000/ffffff",
    name: "Latz",
    cuisins: "MetroCream",
    rating: 1.25,
    expectedDeliveryTime: "7:07 PM",
  },
  {
    image: "http://dummyimage.com/225x100.png/dddddd/000000",
    name: "Twitterbeat",
    cuisins: "JAMU Sexty",
    rating: 2.35,
    expectedDeliveryTime: "4:31 PM",
  },
  {
    image: "http://dummyimage.com/184x100.png/cc0000/ffffff",
    name: "Pixope",
    cuisins: "Hand Sanitizing Wipes",
    rating: 3.53,
    expectedDeliveryTime: "5:00 PM",
  },
  {
    image: "http://dummyimage.com/239x100.png/5fa2dd/ffffff",
    name: "Nlounge",
    cuisins: "Simvastatin",
    rating: 4.58,
    expectedDeliveryTime: "5:21 AM",
  },
  {
    image: "http://dummyimage.com/172x100.png/dddddd/000000",
    name: "Photobug",
    cuisins: "BUDESONIDE",
    rating: 2.27,
    expectedDeliveryTime: "8:26 PM",
  },
  {
    image: "http://dummyimage.com/214x100.png/dddddd/000000",
    name: "BlogXS",
    cuisins: "Cefepime",
    rating: 4.36,
    expectedDeliveryTime: "4:55 PM",
  },
  {
    image: "http://dummyimage.com/122x100.png/dddddd/000000",
    name: "Dazzlesphere",
    cuisins: "Myambutol",
    rating: 1.41,
    expectedDeliveryTime: "8:35 AM",
  },
  {
    image: "http://dummyimage.com/224x100.png/cc0000/ffffff",
    name: "Buzzshare",
    cuisins: "Magnesite Viscum",
    rating: 1.5,
    expectedDeliveryTime: "7:27 PM",
  },
  {
    image: "http://dummyimage.com/170x100.png/5fa2dd/ffffff",
    name: "Skipstorm",
    cuisins: "Inclear",
    rating: 1.95,
    expectedDeliveryTime: "2:30 PM",
  },
  {
    image: "http://dummyimage.com/237x100.png/ff4444/ffffff",
    name: "Latz",
    cuisins: "Conazol",
    rating: 4.81,
    expectedDeliveryTime: "2:02 AM",
  },
  {
    image: "http://dummyimage.com/250x100.png/ff4444/ffffff",
    name: "Mymm",
    cuisins: "Phenazopyridine",
    rating: 2.61,
    expectedDeliveryTime: "8:26 PM",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {reslist.map((restaurant) => {
          return <Restaurantcards resData={restaurant} />;
        })}
        {/* <Restaurantcards resData={reslist[0]} />
        <Restaurantcards resData={reslist[1]} /> */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
