// 创建并插入 header
const createHeader = () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="experience.html">Experience</a></li>
                <li><a href="education.html">Education</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
            </ul>
        </nav>
    `;
    document.getElementById('header-placeholder').appendChild(header);
};

// 创建并插入 footer
const createFooter = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>© 2024 Hongxiang Yang. All rights reserved.</p>
    `;
    document.getElementById('footer-placeholder').appendChild(footer);
};

// 初始化导航栏事件监听
const initNavEvents = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const contentSection = document.getElementById('content-section');
    let fixedContent = null;

    // 定义data-text内容
    const dataText = {
        item1: `<h3>Events Management</h3>
                <p>Managed events and facilitated the establishment of the "Freelancers" project in collaboration between Government Procurement Company and Zhejiang Business College, contributing to the establishment of industrial colleges.</p>
                <p>Created social media content independently, designed and operated student communication communities. Developed the curriculum framework for the Industrial College, specifically designed the "Government Procurement Practice" course, delivered lectures to four administrative classes and successfully incorporated the course into the growth plan of partner universities.</p>`,
        item2: `<h3>China Basketball Management</h3>
                <p>Short Video Operations: Responsible for the planning, editing, and publishing of short video content for the Hupu CBA Douyin account.</p>
                <p>Responsible for writing news for Hupu’s China Basketball section and managing daily operations of the community. Also participated in brand planning and coordinated with Hupu Basketball and CBA to jointly create the “Dare to Dream, Dare to Act” promotional campaign for the 2019-2020 CBA season.</p>`,
        item3: `<h3>VR Development</h3>
                <p>Planned and developed VR product content for company, drawing inspiration from established VR virtual social applications to identify their advantages for educational purposes.</p>
                <p>Designed the user interface (UI) for the VR product-related app, adhering to VR industry UI design standards. Created the loading page and homepage icon set, and employed Sketch to develop interactive prototypes. The project was successfully launched and put into use.</p>`
    };

    // 默认显示 item1 的内容
    contentSection.innerHTML = dataText.item1;
    fixedContent = 'item1';

    // 添加导航项的事件监听
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            if (!fixedContent) {
                contentSection.innerHTML = dataText[this.id];
            }
        });

        item.addEventListener('mouseleave', function () {
            if (!fixedContent) {
                contentSection.innerHTML = '';
            }
        });

        item.addEventListener('click', function () {
            fixedContent = this.id;
            contentSection.innerHTML = dataText[this.id];
        });
    });

    // 点击页面其他区域时重置内容
    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('nav-item') && !event.target.closest('.nav-item')) {
            fixedContent = null;
            contentSection.innerHTML = '';
        }
    });
};

// DOM 加载完毕后初始化页面
document.addEventListener('DOMContentLoaded', function () {
    createHeader();
    createFooter();
    initNavEvents();
});