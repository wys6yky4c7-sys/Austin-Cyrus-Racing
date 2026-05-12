import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "ACR 22C Adult Logo Tee - Black",
    price: 25,
    images: [
      "https://i.imgur.com/TN0te2A.jpeg",
      "https://i.imgur.com/giVnQAW.jpg",
      "https://i.imgur.com/KlsxIkf.jpg",
      "https://i.imgur.com/HJ3UmxB.jpg",
      "https://i.imgur.com/qSafYSP.jpg",
      "https://i.imgur.com/TMEvfTi.jpg",
    ],
    stripePriceId: "price_1TUTkLRA7RncxxQnp2UNsEfa",
    category: "adult tees",
  },
  {
    id: 2,
    name: "ACR 22C Adult Logo Tee - Gray",
    price: 25,
    images: [
      "https://i.imgur.com/z0jJo5C.jpg",
      "https://i.imgur.com/kaNgLmQ.jpg",
      "https://i.imgur.com/mdnIBRX.jpg",
      "https://i.imgur.com/iBEARtT.jpg",
      "https://i.imgur.com/9kVQn2b.jpg",
      "https://i.imgur.com/sWXxVBr.jpg",
    ],
    stripePriceId: "price_1TUuNiRA7RncxxQnZY1jR0TM",
    category: "adult tees",
  },
  {
    id: 3,
    name: "ACR 22C Adult Logo Tee - Purple",
    price: 25,
    images: [
      "https://i.imgur.com/a5Yx6wD.jpg",
      "https://i.imgur.com/mgZNfQa.jpg",
      "https://i.imgur.com/QSbAhNW.jpg",
      "https://i.imgur.com/DHItowb.jpg",
      "https://i.imgur.com/aci2JWZ.jpg",
      "https://i.imgur.com/d7wsrCX.jpg",
    ],
    stripePriceId: "price_1TVx69RA7RncxxQnJDUQnGne",
    category: "adult tees",
  },
  {
    id: 4,
    name: "ACR 22C Adult Logo Hoodie - Black",
    price: 35,
    images: [
      "https://i.imgur.com/ERVTBnQ.jpg",
      "https://i.imgur.com/6YNB6RJ.jpg",
      "https://i.imgur.com/vSmdpnS.jpg",
      "https://i.imgur.com/rK5ilLI.jpg",
      "https://i.imgur.com/ekxf3EU.jpg",
      "https://i.imgur.com/3eYXzT4.jpg",
    ],
    stripePriceId: "price_1TUT6ZRA7RncxxQnU6ZztXjF",
    category: "adult hoodies",
  },
  {
    id: 5,
    name: "ACR 22C Adult Logo Hoodie - Gray",
    price: 35,
    images: [
      "https://i.imgur.com/AqFQVBp.jpg",
      "https://i.imgur.com/JPBNeAr.jpg",
      "https://i.imgur.com/1lrgJBT.jpg",
      "https://i.imgur.com/cPi5833.jpg",
      "https://i.imgur.com/2RKX41f.jpg",
      "https://i.imgur.com/dsBnzfS.jpg",
    ],
    stripePriceId: "price_1TUuR5RA7RncxxQnyZYWQgUY",
    category: "adult hoodies",
  },
  {
    id: 6,
    name: "ACR 22C Adult Logo Hoodie - Purple",
    price: 35,
    images: [
      "https://i.imgur.com/Y11ZW18.jpg",
      "https://i.imgur.com/cf2NW6e.jpg",
      "https://i.imgur.com/I6djqrT.jpg",
      "https://i.imgur.com/oiLEwaT.jpg",
      "https://i.imgur.com/RXSLIcx.jpg",
      "https://i.imgur.com/VFAcgIY.jpg",
    ],
    stripePriceId: "price_1TVx6kRA7RncxxQnvQRwQ8dk",
    category: "adult hoodies",
  },
  {
    id: 7,
    name: "ACR 22C Youth Logo Tee - Black",
    price: 20,
    images: [
      "https://i.imgur.com/TN0te2A.jpeg",
      "https://i.imgur.com/giVnQAW.jpg",
      "https://i.imgur.com/KlsxIkf.jpg",
      "https://i.imgur.com/HJ3UmxB.jpg",
      "https://i.imgur.com/qSafYSP.jpg",
      "https://i.imgur.com/TMEvfTi.jpg",
    ],
    stripePriceId: "price_1TW95pRA7RncxxQnFCKk6jGB",
    category: "youth tees",
  },
  {
    id: 8,
    name: "ACR 22C Youth Logo Tee - Gray",
    price: 20,
    images: [
      "https://i.imgur.com/z0jJo5C.jpg",
      "https://i.imgur.com/kaNgLmQ.jpg",
      "https://i.imgur.com/mdnIBRX.jpg",
      "https://i.imgur.com/iBEARtT.jpg",
      "https://i.imgur.com/9kVQn2b.jpg",
      "https://i.imgur.com/sWXxVBr.jpg",
    ],
    stripePriceId: "price_1TW97iRA7RncxxQnyllEe3nP",
    category: "youth tees",
  },
  {
    id: 9,
    name: "ACR 22C Youth Logo Tee - Purple",
    price: 20,
    images: [
      "https://i.imgur.com/a5Yx6wD.jpg",
      "https://i.imgur.com/mgZNfQa.jpg",
      "https://i.imgur.com/QSbAhNW.jpg",
      "https://i.imgur.com/DHItowb.jpg",
      "https://i.imgur.com/aci2JWZ.jpg",
      "https://i.imgur.com/d7wsrCX.jpg",
    ],
    stripePriceId: "price_1TW998RA7RncxxQnHDSOCU3J",
    category: "youth tees",
  },
  {
    id: 10,
    name: "ACR 22C Youth Logo Hoodie - Black",
    price: 30,
    images: [
      "https://i.imgur.com/ERVTBnQ.jpg",
      "https://i.imgur.com/6YNB6RJ.jpg",
      "https://i.imgur.com/vSmdpnS.jpg",
      "https://i.imgur.com/rK5ilLI.jpg",
      "https://i.imgur.com/ekxf3EU.jpg",
      "https://i.imgur.com/3eYXzT4.jpg",
    ],
    stripePriceId: "price_1TW96TRA7RncxxQnbHLw7v5c",
    category: "youth hoodies",
  },
  {
    id: 11,
    name: "ACR 22C Youth Logo Hoodie - Gray",
    price: 30,
    images: [
      "https://i.imgur.com/AqFQVBp.jpg",
      "https://i.imgur.com/JPBNeAr.jpg",
      "https://i.imgur.com/1lrgJBT.jpg",
      "https://i.imgur.com/cPi5833.jpg",
      "https://i.imgur.com/2RKX41f.jpg",
      "https://i.imgur.com/dsBnzfS.jpg",
    ],
    stripePriceId: "price_1TW98URA7RncxxQnuITuDkxr",
    category: "youth hoodies",
  },
  {
    id: 12,
    name: "ACR 22C Youth Logo Hoodie - Purple",
    price: 30,
    images: [
      "https://i.imgur.com/Y11ZW18.jpg",
      "https://i.imgur.com/cf2NW6e.jpg",
      "https://i.imgur.com/I6djqrT.jpg",
      "https://i.imgur.com/oiLEwaT.jpg",
      "https://i.imgur.com/RXSLIcx.jpg",
      "https://i.imgur.com/VFAcgIY.jpg",
    ],
    stripePriceId: "price_1TW99pRA7RncxxQneslsQ3eP",
    category: "youth hoodies",
  },
];
function ProductCard({ p, addToCart, openGallery, styles }) {
  const [selectedSize, setSelectedSize] = useState("");
  const mainImage =
    p.images[0] && !p.images[0].includes("YOUR_") ? p.images[0] : null;

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {mainImage ? (
        <img
          src={mainImage}
          alt={p.name}
          style={styles.image}
          onClick={() => openGallery(p.images)}
        />
      ) : (
        <div style={styles.placeholder}>Coming Soon</div>
      )}

      <h3 style={styles.productName}>{p.name}</h3>
      <p style={styles.price}>${p.price}</p>

      <select
        value={selectedSize}
        onChange={(e) => setSelectedSize(e.target.value)}
        style={styles.sizeSelect}
      >
        <option value="">Select Size</option>

        {(p.category.includes("youth")
          ? ["XS", "S", "M", "L", "XL"]
          : ["S", "M", "L", "XL", "2XL", "3XL", "4XL"]
        ).map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      <button
        style={styles.btn}
        onClick={() => {
          if (!selectedSize) {
            alert("Please select a size.");
            return;
          }

          addToCart({ ...p, selectedSize });
        }}
      >
        {p.stripePriceId ? "Add to Cart" : "Coming Soon"}
      </button>
    </div>
  );
}
export default function App() {
  const [cart, setCart] = useState([]);
  const [gallery, setGallery] = useState(null);
  const [index, setIndex] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  const openGallery = (images) => {
    const goodImages = images.filter((img) => img && !img.includes("YOUR_"));
    if (goodImages.length === 0) return;

    setGallery(goodImages);
    setIndex(0);
  };

  const addToCart = (product) => {
    if (!product.stripePriceId) {
      alert("This item is coming soon.");
      return;
    }

    const exists = cart.find(
      (item) =>
        item.id === product.id && item.selectedSize === product.selectedSize
    );

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }

    setCartOpen(true);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const checkout = async () => {
    if (cart.length === 0) return;

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            price: item.stripePriceId,
            quantity: item.qty,
            size: item.selectedSize,
            name: item.name,
          })),
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong with checkout.");
      }
    } catch (error) {
      alert("Checkout failed. Please try again.");
    }
  };

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <h2 style={styles.logo}>ACR 22C</h2>

        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>
            About
          </a>
          <a href="#merch" style={styles.navLink}>
            Merch
          </a>
          <a href="#footer" style={styles.navLink}>
            Contact
          </a>

          <button style={styles.cartButton} onClick={() => setCartOpen(true)}>
            Cart ({cartCount})
          </button>
        </div>
      </nav>

      <section style={styles.hero}>
        <p style={styles.heroSmall}>Official Merchandise</p>
        <h1 style={styles.heroTitle}>AUSTIN CYRUS RACING</h1>

        <a href="#merch" style={styles.heroButton}>
          SHOP MERCH
        </a>
      </section>

      <section id="about" style={styles.about}>
        <h2 style={styles.sectionTitle}>About Austin Cyrus Racing</h2>

        <p style={styles.aboutText}>
          Austin Cyrus Racing is built on passion, determination, family
          support, and the excitement of sprint car racing. Driven by
          12-year-old Austin Cyrus, the 22C team is dedicated to working hard on
          and off the track while creating memories with fans, friends, and
          family throughout every race season.
        </p>
      </section>

      <section id="merch" style={styles.merchSection}>
        <h2 style={styles.sectionTitle}>Shop Official Merch</h2>

        <h2 style={styles.categoryTitle}>Adult Tees</h2>

        <div style={styles.grid}>
          {PRODUCTS.filter((p) => p.category === "adult tees").map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              addToCart={addToCart}
              openGallery={openGallery}
              styles={styles}
            />
          ))}
        </div>

        <h2 style={styles.categoryTitle}>Adult Hoodies</h2>

        <div style={styles.grid}>
          {PRODUCTS.filter((p) => p.category === "adult hoodies").map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              addToCart={addToCart}
              openGallery={openGallery}
              styles={styles}
            />
          ))}
        </div>

        <h2 style={styles.categoryTitle}>Youth Tees</h2>

        <div style={styles.grid}>
          {PRODUCTS.filter((p) => p.category === "youth tees").map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              addToCart={addToCart}
              openGallery={openGallery}
              styles={styles}
            />
          ))}
        </div>

        <h2 style={styles.categoryTitle}>Youth Hoodies</h2>

        <div style={styles.grid}>
          {PRODUCTS.filter((p) => p.category === "youth hoodies").map((p) => (
            <ProductCard
              key={p.id}
              p={p}
              addToCart={addToCart}
              openGallery={openGallery}
              styles={styles}
            />
          ))}
        </div>
      </section>

      <footer id="footer" style={styles.footer}>
        <h3 style={styles.footerTitle}>Austin Cyrus Racing</h3>
        <div style={styles.sponsorSection}>
          <h3 style={styles.sponsorTitle}>Proud Sponsors</h3>

          <div style={styles.sponsorGrid}>
            <img
              src="https://i.imgur.com/FSIe7e0.jpg"
              alt="Sponsor 1"
              style={styles.sponsorLogo}
            />

            <img
              src="https://i.imgur.com/iM3LxAc.jpg"
              alt="Sponsor 2"
              style={styles.sponsorLogo}
            />

            <img
              src="https://i.imgur.com/jF8J17r.jpg"
              alt="Sponsor 3"
              style={styles.sponsorLogo}
            />
          </div>
        </div>

        <p>
          Follow along for race updates, merchandise drops, and race-day
          content.
        </p>

        <p style={styles.socials}>
          <a
            href="https://instagram.com/austincyrusracing22c"
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
          >
            Instagram
          </a>

          {" | "}

          <a
            href="https://facebook.com/austincyrusracing22"
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
          >
            Facebook
          </a>
        </p>

        <p style={styles.emailText}>
          For sponsorships or merchandise inquiries:
        </p>

        <a href="mailto:aj731c@icloud.com" style={styles.emailLink}>
          aj731c@icloud.com
        </a>

        <p style={styles.copy}>© 2026 Austin Cyrus Racing</p>
      </footer>

      {cartOpen && (
        <div style={styles.cartOverlay}>
          <div style={styles.cartPanel}>
            <button style={styles.closeCart} onClick={() => setCartOpen(false)}>
              ✖
            </button>

            <h2 style={styles.cartTitle}>Your Cart</h2>

            {cart.length === 0 && <p>Your cart is empty.</p>}

            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div>
                  <strong>{item.name}</strong>
                  <p style={styles.cartQty}>Size: {item.selectedSize}</p>
                  <p style={styles.cartQty}>Qty: {item.qty}</p>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}

            <h3>Total: ${total}</h3>

            <button style={styles.checkoutBtn} onClick={checkout}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {gallery && (
        <div style={styles.galleryOverlay}>
          <img src={gallery[index]} style={styles.galleryImage} />

          <div style={{ marginTop: 20 }}>
            <button
              onClick={() =>
                setIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1))
              }
            >
              ◀ Prev
            </button>

            <button
              style={{ marginLeft: 10 }}
              onClick={() =>
                setIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1))
              }
            >
              Next ▶
            </button>

            <button style={{ marginLeft: 10 }} onClick={() => setGallery(null)}>
              Close ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "impact,sans-serif",
  },

  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #222",
    position: "sticky",
    top: 0,
    background: "#48494b",
    zIndex: 100,
  },

  logo: {
    color: "#f8ff00",
    margin: 0,
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 20,
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },

  cartButton: {
    background: "purple",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 20,
    fontWeight: "bold",
    cursor: "pointer",
    fontFamily: "impact",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 20,
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('https://i.imgur.com/jD6uWnr.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center 20%",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },

  heroSmall: {
    color: "#f8ff00",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontWeight: "bold",
  },

  heroTitle: {
    fontSize: "4rem",
    margin: "10px 0",
  },

  heroButton: {
    marginTop: 30,
    background: "purple",
    color: "#fff",
    padding: "16px 34px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: "bold",
  },

  about: {
    padding: "100px 20px",
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  },

  sectionTitle: {
    color: "#f8ff00",
    fontSize: "2.2rem",
    marginBottom: 25,
  },

  aboutText: {
    color: "#ccc",
    lineHeight: 1.8,
    fontSize: "1.1rem",
  },

  merchSection: {
    padding: "80px 40px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 40,
    width: "100%",
    maxWidth: 1500,
    margin: "0 auto",
  },
  card: {
    background: "#48494b",
    padding: 20,
    borderRadius: 20,
    border: "2px solid #f8ff00",
    textAlign: "center",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: 450,
    objectFit: "cover",
    borderRadius: 20,
    cursor: "pointer",
  },

  placeholder: {
    width: "100%",
    height: 450,
    borderRadius: 20,
    background: "#222",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#aaa",
    fontWeight: "bold",
  },

  productName: {
    color: "#e0e0e0",
    minHeight: 50,
  },

  price: {
    color: "#f8ff00",
    fontWeight: "bold",
  },

  btn: {
    background: "purple",
    color: "#fff",
    border: "none",
    padding: 12,
    width: "100%",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: 8,
    fontFamily: "impact",
  },

  footer: {
    background: "#48494b",
    color: "#aaa",
    textAlign: "center",
    padding: "50px 20px",
    borderTop: "2px solid #f8ff00",
  },

  footerTitle: {
    color: "#fff",
    fontSize: "2rem",
    marginBottom: 15,
  },

  socials: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
  },

  socialLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
  },

  emailText: {
    marginTop: 25,
    color: "#ccc",
  },

  emailLink: {
    color: "#f8ff00",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },

  copy: {
    marginTop: 30,
    fontSize: "0.9rem",
    color: "#777",
  },

  cartOverlay: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.55)",
    zIndex: 500,
    display: "flex",
    justifyContent: "flex-end",
  },

  cartPanel: {
    background: "#111",
    color: "#fff",
    width: 360,
    maxWidth: "90%",
    height: "100%",
    padding: 25,
    overflowY: "auto",
  },

  closeCart: {
    float: "right",
    background: "transparent",
    color: "#fff",
    border: "none",
    fontSize: 20,
    cursor: "pointer",
  },

  cartTitle: {
    color: "#f8ff00",
    marginTop: 20,
  },

  cartItem: {
    borderBottom: "1px solid #333",
    padding: "15px 0",
    display: "flex",
    justifyContent: "space-between",
  },

  cartQty: {
    color: "#aaa",
  },

  removeBtn: {
    color: "red",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontFamily: "impact",
  },

  checkoutBtn: {
    background: "purple",
    color: "#fff",
    padding: 14,
    border: "none",
    width: "100%",
    fontWeight: "bold",
    marginTop: 10,
    cursor: "pointer",
    borderRadius: 8,
    fontFamily: "impact",
  },

  galleryOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.92)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },

  galleryImage: {
    width: "70%",
    maxHeight: "80vh",
    objectFit: "contain",
    borderRadius: 12,
  },
  sponsorSection: {
    marginTop: 30,
  },

  sponsorTitle: {
    color: "#f8ff00",
    marginBottom: 20,
    fontSize: "1.5rem",
  },

  sponsorGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
  },

  sponsorLogo: {
    width: 100,
    maxHeight: 80,
    objectFit: "contain",
    background: "#fff",
    padding: 4,
    borderRadius: 5,
  },
  categoryTitle: {
    color: "purple",
    fontSize: "2rem",
    marginTop: 60,
    marginBottom: 30,
    textAlign: "center",
  },
  sizeSelect: {
    width: "100%",
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    border: "none",
    fontFamily: "impact",
    background: "#d3d3d3",
    color: "#000",
  },
};
