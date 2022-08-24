const dropdownContent = document.getElementById('dropdown-content');
const imgBtn = document.getElementById('img-btn');

imgBtn.onclick = function () {
    if (dropdownContent.style.display !== "none") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
};