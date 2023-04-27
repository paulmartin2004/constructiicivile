// meniu

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

// butonul "mai mult"
function showMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("moreBtn");

    if (moreText.style.display === "none") {
        btnText.innerHTML = "Mai puțin...";
        moreText.style.display = "inline";
        moreText.style.color = "var(--second-color)";
        moreText.style.fontSize = "var(--p-font)";
        moreText.style.textAlign = "justify";
    } else {
        btnText.innerHTML = "Mai mult...";
        moreText.style.display = "none";
    }
}

// butonul "citeste mai mult"
function toggleReadMore(id, button) {
    var moreText = document.getElementById(id);
    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        button.innerHTML = "Afișează mai puțin...";
        moreText.style.display = "inline";
        moreText.style.color = "var(--second-color)";
        moreText.style.fontSize = "15px;";
        moreText.style.textAlign = "justify";
        button.style.background = "#ffffff99";
        button.style.color = "var(--text-color)";
    } else {
        moreText.style.display = "none";
        button.innerHTML = "Citește mai mult...";
        button.style.background = "#333333";
        button.style.color = "var(--second-color)";
    }
}

// image slide


// var k = 1;
// setInterval(() => {
//     $(".acasa").css("background-image", "url(img/background" + k + ".jpg)");
//     console.log("K=" + k);
//     if (k === 7)
//         k = 0;
//     k++;
// }, 3000);

const imageUrls = [
    "img/background1.jpg",
    "img/background2.jpg",
    "img/background3.jpg",
    "img/background4.jpg",
    "img/background5.jpg",
    "img/background6.jpg",
    "img/background7.jpg"
  ];
  
  const images = [];
  
  for (let i = 0; i < imageUrls.length; i++) {
    const img = new Image();
    img.src = imageUrls[i];
    images.push(img);
  }
  
  let k = 0;
  setInterval(() => {
    document.querySelector(".acasa").style.backgroundImage = "url(" + imageUrls[k % 7] + ")";
    k++;
  }, 3000);
  