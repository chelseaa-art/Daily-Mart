import { useMemo, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Beras Premium",
    category: "Sembako",
    price: 15000,
    emoji: "🍚",
    unit: "1 kg",
  },
  {
    id: 2,
    name: "Telur Ayam",
    category: "Sembako",
    price: 3000,
    emoji: "🥚",
    unit: "1 butir",
  },
  {
    id: 3,
    name: "Minyak Goreng",
    category: "Sembako",
    price: 18000,
    emoji: "🫗",
    unit: "1 liter",
  },
   {
    id: 4,
    name: "Garam",
    category: "Sembako",
    price: 5000,
    emoji: "🧂",
    unit: "500 gram",
  },
   {
    id: 5,
    name: "Kecap Manis",
    category: "Sembako",
    price: 15000,
    emoji: "🫙",
    unit: "600 ml",
  },
  {
    id: 6,
    name: "Susu UHT",
    category: "Minuman",
    price: 15000,
    emoji: "🥛",
    unit: "1 kotak",
  },
  {
    id: 7,
    name: "Air Mineral",
    category: "Minuman",
    price: 5000,
    emoji: "💧",
    unit: "600 ml",
  },
  {
    id: 8,
    name: "Teh Celup",
    category: "Minuman",
    price: 12000,
    emoji: "🍵",
    unit: "25 sachet",
  },
    {
    id: 9,
    name: "Jus Buah",
    category: "Minuman",
    price: 12000,
    emoji: "🧃",
    unit: "250 ml",
  },
  {
    id: 10,
    name: "Roti Tawar",
    category: "Makanan",
    price: 12000,
    emoji: "🍞",
    unit: "1 bungkus",
  },
  {
    id: 11,
    name: "Biskuit",
    category: "Makanan",
    price: 10000,
    emoji: "🍪",
    unit: "1 bungkus",
  },
   {
    id: 12,
    name: "Sereal",
    category: "Makanan",
    price: 28000,
    emoji: "🥣",
    unit: "300 gram",
  },
  {
    id: 13,
    name: "Keju",
    category: "Makanan",
    price: 22000,
    emoji: "🧀",
    unit: "170 gram",
  },
  {
    id: 14,
    name: "Selai Cokelat",
    category: "Makanan",
    price: 23000,
    emoji: "🍫",
    unit: "200 gram",
  },
  {
    id: 15,
    name: "Sabun Mandi",
    category: "Kebersihan",
    price: 8000,
    emoji: "🧼",
    unit: "1 pcs",
  },
  {
    id: 16,
    name: "Sampo",
    category: "Kebersihan",
    price: 18000,
    emoji: "🧴",
    unit: "170 ml",
  },
  {
    id: 17,
    name: "Deterjen",
    category: "Kebersihan",
    price: 18000,
    emoji: "🧺",
    unit: "800 gram",
  },
  {
    id: 18,
    name: "Tisu",
    category: "Rumah",
    price: 10000,
    emoji: "🧻",
    unit: "1 pack",
  },
   {
    id: 19,
    name: "Sabun Cuci Piring",
    category: "Kebersihan",
    price: 12000,
    emoji: "🫧",
    unit: "500 ml",
  },
  {
    id: 20,
    name: "Kopi",
    category: "Minuman",
    price: 15000,
    emoji: "☕",
    unit: "10 sachet",
  },
  {
    id: 21,
    name: "Mi Instan",
    category: "Makanan",
    price: 3000,
    emoji: "🍜",
    unit: "1 bungkus",
  },
  {
    id: 22,
    name: "Buah Apel",
    category: "Buah & Sayur",
    price: 25000,
    emoji: "🍎",
    unit: "1 kg",
  },
   {
    id: 23,
    name: "Pisang",
    category: "Buah & Sayur",
    price: 18000,
    emoji: "🍌",
    unit: "1 sisir",
  },
  {
    id: 24,
    name: "Jeruk",
    category: "Buah & Sayur",
    price: 20000,
    emoji: "🍊",
    unit: "1 kg",
  },
   {
    id: 25,
    name: "Tomat",
    category: "Buah & Sayur",
    price: 10000,
    emoji: "🍅",
    unit: "500 gram",
  },
  {
    id: 26,
    name: "Wortel",
    category: "Buah & Sayur",
    price: 12000,
    emoji: "🥕",
    unit: "500 gram",
  },
   {
    id: 27,
    name: "Kentang",
    category: "Buah & Sayur",
    price: 15000,
    emoji: "🥔",
    unit: "1 kg",
  },
  {
    id: 28,
    name: "Pasta Gigi",
    category: "Kebersihan",
    price: 13000,
    emoji: "🪥",
    unit: "120 gram",
  },
   {
    id: 29,
    name: "Pewangi Pakaian",
    category: "Kebersihan",
    price: 15000,
    emoji: "🌸",
    unit: "900 ml",
  },
  {
    id: 30,
    name: "Sapu",
    category: "Rumah",
    price: 25000,
    emoji: "🧹",
    unit: "1 pcs",
  },
  {
  id: 31,
  name: "Daging Sapi",
  category: "Daging & Protein",
  price: 85000,
  emoji: "🥩",
  unit: "500 gram",
},
{
  id: 32,
  name: "Daging Ayam",
  category: "Daging & Protein",
  price: 38000,
  emoji: "🍗",
  unit: "1 ekor",
},
{
  id: 33,
  name: "Udang",
  category: "Daging & Protein",
  price: 55000,
  emoji: "🦐",
  unit: "500 gram",
},
{
  id: 34,
  name: "Ikan Nila",
  category: "Daging & Protein",
  price: 35000,
  emoji: "🐟",
  unit: "1 kg",
},
{
  id: 35,
  name: "Bayam",
  category: "Buah & Sayur",
  price: 7000,
  emoji: "🥬",
  unit: "1 ikat",
},
  {
  id: 36,
  name: "Kangkung",
  category: "Buah & Sayur",
  price: 6000,
  emoji: "🌿",
  unit: "1 ikat",
},
{
  id:37,
  name: "Cabai Merah",
  category: "Buah & Sayur",
  price: 18000,
  emoji: "🌶️",
  unit: "250 gram",
},
{
  id: 38,
  name: "Bawang Merah",
  category: "Buah & Sayur",
  price: 15000,
  emoji: "🧅",
  unit: "250 gram",
},
{
  id: 39,
  name: "Bawang Putih",
  category: "Buah & Sayur",
  price: 14000,
  emoji: "🧄",
  unit: "250 gram",
},
{
  id: 40,
  name: "Timun",
  category: "Buah & Sayur",
  price: 8000,
  emoji: "🥒",
  unit: "500 gram",
},
];

