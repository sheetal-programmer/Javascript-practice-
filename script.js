const productContainer = document.getElementById("productContainer");
const loader = document.getElementById("loader");
const errorMessage = document.getElementById("errorMessage");

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const lowToHighBtn = document.getElementById("lowToHigh");
const highToLowBtn = document.getElementById("highToLow");

const productModal = document.getElementById("productModal");
const modalDetails = document.getElementById("modalDetails");
const closeModal = document.getElementById("closeModal");

let allProducts = [];
let filteredProducts = [];

// -------------------------------
// 1. Fetch Products from API
// -------------------------------
async function fetchProducts() {
  loader.style.display = "block";
  errorMessage.textContent = "";

  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      throw new Error("API Failed");
    }

    const data = await response.json();

    allProducts = data;
    filteredProducts = data;

    displayProducts(filteredProducts);
  } catch (error) {
    errorMessage.textContent = "Error loading data";
  } finally {
    loader.style.display = "none";
  }
}

// -------------------------------
// 2. Display Products
// -------------------------------
function displayProducts(products) {
  productContainer.innerHTML = "";

  if (products.length === 0) {
    productContainer.innerHTML = "<h2 style='text-align:center;'>No products found</h2>";
    return;
  }

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Title limit to 20 chars
    const shortTitle =
      product.title.length > 20
        ? product.title.slice(0, 20) + "..."
        : product.title;

    // Description limit to 60 chars
    const shortDescription =
      product.description.length > 60
        ? product.description.slice(0, 60) + "..."
        : product.description;

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${shortTitle}</h3>
      <p>${shortDescription}</p>
      <button class="price-btn">₹ ${product.price}</button>
      <button class="view-btn" onclick="showDetails(${product.id})">View More</button>
    `;

    productContainer.appendChild(card);
  });
}

// -------------------------------
// 3. Search Filter
// -------------------------------
searchInput.addEventListener("input", () => {
  applyFilters();
});

// -------------------------------
// 4. Category Filter
// -------------------------------
categoryFilter.addEventListener("change", () => {
  applyFilters();
});

// -------------------------------
// 5. Apply Search + Category
// -------------------------------
function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  filteredProducts = allProducts.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchValue);
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}

// -------------------------------
// 6. Sort Low to High
// -------------------------------
lowToHighBtn.addEventListener("click", () => {
  const sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  displayProducts(sortedProducts);
});

// -------------------------------
// 7. Sort High to Low
// -------------------------------
highToLowBtn.addEventListener("click", () => {
  const sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  displayProducts(sortedProducts);
});

// -------------------------------
// 8. View More Modal
// -------------------------------
function showDetails(id) {
  const product = allProducts.find((item) => item.id === id);

  modalDetails.innerHTML = `
    <h2>${product.title}</h2>
    <img src="${product.image}" alt="${product.title}">
    <p><strong>Category:</strong> ${product.category}</p>
    <p><strong>Price:</strong> ₹ ${product.price}</p>
    <p><strong>Rating:</strong> ${product.rating.rate} ⭐ (${product.rating.count} reviews)</p>
    <p><strong>Description:</strong> ${product.description}</p>
  `;

  productModal.style.display = "block";
}

// Close modal button
closeModal.addEventListener("click", () => {
  productModal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === productModal) {
    productModal.style.display = "none";
  }
});

// -------------------------------
// 9. Call Fetch Function
// -------------------------------
fetchProducts();