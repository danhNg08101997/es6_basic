let mangSanPham = [
  { MaSP: 1, TenSP: "Sony Xperia XZ 2", Gia: 17500000, HangSX: "SONY" },
  { MaSP: 2, TenSP: "Sony Xperia XZ 1", Gia: 27500000, HangSX: "SONY" },
  { MaSP: 3, TenSP: "Sony Xperia XZ Premium", Gia: 15500000, HangSX: "SONY" },
  { MaSP: 4, TenSP: "Google Pixel XL", Gia: 25500000, HangSX: "GOOGLE" },
  { MaSP: 5, TenSP: "Google Pixel XL2", Gia: 18500000, HangSX: "GOOGLE" },
  { MaSP: 6, TenSP: "Samsung Galaxy Note 9", Gia: 19500000, HangSX: "SAMSUNG" },
  {
    MaSP: 7,
    TenSP: "Samsung Galaxy S9 Plus",
    Gia: 20500000,
    HangSX: "SAMSUNG",
  },
  {
    MaSP: 8,
    TenSP: "Samsung Galaxy S10 Plus",
    Gia: 21500000,
    HangSX: "SAMSUNG",
  },
  { MaSP: 9, TenSP: "Iphone X", Gia: 19500000, HangSX: "APPLE" },
  { MaSP: 10, TenSP: "Iphone XS", Gia: 17500000, HangSX: "APPLE" },
  { MaSP: 11, TenSP: "Iphone XS Max", Gia: 18500000, HangSX: "APPLE" },
  { MaSP: 12, TenSP: "Iphone 7 Plus", Gia: 10500000, HangSX: "APPLE" },
];

//Lấy ra những sản phẩm thuộc HangSX - SONY
let mangDienThoai = mangSanPham.filter(sp => sp.HangSX === 'APPLE')
console.log(mangDienThoai)