const categories = [
  "Semua",
  "Sembako",
  "Makanan",
  "Minuman",
  "Kebersihan",
  "Rumah",
  "Daging & Protein",
  "Buah & Sayur",
];

function App() {
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [delivery, setDelivery] = useState("regular");
  const [payment, setPayment] = useState("qris");
  const [orderNumber, setOrderNumber] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      category === "Semua" || product.category === category;

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const totalItems = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cart]);

  const shippingCost = delivery === "express" ? 18000 : 10000;

  const totalPrice = subtotal + (cart.length > 0 ? shippingCost : 0);

  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(number);
  }

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  function checkout() {
    const number = `DM-${Date.now().toString().slice(-6)}`;

    setOrderNumber(number);
    setPage("success");
  }

  function resetShopping() {
    setCart([]);
    setCategory("Semua");
    setSearch("");
    setDelivery("regular");
    setPayment("qris");
    setPage("shop");
  }

  return (
    <div className="app">

      <header className="navbar">
        <div
          className="logo"
          onClick={() => setPage("home")}
        >
          <div className="logo-icon">🛒</div>

          <div>
            <h2>Daily<span>Mart</span></h2>
            <small>Daily shopping</small>
          </div>
        </div>

        <nav>
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Beranda
          </button>

          <button
            className={page === "shop" ? "active" : ""}
            onClick={() => setPage("shop")}
          >
            Belanja
          </button>
        </nav>

        <button
          className="cart-button"
          onClick={() => setPage("cart")}
        >
          🛍️
          <span>Keranjang</span>

          {totalItems > 0 && (
            <b>{totalItems}</b>
          )}
        </button>
      </header>

      {/* ================= HOME ================= */}

      {page === "home" && (
        <main className="home-page">

          <section className="hero">

            <div className="hero-content">

              <div className="badge">
                ✨ Kebutuhan harian lebih praktis
              </div>

              <h1>
                Belanja kebutuhan
                <br />
                <span>tanpa ribet.</span>
              </h1>

              <p>
                Temukan berbagai kebutuhan rumah,
                makanan, minuman, dan keperluan sehari-hari
                dalam satu tempat.
              </p>

              <button
                className="primary-button"
                onClick={() => setPage("shop")}
              >
                Mulai Belanja
                <span>→</span>
              </button>

              <div className="hero-info">
                <div>
                  <strong>12+</strong>
                  <span>Produk</span>
                </div>

                <div>
                  <strong>5</strong>
                  <span>Kategori</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Belanja</span>
                </div>
              </div>

            </div>

            <div className="hero-visual">

              <div className="circle"></div>

              <div className="floating-card card-one">
                🍎
                <div>
                  <strong>Buah Segar</strong>
                  <small>Selalu fresh</small>
                </div>
              </div>

              <div className="floating-card card-two">
                🥛
                <div>
                  <strong>Minuman</strong>
                  <small>Lengkap & praktis</small>
                </div>
              </div>

              <div className="shopping-basket">
                <div className="basket-handle"></div>

                <div className="basket-items">
                  <span>🍎</span>
                  <span>🥛</span>
                  <span>🍞</span>
                  <span>🥚</span>
                </div>

                <div className="basket-body"></div>
              </div>

            </div>

          </section>

          <section className="benefits">

            <div className="benefit">
              <div>🚚</div>
              <section>
                <strong>Pengiriman Praktis</strong>
                <p>Pesanan diantar ke rumah.</p>
              </section>
            </div>

            <div className="benefit">
              <div>💳</div>
              <section>
                <strong>Pembayaran Mudah</strong>
                <p>QRIS, transfer atau COD.</p>
              </section>
            </div>

            <div className="benefit">
              <div>🛍️</div>
              <section>
                <strong>Produk Lengkap</strong>
                <p>Kebutuhan sehari-hari tersedia.</p>
              </section>
            </div>

          </section>

        </main>
      )}

      {/* ================= SHOP ================= */}

      {page === "shop" && (
        <main className="shop-page">

          <div className="page-heading">
            <div>
              <span className="eyebrow">DAILY MART</span>

              <h1>
                Mau belanja apa
                <span> hari ini?</span>
              </h1>

              <p>
                Pilih kebutuhanmu dan masukkan ke keranjang.
              </p>
            </div>

            <div className="mini-cart">
              🛒 {totalItems} barang
            </div>
          </div>

          <div className="shop-controls">

            <div className="search-box">
              🔍

              <input
                type="text"
                placeholder="Cari produk..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <div className="category-list">

              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item ? "selected" : ""
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          <div className="product-grid">

            {filteredProducts.map((product) => (

              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-image">
                  <span>{product.emoji}</span>

                  <small>
                    {product.category}
                  </small>
                </div>

                <div className="product-info">

                  <h3>{product.name}</h3>

                  <p>{product.unit}</p>

                  <div className="product-bottom">

                    <strong>
                      {formatRupiah(product.price)}
                    </strong>

                    <button
                      className="add-button"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {filteredProducts.length === 0 && (
            <div className="empty-search">
              🔍
              <h3>Produk tidak ditemukan</h3>
              <p>
                Coba gunakan kata kunci atau kategori lain.
              </p>
            </div>
          )}

        </main>
      )}

      {/* ================= CART ================= */}

      {page === "cart" && (
        <main className="cart-page">

          <div className="page-heading">
            <div>
              <span className="eyebrow">SHOPPING CART</span>

              <h1>
                Keranjang
                <span> belanja</span>
              </h1>

              <p>
                Periksa kembali kebutuhan yang kamu pilih.
              </p>
            </div>
          </div>

          {cart.length === 0 ? (

            <div className="empty-cart">

              <div className="empty-cart-icon">
                🛒
              </div>

              <h2>Keranjang masih kosong</h2>

              <p>
                Yuk pilih kebutuhan harianmu terlebih dahulu.
              </p>

              <button
                className="primary-button"
                onClick={() => setPage("shop")}
              >
                Mulai Belanja
              </button>

            </div>

          ) : (

            <div className="cart-layout">

              <section className="cart-items">

                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <div className="cart-product-icon">
                      {item.emoji}
                    </div>

                    <div className="cart-product-info">

                      <h3>{item.name}</h3>

                      <p>{item.unit}</p>

                      <strong>
                        {formatRupiah(item.price)}
                      </strong>

                    </div>

                    <div className="quantity">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>

                    <div className="item-total">
                      {formatRupiah(
                        item.price * item.quantity
                      )}
                    </div>

                    <button
                      className="delete-button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      ×
                    </button>

                  </div>

                ))}

                <button
                  className="continue-shopping"
                  onClick={() => setPage("shop")}
                >
                  ← Lanjut Belanja
                </button>

              </section>

              <aside className="summary-card">

                <h2>Ringkasan Belanja</h2>

                <div className="summary-row">
                  <span>Total barang</span>
                  <strong>{totalItems}</strong>
                </div>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <strong>
                    {formatRupiah(subtotal)}
                  </strong>
                </div>

                <div className="summary-row">
                  <span>Ongkir</span>
                  <strong>
                    {formatRupiah(shippingCost)}
                  </strong>
                </div>

                <hr />

                <div className="summary-total">
                  <span>Total</span>

                  <strong>
                    {formatRupiah(totalPrice)}
                  </strong>
                </div>

                <button
                  className="checkout-button"
                  onClick={() => setPage("checkout")}
                >
                  Checkout →
                </button>

              </aside>

            </div>

          )}

        </main>
      )}

      {/* ================= CHECKOUT ================= */}

      {page === "checkout" && (
        <main className="checkout-page">

          <div className="page-heading">

            <div>
              <span className="eyebrow">CHECKOUT</span>

              <h1>
                Selesaikan
                <span> pesanan</span>
              </h1>

              <p>
                Tinggal beberapa langkah lagi.
              </p>
            </div>

          </div>

          <div className="checkout-layout">

            <section className="checkout-form">

              <div className="form-card">

                <h2>📍 Alamat Pengiriman</h2>

                <label>Nama Lengkap</label>

                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                />

                <label>Alamat</label>

                <textarea
                  placeholder="Masukkan alamat lengkap"
                  rows="3"
                ></textarea>

                <label>Nomor Telepon</label>

                <input
                  type="text"
                  placeholder="08xxxxxxxxxx"
                />

              </div>

              <div className="form-card">

                <h2>🚚 Metode Pengiriman</h2>

                <div className="option-list">

                  <label
                    className={
                      delivery === "regular"
                        ? "option selected-option"
                        : "option"
                    }
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={delivery === "regular"}
                      onChange={() =>
                        setDelivery("regular")
                      }
                    />

                    <div>
                      <strong>Pengiriman Regular</strong>
                      <small>30–60 menit</small>
                    </div>

                    <b>Rp10.000</b>
                  </label>

                  <label
                    className={
                      delivery === "express"
                        ? "option selected-option"
                        : "option"
                    }
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={delivery === "express"}
                      onChange={() =>
                        setDelivery("express")
                      }
                    />

                    <div>
                      <strong>Pengiriman Express</strong>
                      <small>15–30 menit</small>
                    </div>

                    <b>Rp18.000</b>
                  </label>

                </div>

              </div>

              <div className="form-card">

                <h2>💳 Metode Pembayaran</h2>

                <div className="payment-grid">

                  <button
                    className={
                      payment === "qris"
                        ? "payment selected-payment"
                        : "payment"
                    }
                    onClick={() => setPayment("qris")}
                  >
                    <span>📱</span>
                    <strong>QRIS</strong>
                    <small>Scan & bayar</small>
                  </button>

                  <button
                    className={
                      payment === "transfer"
                        ? "payment selected-payment"
                        : "payment"
                    }
                    onClick={() =>
                      setPayment("transfer")
                    }
                  >
                    <span>🏦</span>
                    <strong>Transfer</strong>
                    <small>Bank transfer</small>
                  </button>

                  <button
                    className={
                      payment === "cod"
                        ? "payment selected-payment"
                        : "payment"
                    }
                    onClick={() => setPayment("cod")}
                  >
                    <span>💵</span>
                    <strong>COD</strong>
                    <small>Bayar di tempat</small>
                  </button>

                </div>

              </div>

            </section>

            <aside className="summary-card checkout-summary">

              <h2>Pesanan Kamu</h2>

              <div className="checkout-products">

                {cart.map((item) => (

                  <div
                    className="checkout-product"
                    key={item.id}
                  >
                    <span className="checkout-emoji">
                      {item.emoji}
                    </span>

                    <div>
                      <strong>{item.name}</strong>
                      <small>
                        {item.quantity} ×{" "}
                        {formatRupiah(item.price)}
                      </small>
                    </div>

                    <b>
                      {formatRupiah(
                        item.price * item.quantity
                      )}
                    </b>
                  </div>

                ))}

              </div>

              <hr />

              <div className="summary-row">
                <span>Subtotal</span>
                <strong>
                  {formatRupiah(subtotal)}
                </strong>
              </div>

              <div className="summary-row">
                <span>Ongkir</span>
                <strong>
                  {formatRupiah(shippingCost)}
                </strong>
              </div>

              <div className="summary-total">
                <span>Total</span>

                <strong>
                  {formatRupiah(totalPrice)}
                </strong>
              </div>

              <button
                className="checkout-button"
                onClick={checkout}
              >
                Bayar Sekarang
              </button>

              <button
                className="back-button"
                onClick={() => setPage("cart")}
              >
                ← Kembali ke Keranjang
              </button>

            </aside>

          </div>

        </main>
      )}

      {/* ================= SUCCESS ================= */}

      {page === "success" && (
        <main className="success-page">

          <div className="success-card">

            <div className="success-icon">
              ✓
            </div>

            <div className="success-badge">
              PAYMENT SUCCESSFUL
            </div>

            <h1>
              Pesanan berhasil!
            </h1>

            <p>
              Terima kasih sudah berbelanja di DailyMart.
              Pesananmu sedang diproses dan akan segera
              dikirim.
            </p>

            <div className="order-number">
              <span>Nomor Pesanan</span>
              <strong>{orderNumber}</strong>
            </div>

            <div className="success-details">

              <div>
                <span>🛍️ Barang</span>
                <strong>{totalItems} item</strong>
              </div>

              <div>
                <span>🚚 Pengiriman</span>
                <strong>
                  {delivery === "express"
                    ? "Express"
                    : "Regular"}
                </strong>
              </div>

              <div>
                <span>💳 Pembayaran</span>
                <strong>
                  {payment === "qris"
                    ? "QRIS"
                    : payment === "transfer"
                    ? "Transfer"
                    : "COD"}
                </strong>
              </div>

              <div>
                <span>💰 Total</span>
                <strong>
                  {formatRupiah(totalPrice)}
                </strong>
              </div>

            </div>

            <button
              className="primary-button"
              onClick={resetShopping}
            >
              Belanja Lagi
            </button>

          </div>

        </main>
      )}

      {/* ================= FOOTER ================= */}

      <footer>
        <div>
          <strong>🛒 DailyMart</strong>
          <p>
            Kebutuhan harian dalam satu keranjang.
          </p>
        </div>

        <span>
          React • Daily Shopping Experience
        </span>
      </footer>

    </div>
  );
}

export default App;