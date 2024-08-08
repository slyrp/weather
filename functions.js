function createSkinnyList(name, icon, id, info) {
    const divSkinnyList = document.createElement("div")
    divSkinnyList.classList.add("skinny-list")

    const skinnyListIconContainer = document.createElement("span")
    skinnyListIconContainer.classList.add("skinny-list-icon")

    const skinnyListIcon = document.createElement("img")
    skinnyListIcon.src = "assets/images/" + icon + ".png"
    skinnyListIcon.width = "20"

    const skinnyListText = document.createElement("span")
    skinnyListText.classList.add("skinny-list-text")
    skinnyListText.textContent = name

    const skinnyListInfo = document.createElement("span")
    skinnyListInfo.classList.add("skinny-list-info")
    skinnyListInfo.id = id
    skinnyListInfo.textContent = info

    document.getElementById("main").appendChild(divSkinnyList)
    skinnyListIconContainer.appendChild(skinnyListIcon)
    divSkinnyList.appendChild(skinnyListIconContainer)
    divSkinnyList.appendChild(skinnyListText)
    divSkinnyList.appendChild(skinnyListInfo)
}

function changeWeatherListInfo(id, info) {
    const element = document.getElementById(id)

    element.textContent = info
}

function getWeatherIcon(description) {
    // map keywords in descriptions to icons
    // i also dont know whats happening here thanks chatgpt
    const iconMap = [
        { keyword: 'Sunny', icon: 'assets/images/sunny.png' },
        { keyword: 'Partly Cloudy', icon: 'assets/images/partly-cloudy.png' },
        { keyword: 'Cloudy', icon: 'assets/images/cloudy.png' },
        { keyword: 'Rain', icon: 'assets/images/rainy.png' },
        { keyword: 'Drizzle', icon: 'assets/images/drizzle.png' },
        { keyword: 'Snow', icon: 'assets/images/snow.png' },
        { keyword: 'Fog', icon: 'assets/images/foggy.png' },
        { keyword: 'Windy', icon: 'assets/images/windy.png' },
        { keyword: 'Hail', icon: 'assets/images/hail.png' },
        { keyword: 'Thunderstorm', icon: 'assets/images/stormy.png' }
    ];

    // check if any keyword is present in the description
    for (const { keyword, icon } of iconMap) {
        if (description.includes(keyword)) {
            return icon;
        }
    }

    // return a default icon if no match is found
    return 'assets/images/default.png';
}

function makeSidebarButton(number, name, forecast) {
    const sidebar = document.getElementById('sidebar');

    const button = document.createElement('button');
    button.classList.add('sidebar-item');
    button.setAttribute("number", number)

    const span = document.createElement('span');
    span.classList.add('sidebar-item-text');
    span.textContent = name;

    const icon = document.createElement('span');
    icon.classList.add('sidebar-item-icon');

    const img = document.createElement('img');
    img.classList.add('weather-icon');
    img.src = getWeatherIcon(forecast);
    img.width = 20;

    icon.appendChild(img);
    button.appendChild(icon);
    button.appendChild(span);
    sidebar.appendChild(button);

    if (number == 1) {
        button.classList.add("sidebar-item-active")
    }
}

function clearMain() {
    const main = document.getElementById("main")
    main.innerHTML = ''
}

function createSkinnyListRadio(name, icon, option1, option2) {
    const divSkinnyList = document.createElement("div")
    divSkinnyList.classList.add("skinny-list")

    const skinnyListIconContainer = document.createElement("span")
    skinnyListIconContainer.classList.add("skinny-list-icon")

    const skinnyListIcon = document.createElement("img")
    skinnyListIcon.src = "assets/images/items/" + icon + ".png"
    skinnyListIcon.width = "20"

    const skinnyListText = document.createElement("span")
    skinnyListText.classList.add("skinny-list-text")
    skinnyListText.textContent = name

    const radioInputs = document.createElement("div")
    radioInputs.classList.add("radio-inputs")

    const radioOne = document.createElement("label")
    radioOne.classList.add("radio")

    const inputOne = document.createElement("input")
    inputOne.name = "radio"
    inputOne.type = "radio"

    const nameOne = document.createElement("span")
    nameOne.classList.add("name")
    nameOne.id = option1 + "id"
    nameOne.textContent = option1
    
    const radioTwo = document.createElement("label")
    radioTwo.classList.add("radio")

    const inputTwo = document.createElement("input")
    inputTwo.name = "radio"
    inputTwo.type = "radio"

    const nameTwo = document.createElement("span")
    nameTwo.classList.add("name")
    nameTwo.id = option2 + "id"
    nameTwo.textContent = option2

    document.getElementById("main").appendChild(divSkinnyList)
    skinnyListIconContainer.appendChild(skinnyListIcon)
    radioOne.appendChild(inputOne)
    radioOne.appendChild(nameOne)
    radioTwo.appendChild(inputTwo)
    radioTwo.appendChild(nameTwo)
    radioInputs.appendChild(radioOne)
    radioInputs.appendChild(radioTwo)
    divSkinnyList.appendChild(skinnyListIconContainer)
    divSkinnyList.appendChild(skinnyListText)
    divSkinnyList.appendChild(radioInputs)
}

function createSkinnyListToggle(name, icon, id, info) {
    const divSkinnyList = document.createElement("div")
    divSkinnyList.classList.add("skinny-list")

    const skinnyListIconContainer = document.createElement("span")
    skinnyListIconContainer.classList.add("skinny-list-icon")

    const skinnyListIcon = document.createElement("img")
    skinnyListIcon.src = "assets/images/items/" + icon + ".png"
    skinnyListIcon.width = "20"

    const skinnyListText = document.createElement("span")
    skinnyListText.classList.add("skinny-list-text")
    skinnyListText.textContent = name

    const skinnyListInfo = document.createElement("span")
    skinnyListInfo.classList.add("skinny-list-info")
    skinnyListInfo.id = id
    skinnyListInfo.textContent = info

    document.getElementById("main").appendChild(divSkinnyList)
    skinnyListIconContainer.appendChild(skinnyListIcon)
    divSkinnyList.appendChild(skinnyListIconContainer)
    divSkinnyList.appendChild(skinnyListText)
    divSkinnyList.appendChild(skinnyListInfo)
}

function createSkinnyListLink(name, icon, text, link) {
    const divSkinnyList = document.createElement("div")
    divSkinnyList.classList.add("skinny-list")

    const skinnyListIconContainer = document.createElement("span")
    skinnyListIconContainer.classList.add("skinny-list-icon")

    const skinnyListIcon = document.createElement("img")
    skinnyListIcon.src = icon
    skinnyListIcon.width = "20"

    const skinnyListText = document.createElement("span")
    skinnyListText.classList.add("skinny-list-text")
    skinnyListText.textContent = name

    const skinnyListLinkContainer = document.createElement("span")
    skinnyListLinkContainer.classList.add("skinny-list-button-container")

    const skinnyListLink = document.createElement("button")
    skinnyListLink.classList.add("skinny-list-button")
    skinnyListLink.textContent = text
    skinnyListLink.setAttribute("onclick", `window.location.href='${link}'`);

    document.getElementById("main").appendChild(divSkinnyList)
    skinnyListIconContainer.appendChild(skinnyListIcon)
    skinnyListLinkContainer.appendChild(skinnyListLink)
    divSkinnyList.appendChild(skinnyListIconContainer)
    divSkinnyList.appendChild(skinnyListText)
    divSkinnyList.appendChild(skinnyListLinkContainer)
}