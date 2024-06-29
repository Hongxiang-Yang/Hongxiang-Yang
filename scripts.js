document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-item');
    const contentSection = document.getElementById('content-section');
    let fixedContent = null;

    // 设置data-text内容
    const dataText = {
        item1: '<h3>Events Management</h3><p>Managed events and facilitated the establishment of the "Freelancers" project in collaboration between Government Procurement Company and Zhejiang Business College, contributing to the establishment of industrial colleges.</p><p>Created social media content independently, designed and operated student communication communities. Developed the curriculum framework for the Industrial College, specifically designed the "Government Procurement Practice" course, delivered lectures to four administrative classes and successfully incorporated the course into the growth plan of partner universities.</p>',
        item2: '<h3>China Basketball Management</h3><p>Short Video Operations: Responsible for the planning, editing, and publishing of short video content for the Hupu CBA Douyin account. </p><p>Responsible for writing news for Hupu’s China Basketball section and managing daily operations of the community. Also participated in brand planning and coordinated with Hupu Basketball and CBA to jointly create the “Dare to Dream, Dare to Act” promotional campaign for the 2019-2020 CBA season.</p>',
        item3: '<h3>VR Development</h3><p>Planned and developed VR product content for company, drawing inspiration from established VR virtual social applications to identify their advantages for educational purposes. </p><p>Designed the user interface (UI) for the VR product-related app, adhering to VR industry UI design standards. Created the loading page and homepage icon set, and employed Sketch to develop interactive prototypes. The project was successfully launched and put into use.</p>'
    };

    // 默认显示 item1 的内容
    contentSection.innerHTML = dataText.item1;
    fixedContent = 'item1';

    navItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            if (!fixedContent) {
                const text = dataText[this.id];
                contentSection.innerHTML = text;
            }
        });

        item.addEventListener('mouseleave', function () {
            if (!fixedContent) {
                contentSection.innerHTML = '';
            }
        });

        item.addEventListener('click', function () {
            fixedContent = this.id;
            const text = dataText[this.id];
            contentSection.innerHTML = text;
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('nav-item') && !event.target.closest('.nav-item')) {
            fixedContent = null;
            contentSection.innerHTML = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalVideo = document.getElementById('modal-video');
    const closeBtn = document.querySelector('.close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const videoSrc = this.getAttribute('data-video');
            modalVideo.querySelector('source').setAttribute('src', videoSrc);
            modalVideo.load(); // 重新加载视频
            modal.style.display = 'block';
            modalVideo.play();
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        modalVideo.pause();
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    });
});




