<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Restoku</title>
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}" />
    <link rel="stylesheet" href="{{ asset('font-awasome/css/all.css') }}" />
    <link
      href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <nav>
      <div class="container">
        <h1 class="title">Restoku</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li>
            <a href="#"><i class="fas fa-shopping-cart"></i></a>
          </li>
        </ul>
      </div>
    </nav>

    <main id="home">
      <div class="container">
        <h1>Nikmati menu favoritmu Bersama keluarga</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ultricies
          nulla. Aliquam tincidunt ullamcorper metus Integer laoreet ultricies
          nisl sed finibus.
        </p>
        <a href="#menu" class="btn">Order Sekarang</a>
      </div>
    </main>

    <section class="menu container" id="menu">
      <div class="info-menu">
        <div>
          <h4>Jumlah Menu</h4>
          <h1 class="jumlah-menu">0</h1>
        </div>
        <div>
          <h4>Total Stock</h4>
          <h1 class="stock">0</h1>
        </div>
      </div>
      <div class="search-bar">
        <input
          type="text"
          id="keyword"
          placeholder="Mau makan apa hari ini ?"
        />
      </div>
      <div class="daftar-menu"></div>
    </section>

    <footer>
      <h1 class="title">Restoku</h1>
      <p>&copy Restoku Indonesia - All right reserved</p>
    </footer>

    <script src="{{ asset('/js/script.js') }}"></script>
  </body>
</html>
