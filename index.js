// Скрипт, позволяющий при наведении курсором мыши  на значок "i"   сделать видимым текстовый блок с описанием автора

// Для начала найду на странице два значка "i", получу их в коллекцию

let iconsInformation = document.querySelectorAll(".course-authors__information")

// Переберу эту коллекцию методом forEach и на каждый значок повешу обработчик по событиям mouseenter и mouseleave
iconsInformation.forEach( item => {

  // Когда заходим курсором мыши на элемент
  item.addEventListener("mouseenter", function(event) {
    // alert("Мы зашли в элемент")

    // От элемента, на котором сработало событие (то есть от значка "i") поднимаемся вверх до родителя. А затем от родителя получаем большой блок текста 
    let bigWhiteTextBlock = event.target.closest(".parent-author").querySelector(".course-authors__author-description")

    // Если на момент срабатывания события у текстового блока уже был класс visible, значит, мы убираем его.  Если на момент события класса не было, то добавляем его блоку
    if( bigWhiteTextBlock.classList.contains("visible") ) {

      console.log("Да , содержит такой класс")

      bigWhiteTextBlock.classList.remove("visible")

    } else {

      console.log("Нет , не содержит такой класс")

      bigWhiteTextBlock.classList.add("visible")

    }

  })

  // Когда уводим курсор мыши  с элемента 
  item.addEventListener("mouseleave", function(event) {
    // alert("Мы ушли  с элемента")

    // От элемента, на котором сработало событие (то есть от значка "i") поднимаемся вверх до родителя. А затем от родителя получаем большой блок текста 
    let bigWhiteTextBlock = event.target.closest(".parent-author").querySelector(".course-authors__author-description")

    // Если на момент срабатывания события у текстового блока уже был класс visible, значит, мы убираем его.  Если на момент события класса не было, то добавляем его блоку
    if( bigWhiteTextBlock.classList.contains("visible") ) {

      bigWhiteTextBlock.classList.remove("visible")

    } else {

      bigWhiteTextBlock.classList.add("visible")

    }
    
  })

})
//  --- // Перебрал   коллекцию методом forEach и на каждый значок повешу обработчик по событиям mouseenter и mouseleave

