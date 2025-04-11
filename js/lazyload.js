// 客户端懒加载逻辑（添加到主题模板或独立 JS 文件）
document.addEventListener('DOMContentLoaded', function() {
    const lazyImages = document.querySelectorAll('img[data-lazy-src]');
    
     // 检查浏览器是否支持 IntersectionObserver
    if ('IntersectionObserver' in window) {
        // 创建 IntersectionObserver 实例
        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // 检查图片是否进入视口
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.lazySrc;
                        // 移除 data-lazy-src 属性，避免重复加载
                        img.removeAttribute('data-lazy-src');
                        // 可选：添加占位符图片或淡入效果
                        img.classList.add('slide-in-up'); // 添加淡入效果的类名
                        // 停止观察该图片，避免重复触发
                        observer.unobserve(img);
                    }
                });
            },
            { 
                rootMargin: '100vh 0px' // 提前 100vh 加载
            }
        );
        
        lazyImages.forEach(img => observer.observe(img));
    } else {
        // 旧浏览器回退：直接加载所有图片
        lazyImages.forEach(img => img.src = img.dataset.lazySrc);
    }
});