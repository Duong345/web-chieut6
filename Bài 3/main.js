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

// khi bấm nút thì ẩn/hiện form
addProductBtn.addEventListener("click", () => {
  addProductForm.classList.toggle("hidden");
});
