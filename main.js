const toggleSidebarHandler = (element) => {
  sidebarHTMLElement.classList.toggle("active");
  contentHTMLElement.classList.toggle("active");
  headerHTMLElement.classList.toggle("active");
  console.log(headerHTMLElement);
};

const toggleSidebarHTMLElement = document.querySelector("#toggle-sidebar");
const sidebarHTMLElement = document.querySelector(".sidebar");
const contentHTMLElement = document.querySelector(".content");
const headerHTMLElement = document.querySelector(".header");

toggleSidebarHTMLElement.addEventListener(
  "click",
  () => toggleSidebarHandler(sidebarHTMLElement)
  //toggleSidebarHandler(sidebarHTMLElement)
);
