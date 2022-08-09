const table = document.querySelector(".main__table")
const darkModeToggle = document.getElementById("dark__mode__toggle")
//const orderChecker = document.querySelectorAll(".table__cell--checkbox")

//render資料
function renderFakeData(number) {
  for(let i = 1; i <= number; i++) {
    tbody.innerHTML += `
    <tr class="table__row">
    <td class="table__cell table__cell--checkbox">
        <input class="cell_checkbox" type="checkbox">
    </td>
    <td class="table__cell table__cell--id">${i}</td>
    <td class="table__cell table__cell--name">Name</td>
    <td class="table__cell table__cell--advertiser">
        <span class="cell__advertiser__line">Advertiser</span>
        <span class="cell__advertiser__line cell__advertiser__line--group">Group</span>
    </td>
    <td class="table__cell table__cell--description">Description</td>
    <td class="table__cell table__cell--price">Price</td>
    <td class="table__cell table__cell--starttime">Start Time</td>
    <td class="table__cell table__cell--endtime">End Time</td>
    <td class="table__cell table__cell--action">
        <img class="cell__action__icon" src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg" id="action__input_1" alt="menu" />
        <!--menu-->
        <div class="action__menu hidden" role="dialog" aria-modal="true" aria-labelledby="action__input_${i}" id="action__menu_${i}">
            <menu class="menu__body">
                <menuitem class="menu__item">
                    <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg" class="menu__item__icon" />
                    <span>Duplicate</span>
                </menuitem>
                <menuitem class="menu__item">
                    <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg" class="menu__item__icon" />
                    <span>Edit</span>
                </menuitem>
                <menuitem class="menu__item">
                    <img src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg" class="menu__item__icon" />
                    <span>Delete</span>
                </menuitem>
            </menu>
        </div>
    </td>
</tr>
`
  }
}
renderFakeData(15)

//暗黑模式
const darkModeToggleHandler = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme","dark")
  } else {
    document.documentElement.setAttribute("data-theme","light")
  }
}
darkModeToggle.addEventListener("change", darkModeToggleHandler)

const toggleMenu = event => {
  const menu = document.getElementById("action__menu_1")
  menu.classList.toggle("hidden");
}

//點擊table row和actions的互動
table.addEventListener('click', e => {
  if(e.target.matches('.cell__action__icon')) {
    const toggleButton = e.target.nextElementSibling
    toggleButton.classList.toggle('hidden')
  }
  if(e.target.matches('.cell_checkbox')) {
    const tableRow = e.target.parentElement.parentElement
    tableRow.classList.toggle('selected')
  }
})