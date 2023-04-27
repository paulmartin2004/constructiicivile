function createModal(id, images) {
    const modal = document.createElement("div");
    modal.setAttribute("id", id);
    modal.classList.add("gal-modal");
    modal.innerHTML = `
      <span class="gal-close gal-cursor" onclick="closeModal('${id}')">&times;</span>
      <div class="gal-modal-content">
        ${images.map((image, index) => `
          <div class="gal-mySlides">
            <div class="gal-numbertext">${index+1} / ${images.length}</div>
            <img src="${image}" alt="${index+1} / ${images.length}" style="width:100%">
            <div class="gal-caption-container">
              <p id="caption">${index+1} / ${images.length}</p>
            </div>
          </div>
        `).join('')}
        <a class="gal-prev" onclick="plusSlides('${id}',-1)">&#10094;</a>
        <a class="gal-next" onclick="plusSlides('${id}',1)">&#10095;</a>
        <div class="row">
          ${images.map((image, index) => `
            <div class="gal-column">
              <img class="gal-demo gal-cursor" src="${image}" alt="${index+1} / ${images.length}" style="width:100%" onclick="currentSlide('${id}',${index+1})">
            </div>
          `).join('')}
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  
  
  createModal("myModal1", [
    "img/portfoliu/foto01.jpg",
    "img/portfoliu/foto01.jpg",
    "img/portfoliu/foto01.jpg",
    "img/portfoliu/foto01.jpg"
  ]);
  
  createModal("myModal2", [
    "img/portfoliu/foto02.jpg",
    "img/portfoliu/foto02.jpg",
    "img/portfoliu/foto02.jpg",
    "img/portfoliu/foto02.jpg"
  ]);
  
  
  
  function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  var slideIndex = 1;
  
  // showSlides("myModal1", slideIndex);
  // showSlides("myModal2", slideIndex);
  var captionText1 = document.getElementById("caption");
  var captionText2 = document.getElementById("caption2");
  showSlides("myModal1", slideIndex, captionText1);
  showSlides("myModal2", slideIndex, captionText2);
  
  
  function plusSlides(modalId, n) {
    showSlides(modalId, slideIndex += n, captionText1);
  }
  
  function currentSlide(modalId, n) {
    showSlides(modalId, slideIndex = n, captionText1);
  }
  
  function showSlides(modalId, n, captionText) {
    var i;
    var modal = document.getElementById(modalId);
    var slides = modal.getElementsByClassName("gal-mySlides");
    var dots = modal.getElementsByClassName("gal-demo");
    var caption = modal.getElementsByClassName("gal-caption-container")[0];
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" gal-active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " gal-active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }