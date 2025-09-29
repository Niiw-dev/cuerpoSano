document.addEventListener('DOMContentLoaded', function () {
    const expandableTitles = document.querySelectorAll('.expandable-title');

    expandableTitles.forEach(title => {
        title.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);

            this.classList.toggle('expanded');
            
            if (targetContent) {
                targetContent.classList.toggle('expanded');
                
                // Adjust max-height to fit content
                if (targetContent.classList.contains('expanded')) {
                    targetContent.style.maxHeight = targetContent.scrollHeight + 'px';
                } else {
                    targetContent.style.maxHeight = '0';
                }
            }
        });
    });
});