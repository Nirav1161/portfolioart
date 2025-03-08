// script.js
document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = [
        {
            image: 'aluarjun.jpg',
            title: 'panting 1',
            description: 'Aluarjun.',
        },
        {
            image: 'mahdev.jpg',
            title: 'pantig 2',
            description: 'Mahadev.',
        },
        {
            image: 'Balgopal.jpg',
            title: 'panting 3',
            description: 'balgopal.'
        },
        {
            image: 'Radhekrishna.jpg',
            title: 'panting 4',
            description: 'Radhekrishna.',
        },
        {
            image: 'krishna.jpg',
            title: 'panting 5',
            description: 'krishna.',
        },
        {
            image: 'ganpati.jpg',
            title: 'panting 6',
            description: 'ganpati.',
        },
        {
            image: 'pakshe.jpg',
            title: 'panting 7',
            description: 'pakshe.',
        },
        {
            image: 'pantingdish.jpg',
            title: 'panting 8',
            description: 'pantingdish.',
        },
        {
            image: 'rakshabandhan.jpg',
            title: 'panting 9',
            description: 'rakshabandhan.',
        },
       
       
        // Add more portfolio items here
    ];

    const portfolioGrid = document.getElementById('portfolioGrid');

    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item');

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.title;

        const details = document.createElement('div');
        details.classList.add('portfolio-item-details');

        const title = document.createElement('h3');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        details.appendChild(title);
        details.appendChild(description);

        portfolioItem.appendChild(image);
        portfolioItem.appendChild(details);

        portfolioGrid.appendChild(portfolioItem);

        // Add class to trigger animation on scroll
        window.addEventListener('scroll', () => {
            const portfolioItemPosition = portfolioItem.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (portfolioItemPosition < screenPosition) {
                portfolioItem.classList.add('show');
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simulated form submission (replace with actual backend logic)
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        contactForm.reset();
    });

    // Add animation to header on load
    const header = document.querySelector('header');
    header.style.opacity = 0;
    header.style.transform = 'translateY(-20px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    window.addEventListener('load', () => {
        header.style.opacity = 1;
        header.style.transform = 'translateY(0)';
    });

    // Add animation to about section on scroll
    const aboutSection = document.getElementById('about');
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = 'translateY(20px)';
    aboutSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    window.addEventListener('scroll', () => {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (aboutPosition < screenPosition) {
            aboutSection.style.opacity = 1;
            aboutSection.style.transform = 'translateY(0)';
        }
    });

    // Add animation to contact section on scroll
    const contactSection = document.getElementById('contact');
    contactSection.style.opacity = 0;
    contactSection.style.transform = 'translateY(20px)';
    contactSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    window.addEventListener('scroll', () => {
        const contactPosition = contactSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.5;
        if (contactPosition < screenPosition) {
            contactSection.style.opacity = 1;
            contactSection.style.transform = 'translateY(0)';
        }
    });
});
