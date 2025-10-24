const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

// tìm kiếm sản phẩm theo tên
searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.toLowerCase().trim();
  const products = document.querySelectorAll(".product-item");

  products.forEach((item) => {
    const name = item.querySelector(".product-name").textContent.toLowerCase();
    // nếu tên chứa từ khóa thì hiển thị, ngược lại ẩn
    item.style.display = name.includes(keyword) ? "" : "none";
  });
});

// ẩn hoặc hiện form thêm sản phẩm
const addProductBtn = document.getElementById("addProductBtn");
const addProductForm = document.getElementById("addProductForm");

addProductBtn.addEventListener("click", () => {
  addProductForm.classList.toggle("hidden");
});

// thêm sản phẩm mới vào danh sách
addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("newName").value.trim();
  const price = document.getElementById("newPrice").value.trim();
  const desc = document.getElementById("newDesc").value.trim();

  // tạo thẻ sản phẩm mới
  const newItem = document.createElement("article");
  newItem.classList.add("product-item");
  newItem.innerHTML = `
    <h3 class="product-name">${name}</h3>
    <img src="assest/default.jpg" alt="ảnh sản phẩm mới" />
    <p class="product-desc">${desc}</p>
    <p class="product-price">Giá: <span>${Number(
      price
    ).toLocaleString()}₫</span></p>
    <button class="delete-btn">xóa</button>
  `;

  document.getElementById("product-list").appendChild(newItem);

  // reset form sau khi thêm
  addProductForm.reset();
  addProductForm.classList.add("hidden");
});

// xóa sản phẩm khi bấm nút xóa
document.getElementById("product-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});
