const nav = document.querySelector("nav");
const daftarMenu = document.querySelector(".daftar-menu");
const stock = document.querySelector(".stock");
const jmlMenu = document.querySelector(".jumlah-menu");

const menu = [
  {
    nama: "Nasi Goreng",
    harga: 12000,
    stock: 10,
    gambar:
      "https://i0.wp.com/tastynesia.com/wp-content/uploads/2020/01/Resep-Nasi-Goreng-Kampung.jpg",
  },
  {
    nama: "Nasi Kuning",
    harga: 16000,
    stock: 5,
    gambar:
      "https://asset.kompas.com/crops/j7VpBtaxO6tlRs9s_SNzgwFkc-I=/0x0:1000x667/750x500/data/photo/2020/06/22/5ef0cb1fadc39.jpg",
  },
  {
    nama: "Sate Ayam",
    harga: 25000,
    stock: 12,
    gambar: "https://kbu-cdn.com/dk/wp-content/uploads/sate-ayam.jpg",
  },
  {
    nama: "Mie Ayam",
    harga: 22500,
    stock: 8,
    gambar:
      "https://www.masakapahariini.com/wp-content/uploads/2019/08/mie-ayam-kecap-620x440.jpg",
  },
  {
    nama: "Martabak Manis",
    harga: 25000,
    stock: 13,
    gambar: "https://kbu-cdn.com/dk/wp-content/uploads/martabak-manis.jpg",
  },
  {
    nama: "Pecel Lele",
    harga: 17000,
    stock: 5,
    gambar:
      "https://s3-ap-southeast-1.amazonaws.com/magazine.job-like.com/magazine/wp-content/uploads/2018/02/11120204/pecel-lele-589f2bcc917a610915ff4e44.jpg",
  },
  {
    nama: "Ayam Geprek",
    harga: 18000,
    stock: 7,
    gambar:
      "https://img-global.cpcdn.com/recipes/5aae6ac60932a642/751x532cq70/ayam-geprek-sambal-bawang-foto-resep-utama.jpg",
  },
  {
    nama: "Ayam Bakar",
    harga: 22000,
    stock: 3,
    gambar:
      "https://selerasa.com/wp-content/uploads/2015/12/images_daging_ayam-panggang-bumbu-spesial.jpg",
  },
  {
    nama: "Rujak Buah",
    harga: 10000,
    stock: 6,
    gambar:
      "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/10/03/2581259407.jpg",
  },
];

const numberFormat = (price) => {
  price = price.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(price)) price = price.replace(pattern, "$1,$2");
  return price;
};

const showFood = () => {
  menu.map((food) => {
    daftarMenu.innerHTML += `
    <div class="menu-item">
      <div class="menu-image">
        <img
          src="${food.gambar}"
          alt="food"
        />
      </div>
      <div class="menu-info">
        <h1 class="title">Rp ${numberFormat(food.harga)}</h1>
        <h3>${food.nama}</h3>
        <p>Sisa : ${food.stock} Porsi</p>
      </div>
      <i class="fas fa-cart-plus cart" id="addToCart"></i>
    </div>
  `;
  });
};

const searchFood = () => {
  const keyword = document.querySelector("#keyword").value;
  const filteredFood = menu.filter((food) =>
    food.nama.toUpperCase().includes(keyword.toUpperCase())
  );
  if (filteredFood == "") {
    return (daftarMenu.innerHTML =
      "<h1> Makanan yang anda cari tidak ada </h1>");
  }
  daftarMenu.innerHTML = "";
  filteredFood.map((food) => {
    daftarMenu.innerHTML += `
    <div class="menu-item">
      <div class="menu-image">
        <img
          src="${food.gambar}"
          alt="food"
        />
      </div>
      <div class="menu-info">
        <h1 class="title">Rp ${numberFormat(food.harga)}</h1>
        <h3>${food.nama}</h3>
        <p>Sisa : ${food.stock} Porsi</p>
      </div>
      <i class="fas fa-cart-plus cart" id="addToCart"></i>
    </div>
  `;
  });
};

const totalStock = menu.reduce((val, food) => {
  return val + food.stock;
}, 0);

stock.innerHTML = totalStock;
jmlMenu.innerHTML = menu.length;

// Event
document.addEventListener("DOMContentLoaded", showFood);
keyword.addEventListener("keyup", searchFood);
