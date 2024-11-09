// Navbar Layout
export interface NavbarChild1 {
  title: string;
  url: string;
}
export interface NavbarChild2 {
  img: string;
  title: string;
  url: string;
  child1: NavbarChild1[];
}
export interface Navbar {
  title: string;
  url: string;
  child: NavbarChild2[];
}

export interface Social {
  title: string;
  url: string;
  img: string;
}
// Navbar
export const navbar: Navbar[] = [
  {
    title: "Sản phẩm",
    url: `/`,
    child: [
      {
        title: "iPhone",
        url: "/",
        img: "https://phonestoredn.com/wp-content/uploads/2023/09/iphone-15-pro-max-gold-thumbtz-650x650.png.webp",
        child1: [
          { title: "iPhone 15 Series", url: "/" },
          { title: "iPhone 14 Series", url: "/" },
          { title: "iPhone 13 Series", url: "/" },
          { title: "iPhone 12 Series", url: "/" },
          { title: "iPhone 11 Series", url: "/" },
          { title: "iPhone X Series", url: "/" },
        ],
      },
      {
        title: "iPad",
        url: "/",
        img: "https://www.pngitem.com/pimgs/m/479-4795158_ipad-pro-3rd-generation-hd-png-download.png",
        child1: [
          { title: "iPad Pro", url: "/" },
          { title: "iPad Air", url: "/" },
          { title: "iPad Gen", url: "/" },
          { title: "iPad Mini", url: "/" },
        ],
      },
      {
        title: "Watch",
        url: "/",
        img: "https://cdn.viettelstore.vn/Images/Product/ProductImage/594842402.jpeg",
        child1: [
          { title: "Watch Series Ultra", url: "/" },
          { title: "Watch Series 8", url: "/" },
          { title: "Watch Series 7", url: "/" },
          { title: "Watch Series 6", url: "/" },
          { title: "Watch Series SE", url: "/" },
          { title: "Watch Series 5", url: "/" },
        ],
      },
      {
        title: "MacBook",
        url: "/",
        img: "https://cdn.pixabay.com/photo/2020/06/29/07/19/macbook-pro-5351689_1280.png",
        child1: [
          { title: "MacBook Pro", url: "/" },
          { title: "MacBook Air", url: "/" },
        ],
      },
      {
        title: "Phụ Kiện",
        url: "/",
        img: "https://png.pngtree.com/png-vector/20221108/ourmid/pngtree-airpods-3rd-generation-wireless-headphones-png-image_6433754.png",
        child1: [
          { title: "Tai nghe", url: "/" },
          { title: "Sạc - Sạc dự phòng", url: "/" },
          { title: "Phụ kiện khác", url: "/" },
        ],
      },
    ],
  },
  {
    title: "Dịch Vụ Sửa Chữa",
    url: `/`,
    child: [
      {
        title: "Sữa Chữa iPhone",
        url: "/",
        img: "https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/repair-35.png",
        child1: [
          { title: "iPhone 15 Series", url: "/" },
          { title: "iPhone 14 Series", url: "/" },
          { title: "iPhone 13 Series", url: "/" },
          { title: "iPhone 12 Series", url: "/" },
          { title: "iPhone 11 Series", url: "/" },
          { title: "iPhone X Series", url: "/" },
        ],
      },
      {
        title: "Sữa Chữa iPad",
        url: "/",
        img: "https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/repair-35.png",
        child1: [
          { title: "iPad Pro", url: "/" },
          { title: "iPad Air", url: "/" },
          { title: "iPad Gen", url: "/" },
          { title: "iPad Mini", url: "/" },
        ],
      },
      {
        title: "Sữa Chữa Watch",
        img: "https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/repair-35.png",
        url: "/",
        child1: [
          { title: "Watch Series Ultra", url: "/" },
          { title: "Watch Series 8", url: "/" },
          { title: "Watch Series 7", url: "/" },
          { title: "Watch Series 6", url: "/" },
          { title: "Watch Series SE", url: "/" },
          { title: "Watch Series 5", url: "/" },
        ],
      },
      {
        title: "Sữa Chữa MacBook",
        url: "/",
        img: "https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/repair-35.png",
        child1: [
          { title: "MacBook Pro", url: "/" },
          { title: "MacBook Air", url: "/" },
        ],
      },
      {
        title: "Sữa Chữa Phụ Kiện",
        img: "https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/repair-35.png",
        url: "/",
        child1: [
          { title: "Tai nghe", url: "/" },
          { title: "Sạc - Sạc dự phòng", url: "/" },
          { title: "Phụ kiện khác", url: "/" },
        ],
      },
    ],
  },
  {
    title: "Khuyến Mãi",
    url: `/`,
    child: [],
  },
  {
    title: "Tin Tức",
    url: `/`,
    child: [],
  },
];

export const social: Social[] = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/",
    img: "/icons/Facebook_icon.svg",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    img: "/icons/Insta_icon.svg",
  },
];

export const links = [
  {
    name: "Men",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Women",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
  {
    name: "Kid's",
    submenu: true,
    sublinks: [
      {
        Head: "Topwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "Bottomwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "innerwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },

      {
        Head: "sleepwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
      {
        Head: "footwear",
        sublink: [
          { name: "T-shirt", link: "/" },
          { name: "Casual shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
          { name: "formal shirts", link: "/" },
        ],
      },
    ],
  },
];
