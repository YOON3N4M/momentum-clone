const images = ["0.png", "1.png", "2.png", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]; // 이미지 목록 배열 생성
const chosenImage = images[Math.floor(Math.random() * images.length)]; // image[랜덤으로 생성되는 숫자]
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.classList.add("background");
