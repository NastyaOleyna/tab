const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');

const childTabs = document.getElementById('childTabs');
const childContent = document.querySelectorAll('.childContent');

const changeClass = el => {
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }

    el.classList.add('active');
}

const changeChildClass = el => {
    for (let i = 0; i < childTabs.children.length; i++) {
        childTabs.children[i].classList.remove('active');
    }

    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;

    changeClass(e.target);
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})


childTabs.addEventListener('click', (e) => {
    const currChildTab = e.target.dataset.childBtn;

    changeChildClass(e.target);
    for (let i = 0; i < childContent.length; i++) {
        childContent[i].classList.remove('active');
        if (childContent[i].dataset.childContent === currChildTab) {
            childContent[i].classList.add('active');
        }
    }
})