const Menus = [
  { name: "Home", to: "/" },
  {
    name: "Services",
    subMenu: [
      { name: "Balloon Set Ups", to: "/womens-ministry" },
      { name: "Parties", to: "/mens-ministry" },
      { name: "Table Set Up", to: "/youth-ministry" },
      { name: "Gifts", to: "/children-ministry" },
      { name: "Hire", to: "/children-ministry" },
      { name: "Grab & Go", to: "/children-ministry" },
    ],
    gridCols: 3,
  },
  { name: "Contact Us", to: "/contact" },
  { name: "About Us", to: "/aboutus" },
  { name: "Booking Form", to: "/bookingform" },
];

export default Menus;
