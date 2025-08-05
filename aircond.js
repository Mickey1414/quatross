// ===== SCROLL ANIMATION =====
const fadeEls = document.querySelectorAll('.fade-in');

function checkFadeIn() {
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// ===== LIGHTBOX GALLERY =====
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightbox.appendChild(lightboxImg);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// ===== FAQ ACCORDION =====
const accordions = document.querySelectorAll('.accordion-item button');

accordions.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;

        // Close other accordions
        document.querySelectorAll('.accordion-item .content').forEach(c => {
            if (c !== content) {
                c.style.display = 'none';
            }
        });

        // Toggle current accordion
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
