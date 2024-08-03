const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
altText = {'pic1.jpg': 'Eye', 'pic2.jpg': 'Rocks or something', 'pic3.jpg': 'Flowers', 'pic4.jpg': 'Egypt Stuff', 'pic5.jpg': 'Butterfly'};

for (const filename of imageFilenames) {
  newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename);
  newImage.setAttribute('alt', altText[filename]); thumbBar.appendChild(newImage);

  newImage.addEventListener('click', function() {
  displayedImage.setAttribute('src', 'images/' + filename);});
  displayedImage.setAttribute('alt', altText[filename]);};

btn.addEventListener('click', () => {
if (btn.classList.contains('dark')) {btn.classList.remove('dark'); btn.classList.add('light'); btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';} 
else {btn.classList.remove('light'); btn.classList.add('dark'); btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';}});
