import philly from '/public/img/menu/phillyRoll.jpg';
import philly2 from '/public/img/menu/phillyRoll2.jpg';
import maki from '/public/img/menu/makiRoll.jpg';
import assorted from '/public/img/menu/assortedNigiri.jpg'

const dishList = [{
    title: "Philidelphia Roll",
    image: { philly },
    price: 9.99
}, {
    title: "Philidelphia Roll II",
    image: { philly2 },
    price: 9.99
}, {
    title: "Maki Roll",
    image: { maki },
    price: 7.99
}, {
    title: "Assorted Nigiri",
    image: { assorted },
    price: 11.99
    }];

export default JSON.stringify({ dishList});

