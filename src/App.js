import React from "react";
import "../src/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Pancakes",
    price: 15.99,
    photo: "../items/item-1.jpeg",
    description:
      "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke",
  },
  {
    id: 2,
    name: "Diner Double",
    price: 13.99,
    photo: "../items/item-2.jpeg",
    description:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    name: "Milkshake",
    price: 6.99,
    photo: "../items/item-3.jpeg",
    description:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral",
  },
  {
    id: 4,
    name: "Country Delight",
    price: 20.99,
    photo: "../items/item-4.jpeg",
    description:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut",
  },
  {
    id: 5,
    name: "Egg Attack",
    price: 22.99,
    photo: "../items/item-5.jpeg",
    description:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    name: "Oreo Dream",
    price: 18.99,
    photo: "../items/item-6.jpeg",
    description:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <div className="row">
        {DUMMY_DATA.map((data, i) => (
          <div className="col-md-6 col-lg-4 col-xs-12" key={data.id}>
            <Menu
              name={data.name}
              photoName={data.photo}
              price={data.price}
              description={data.description}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
