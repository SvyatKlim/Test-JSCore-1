const topBlock = document.querySelector('.top_block'),
    area = document.querySelector('.area'),
    editBlock = document.querySelector('.edit_block'),
    styleBlock = document.querySelector('.style_block'),
    mainBlock = document.querySelector('.main_block'),
    addBlock = document.querySelector('.add_block'),
    formCreateTable = document.forms['formCreateTable'],
    formCreateList = document.forms['formCreateList'],
    colors = document.querySelectorAll('.color'),
    colorsCont = document.querySelector('.colors');

function edit() {
    area.value = topBlock.innerHTML;
    editBlock.classList.remove('hidden');
    styleBlock.classList.add('hidden');
}

function styleB() {
    editBlock.classList.add('hidden');
    styleBlock.classList.remove('hidden');
}

function save() {
    topBlock.innerHTML = area.value;
    editBlock.classList.add('hidden');
}

function addBtn() {
    mainBlock.classList.add('hidden');
    addBlock.classList.remove('hidden');
}

function backBtn() {
    mainBlock.classList.remove('hidden');
    addBlock.classList.add('hidden');
}

function colorText() {
    colorsCont.classList.remove('hidden');
    if (colorsCont.classList.contains('colorpicker-bg')) {
        colorsCont.classList.remove('colorpicker-bg');

    }

}

function colorBackground() {
    colorsCont.classList.remove('hidden');
    colorsCont.classList.add('colorpicker-bg');
}

// Клик на цвет. Перебор стилей цвета текса и бэкграунда.
colors.forEach(function(element) {
    element.addEventListener('click', function() {
        if (colorsCont.classList.contains('colorpicker-bg')) {
            topBlock.style.backgroundColor = window.getComputedStyle(element).backgroundColor
        } else {
            topBlock.style.color = window.getComputedStyle(element).backgroundColor
        }
        colorsCont.classList.add('hidden')
    })
});

function fontSize() {
    console.log(event.target);
    topBlock.style.fontSize = event.target.value;
}

function fontFamily() {
    topBlock.style.fontFamily = event.target.value;
}

function fontWeight() {
    if (event.target.checked) {
        topBlock.style.fontWeight = 'bold'
    } else {
        topBlock.style.fontWeight = 'normal'
    }
}

function fontStyle() {
    event.target.checked ? topBlock.classList.add('style') : topBlock.classList.remove('style')
}

function chooseBtn() {
    if (event.target.dataset.create === 'table') {
        formCreateTable.classList.remove('hidden');
        formCreateList.classList.add('hidden');
    } else if (event.target.dataset.create === 'list') {
        formCreateTable.classList.add('hidden');
        formCreateList.classList.remove('hidden');
    }
}

// Создание таблицы. Стилизация происходит встроенным стилем
function createTable() {
    let form = document.forms['formCreateTable'];
    let countTr = form.countTr.value;
    let countTd = form.countTd.value;
    let widthTd = form.widthTd.value;
    let heightTd = form.heightTd.value;
    let borderTd = form.borderT.value;
    let borderColor = form.borderC.value;
    let borderWidth = form.borderW.value;
    area.value += `<div style="overflow: auto"><table border="1" style="border-collapse:collapse">`;
    for (let i = 1; i <= countTr; i++) {
        area.value += `<tr>`;
        for (let j = 1; j <= countTd; j++) {
            area.value += `<td  style="border-width: ${borderWidth}px;border: ${borderTd};width:${widthTd}px;height:${heightTd}px;border-color: ${borderColor};">TD</td>`
        }
        area.value += `</tr>`
    }
    area.value += `</table></div>`;
    backBtn();
}

function createList() {
    let form = document.forms['formCreateList'];
    let countLi = form.countLi.value;
    let typeLi = form.typeLi.value;
    area.value += `<ul style="list-style: ${typeLi}">`;
    for (let i = 1; i <= countLi; i++) {
        area.value += `<li> item ${i}`;
        area.value += `</li>`;
    }
    area.value += `</ul>`;
    console.log(area.value);
    backBtn();
}