/* 텍스트 스크롤 */

const listStyleChangeStartY = 373;
const listStyleChangeEndY = 1585;
const listItems = document.querySelectorAll(".item");
const division = (listStyleChangeEndY - listStyleChangeStartY) / listItems.length;

const removeOnId = () => {
  const onEl = document.getElementById("on");
  if (onEl) onEl.removeAttribute("id");
};

const setOnId = (targetIndex) => {
  const targetEl = listItems[targetIndex];
  if (targetEl) targetEl.id = "on";
};

const handleScroll = () => {
  // 초기화
  removeOnId();

  const scrollY = window.scrollY;
  if (scrollY > listStyleChangeStartY && scrollY < listStyleChangeEndY) {
    const targetIndex = Math.round((scrollY - listStyleChangeStartY) / division);
    // 실행
    setOnId(targetIndex);
  }
};

window.addEventListener("scroll", handleScroll);

/* 무브 이미지 */
const scrollingImage = document.querySelector(".scrolling-image");
const image = scrollingImage.querySelector("img");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const imagePosition = -scrollPosition / 2;
  image.style.transform = `translateX(${imagePosition}px)`;
});
