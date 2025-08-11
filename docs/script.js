document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '15px 0';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            header.style.padding = '20px 0';
        }
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 播放按钮效果
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 这里可以添加视频播放逻辑
            alert('视频播放功能将在实际项目中实现');
        });
    });

    // 作品展示轮播
    const paginationDots = document.querySelectorAll('.works-pagination span');
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // 移除所有活动状态
            paginationDots.forEach(d => d.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            // 这里可以添加轮播逻辑
            console.log('切换到第' + (index + 1) + '页作品');
        });
    });

    // 菜单切换
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // 这里可以添加移动端菜单显示/隐藏逻辑
            alert('移动端菜单将在实际项目中实现');
        });
    }

    // 滚动动画
    const scrollDown = document.querySelector('.scroll-down');
    if (scrollDown) {
        scrollDown.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
});