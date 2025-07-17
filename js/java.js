  
  
  // 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно
  
  const radiosEl = document.querySelectorAll('input[name="color"]');
  const body = document.body;

  radiosEl.forEach(radio => {
    radio.addEventListener("change", () => {
      body.style.backgroundColor = radio.value;

    });
  });


  document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;


  

// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'


const input = document.getElementById("name-input");
const output = document.getElementById("name-output");


input.addEventListener("input", () => {
if (input.value != "") {
    output.textContent = input.value;

  } else {
    output.textContent = "незнайомець";
  }

});



//Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.

// Скільки символів має бути в інпут, вказується в його атрибуті data-length.

// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.

// Для додавання стилів, використовуй CSS-класи valid і invalid.




const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", () => {
    const symbLength = Number(inputRef.dataset.length);
    const inputSymb = inputRef.value.length;
    // console.log(inputSymb);

    if (inputSymb === symbLength) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.add("invalid");
        inputRef.classList.remove("valid")
    }
    
})





// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.


const sizeEl = document.getElementById("font-size-control");
const descRef = document.getElementById("text");

sizeEl.addEventListener("input", () => {
    const size = sizeEl.value + "px";
    descRef.style.fontSize = size;
})