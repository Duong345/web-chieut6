// tìm kiếm / lọc sản phẩm
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function filterProducts() {
  const keyword = searchInput.value.toLowerCase().trim();
  const products = document.querySelectorAll(".product-item");

  products.forEach((item) => {
    const name = item.querySelector(".product-name").textContent.toLowerCase();
    item.style.display = name.includes(keyword) ? "" : "none";
  });
}

searchBtn.addEventListener("click", filterProducts);

// cho phép bấm enter để tìm kiếm
searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") filterProducts();
});

// ẩn / hiện form thêm sản phẩm
const addProductBtn = document.getElementById("addProductBtn");
const addProductForm = document.getElementById("addProductForm");

addProductBtn.addEventListener("click", () => {
  addProductForm.classList.toggle("hidden");
});

// xử lý khi submit form thêm sản phẩm
const productList = document.getElementById("product-list");

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("newName").value.trim();
  const price = document.getElementById("newPrice").value.trim();
  const desc = document.getElementById("newDesc").value.trim();

  // kiểm tra dữ liệu hợp lệ
  if (!name || !price || isNaN(price) || Number(price) <= 0) {
    alert("vui lòng nhập tên và giá hợp lệ (giá > 0)");
    return;
  }

  // tạo sản phẩm mới
  const newItem = document.createElement("article");
  newItem.className = "product-item";

  newItem.innerHTML = `
    <h3 class="product-name">${name}</h3>
    <img src="assest/book-placeholder.jpg" alt="ảnh sản phẩm mới" />
    <p class="product-desc">${desc || "không có mô tả."}</p>
    <p class="product-price">giá: <span>${Number(
      price
    ).toLocaleString()}₫</span></p>
  `;

  // thêm sản phẩm mới lên đầu danh sách
  productList.prepend(newItem);

  // reset form và ẩn lại
  addProductForm.reset();
  addProductForm.classList.add("hidden");

  // cập nhật lại tìm kiếm
  filterProducts();
});
