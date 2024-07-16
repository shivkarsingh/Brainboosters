
document.querySelectorAll('.feature .feature-card .card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        card.style.transform = `rotateY(${deltaX * 20}deg) rotateX(${deltaY * -20}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});

document.querySelectorAll('.feature2 .feature-card2 .card2').forEach(card2 => {
    card2.addEventListener('mousemove', (e) => {
        const rect = card2.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card2.style.setProperty('--x', `${x}px`);
        card2.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        card2.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
    });

    card2.addEventListener('mouseleave', () => {
        card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});



document.querySelectorAll('.feature3 .feature-card3 .card3').forEach(card3 => {
    card3.addEventListener('mousemove', (e) => {
        const rect = card3.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card3.style.setProperty('--x', `${x}px`);
        card3.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        card3.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
    });

    card3.addEventListener('mouseleave', () => {
        card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});



document.querySelectorAll('.everything .main .content').forEach(content => {
    content.addEventListener('mousemove', (e) => {
        const rect = content.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        content.style.setProperty('--x', `${x}px`);
        content.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        content.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
    });

    content.addEventListener('mouseleave', () => {
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});






document.querySelectorAll('.user-interface .main .content').forEach(content => {
    content.addEventListener('mousemove', (e) => {
        const rect = content.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        content.style.setProperty('--x', `${x}px`);
        content.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        content.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
    });

    content.addEventListener('mouseleave', () => {
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});







document.querySelectorAll('.tool .main .content').forEach(content => {
    content.addEventListener('mousemove', (e) => {
        const rect = content.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        content.style.setProperty('--x', `${x}px`);
        content.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        content.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
    });

    content.addEventListener('mouseleave', () => {
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});







document.querySelectorAll('.test .main .content').forEach(content => {
    content.addEventListener('mousemove', (e) => {
        const rect = content.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        content.style.setProperty('--x', `${x}px`);
        content.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        content.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
    });

    content.addEventListener('mouseleave', () => {
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});




document.querySelectorAll('.management .main .content').forEach(content => {
    content.addEventListener('mousemove', (e) => {
        const rect = content.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        content.style.setProperty('--x', `${x}px`);
        content.style.setProperty('--y', `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        content.style.transform = `rotateY(${deltaX * 15}deg) rotateX(${deltaY * -15}deg)`;
    });

    content.addEventListener('mouseleave', () => {
        content.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});