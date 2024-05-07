import { eventWrapper } from "@testing-library/user-event/dist/utils";

export const navList = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/services",
    text: "Services",
  },
  {
    path: "/event",
    text: "Event",
  },
  {
    path: "/menu",
    text: "Menu",
  },
  {
    path: "/blog",
    text: "Blog",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const features = [
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Best & Fresh Biriyani",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Take Away Facility",
  },
  {
    /*{
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Easy Customization Options",
  },
  {
    icon: <i className="fas fa-share text-primary me-2"></i>,
    text: "Delicious Deals for Delicious Meals",
  },*/
  },
];

export const faces = [
  {
    name: "HAPPY CUSTOMERS",
    icon: <i className="fas fa-users fa-4x mb-4 text-white"></i>,
    counter: "10 L+",
  },
  {
    name: "EXPERT CHEFS",
    icon: <i className="fas fa-users-cog fa-4x mb-4 text-white"></i>,
    counter: "50+",
  },
  {
    name: "EVENTS COMPLETE",
    icon: <i className="fas fa-check fa-4x mb-4 text-white"></i>,
    counter: "1000+",
  },
];

export const services = [
  {
    icon: <i className="fas fa-cheese fa-7x text-primary mb-4"></i>,
    name: "Weding Services",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-pizza-slice fa-7x text-primary mb-4"></i>,
    name: "Corporate Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-hotdog fa-7x text-primary mb-4"></i>,
    name: "Cocktail Reception",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },

  {
    icon: <i className="fas fa-hamburger fa-7x text-primary mb-4"></i>,
    name: "Bento Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-wine-glass-alt fa-7x text-primary mb-4"></i>,
    name: "Pub Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },

  {
    icon: <i className="fas fa-walking fa-7x text-primary mb-4"></i>,
    name: "Home Delivery",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
  {
    icon: <i className="fas fa-wheelchair fa-7x text-primary mb-4"></i>,
    name: "Sit-down Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },

  {
    icon: <i className="fas fa-utensils fa-7x text-primary mb-4"></i>,
    name: "Buffet Catering",
    discription: "Contrary to popular belief, ipsum is not simply random.",
    btn: "Read More",
  },
];
export const event = [
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-1.jpg",
    category: "birthday",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-2.jpg",
    category: "anniversary",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-3.jpg",
    category: "birthday",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-4.jpg",
    category: "anniversary",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-5.jpg",
    category: "engagement",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-6.jpg",
    category: "aiburuBhat",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-7.jpg",
    category: "engagement",
  },
  {
    icon: [<i className="fas fa-search-plus text-dark fa-2x"></i>],
    image: "../assets/img/event-8.jpg",
    category: "aiburuBhat",
  },
];

export const menu = [
  {
    id: 1,
    name: "Mutton Biriyani",
    price: "320",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "biriyani",
    btn: "Add To Cart",
  },
  {
    id: 2,
    name: "Special Mutton Biriyani",
    price: "550",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "biriyani",
    btn: "Add To Cart",
  },
  {
    id: 3,
    name: "Extra Mutton",
    price: "220",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "biriyani",
    btn: "Add To Cart",
  },
  {
    id: 4,
    name: "Chicken Biriyani",
    price: "220",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "biriyani",
    btn: "Add To Cart",
  },
  {
    id: 5,
    name: "Special Chicken Biriyani",
    price: "360",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-05.jpg",
    category: "biriyani",
    btn: "Add To Cart",
  },
  {
    id: 6,
    name: "Extra Chicken",
    price: "140",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-06.jpg",
    category: "biriyani",
    btn: "Add To Cart",
  },
  {
    id: 7,
    name: "Alu Biriyani",
    price: "120",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-07.jpg",
    category: "biriyani",
    btn: "Add To Cart",
  },
  {
    id: 8,
    name: "Chicken Tandoori (Full) 4Pcs.",
    price: "370",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-08.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 9,
    name: "Chicken Tandoori (Full) 2Pcs.",
    price: "210",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 10,
    name: "Chicken Reshmi Kabab 6 Pcs.",
    price: "240",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 11,
    name: "Chicken Bhatiyali Kabab 6 Pcs.",
    price: "240",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 12,
    name: "Chicken Tikka Kababs 6Pcs.",
    price: "240",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 13,
    name: "Chicken Malai Tikka 6Pcs.",
    price: "300",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 14,
    name: "Chicken Tengri Kabab (Full) 4Pcs.",
    price: "320",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 15,
    name: "Chicken Tengri Kabab (Full) 4Pcs.",
    price: "190",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 16,
    name: "Chicken Kalmi Kabab (Full) 4Pcs.",
    price: "280",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 17,
    name: "Chicken Kalmi Kabab (Full) 4Pcs.",
    price: "150",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 18,
    name: "Fish Tikka 4Pcs.",
    price: "300",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 19,
    name: "Fish Acharia Tikka",
    price: "300",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 20,
    name: "Navaratan Korma",
    price: "210",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 21,
    name: "Dal Makhani",
    price: "180",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 22,
    name: "Mixed Vegetable Jalrezi",
    price: "200",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 23,
    name: "Yellow Dal Fry",
    price: "110",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 24,
    name: "Paneer Butter Masala",
    price: "210",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 25,
    name: "Mushroom Masala",
    price: "220",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-05.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 26,
    name: "Paneer Tikka Masala",
    price: "230",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-06.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 27,
    name: "Sahi Paneer",
    price: "122100",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-07.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 28,
    name: "Malai Kofta",
    price: "220",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-08.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 29,
    name: "Paneer Pasinda (Greavy)",
    price: "230",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 30,
    name: "Matar Paneer",
    price: "210",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 31,
    name: "Fish Gravy 2Pcs.",
    price: "260",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 32,
    name: "Fish Do Piyaza",
    price: "280",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 33,
    name: "Fish Masala",
    price: "280",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 34,
    name: "Fish Tikka Masala 4Pcs.",
    price: "350",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 35,
    name: "Tandoori Roti(Plain)",
    price: "20",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 36,
    name: "Tandoori Roti (Butter)",
    price: "25",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 37,
    name: "Naan (Butter)",
    price: "55",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 38,
    name: "Naan (Garlic)",
    price: "75",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "tanindiandoor",
    btn: "Add To Cart",
  },
  {
    id: 39,
    name: "Naan (Pain)",
    price: "45",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 40,
    name: "Masala Kulcha",
    price: "80",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 41,
    name: "Lachha Paratha",
    price: "50",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 42,
    name: "Kashmiri Naan",
    price: "75",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 43,
    name: "Paneer Tikka",
    price: "180",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "tanoor",
    btn: "Add To Cart",
  },
  {
    id: 44,
    name: "Paneer Malai Tikka",
    price: "210",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "tanoor",
    btn: "Add To Cart",
  },
  {
    id: 45,
    name: "Mushroom (12Pcs.)",
    price: "200",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-05.jpg",
    category: "tanoor",
    btn: "Add To Cart",
  },
  {
    id: 46,
    name: "Corn Tikka",
    price: "180",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-06.jpg",
    category: "tanoor",
    btn: "Add To Cart",
  },
  {
    id: 47,
    name: "Stram Rice",
    price: "80",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-07.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 48,
    name: "Peas Pulao",
    price: "190",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-08.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 49,
    name: "Jeera Rice",
    price: "130",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 50,
    name: "Veg Pulao",
    price: "160",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 51,
    name: "Kashmiri Pulao",
    price: "190",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 52,
    name: "Green Peas Pulao",
    price: "190",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-04.jpg",
    category: "indian",
    btn: "Add To Cart",
  },
  {
    id: 53,
    name: "Chicken Malai Tikka 6Pcs.",
    price: "300",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "tandoor",
    btn: "Add To Cart",
  },
  {
    id: 54,
    name: "Chilli Chicken Dry",
    price: "230",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-03.jpg",
    category: "chinese",
    btn: "Add To Cart",
  },
  {
    id: 55,
    name: "Crispy Chicken",
    price: "220",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-09.jpg",
    category: "chinese",
    btn: "Add To Cart",
  },
  {
    id: 56,
    name: "Drums of Heaven",
    price: "220",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-10.jpg",
    category: "chinese",
    btn: "Add To Cart",
  },
  {
    id: 57,
    name: "Fire of Wings",
    price: "225",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-02.jpg",
    category: "chinese",
    btn: "Add To Cart",
  },
  {
    id: 58,
    name: "Blue Lagoon",
    price: "149",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "mocktail",
    btn: "Add To Cart",
  },
  {
    id: 59,
    name: "Butter Stoch Shake",
    price: "169",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "mocktail",
    btn: "Add To Cart",
  },
  {
    id: 60,
    name: "Chocolate Shake",
    price: "159",
    content:
      "Consectetur adipiscing elit sed dwso eiusmod tempor incididunt ut labore.",
    img: "../assets/img/menu-01.jpg",
    category: "mocktail",
    btn: "Add To Cart",
  },
];

export const footerIcon = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    path: "www.facebook.com/officialdadaboudihotel/",
  },
  {
    icon: <i className="fab fa-youtube"></i>,
    path: "www.youtube.com/@DadaBoudiHotelOfficial",
  },
  {
    icon: <i className="fab fa-instagram"></i>,
    path: "www.instagram.com/dadaboudihotelofficial/",
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
    path: "www.linkedin.com/in/dadaboudihotelofficial/?originalSubdomain=in",
  },
];

