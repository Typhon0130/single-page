const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1600px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

// Media Querys

// @media ${devices.mobileS} {
//     max-width: 280px;
//   }

//   @media ${devices.mobileM} {
//     max-width: 335px;
//   }

//   @media ${devices.mobileL} {
//     max-width: 385px;
//   }

//   @media ${devices.tablet} {
//     max-width: 728px;
//   }

//   @media ${devices.laptop} {
//     max-width: 984px;
//   }

//   @media ${devices.laptopL} {
//     max-width: 1024px;
//   }

//   @media ${devices.desktop} {
//     max-width: 1620px;
//   }