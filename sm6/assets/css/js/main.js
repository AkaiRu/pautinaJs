document.querySelector('.header-restart--pages').addEventListener('click', ()=>{
    document.querySelector('.header-restart--pages').classList.add('selected');
    setTimeout(()=>{
        document.location = "?";
    }, 1000)
});

const arrNews = [
    {
        id: "1",
        title: "Название новости",
        dateCreate: "01.01.2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
                    "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
                    "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Эмиль"
    },
    {
        id: "2",
        title: "Название новости",
        dateCreate: "01.01.2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Артур"
    },
    {
        id: "3",
        title: "Название новости",
        dateCreate: "01.01.2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Егор"
    },
    {
        id: "4",
        title: "Название новости",
        dateCreate: "01.01.2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Рустам"
    },
    {
        id: "5",
        title: "Название новости",
        dateCreate: "01.01.2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Алексей"
    },
    {
        id: "6",
        title: "Название новости",
        dateCreate: "01.01.2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
            "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
            "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        author: "Данис"
    }
]

for (let i = 0; i < arrNews.length; i++) {
    let list = document.querySelector('.news-list');
    list.insertAdjacentHTML('beforeend', `
        <li class="news-item">
            <div class="news__content-top content">
                <h2 class="news__title">${arrNews[i]['title']}</h2>
                <p class="news__date">${arrNews[i]['dateCreate']}</p>
            </div>
            <p class="news__text">${arrNews[i]['description']}</p>
            <div class="news__content-bottom content">
                <p class="news__author">${arrNews[i]['author']}</p>
                <p class="news-id">id: ${arrNews[i]['id']}</p>
            </div>
        </li>
    `
    );
}