export const footerUnitItem = [
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Neat & Clean Washroom",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Parking",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Waiting Area",
  },
  {
    icon: <i className="fa fa-check text-primary me-2"></i>,
    name: "Quick Service",
  },
];

export const footerUnitContact = [
  {
    icon: <i className="fa fa-map-marker-alt text-primary me-2"></i>,
    name: "1, Ghoshpara Rd, Barrackpore, West Bengal 700120",
  },
  {
    icon: <i className="fa fa-phone-alt text-primary me-2"></i>,
    name: "+91 9831318010",
  },
  {
    icon: <i className="fas fa-envelope text-primary me-2"></i>,
    name: "info@dadaboudihotel.com",
  },
  {
    icon: <i className="fa fa-clock text-primary me-2"></i>,
    name: "From 11 am to 12 o'clock",
  },
];
export const footergallery = [
  {
    img: "../assets/img/menu-01.jpg",
  },
  {
    img: "../assets/img/menu-02.jpg",
  },
  {
    img: "../assets/img/menu-03.jpg",
  },
  {
    img: "../assets/img/menu-04.jpg",
  },
  {
    img: "../assets/img/menu-05.jpg",
  },
  {
    img: "../assets/img/menu-06.jpg",
  },
];

export const contact = [
  {
    icon: <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>,
    title: "Address",
    address: "123 Street, New York, USA",
  },
  {
    icon: <i className="fas fa-envelope fa-2x text-primary me-4"></i>,
    title: "Mail Us",
    address: "info@example.com",
  },
  {
    icon: <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>,
    title: "Telephone",
    address: "(+012) 3456 7890 123",
  },
];
export const blog = [
  {
    name: "How to get more test in your food from",
    img: "../assets/img/blog-1.jpg",
    day: "16",
    month: "Sep",
  },
  {
    name: "How to get more test in your food from",
    img: "../assets/img/blog-2.jpg",
    day: "16",
    month: "Sep",
  },
  {
    name: "How to get more test in your food from",
    img: "../assets/img/blog-3.jpg",
    day: "16",
    month: "Sep",
  },
];
