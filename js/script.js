const buttons = document.querySelectorAll('.btn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector('#Search');

// Search functionality
searchBox.addEventListener('keyup', (e) => {
    let searchText = e.target.value.toLowerCase().trim();
    
    boxes.forEach((box) => {
        const data = box.dataset.item;
        if (data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    // Remove active class from all buttons and add it to the first button
    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    buttons[0].classList.add('btn-clicked'); // Optional, you can modify this logic as per requirement
});

// Button click functionality
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);

        const btnfilter = e.target.dataset.filter;
        boxes.forEach((box) => {
            if (btnfilter === 'all') {
                box.style.display = 'block';
            } else {
                const boxFilter = box.dataset.item;
                if (boxFilter === btnfilter) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            }
        });
    });
});

// Set active class to clicked button
function setActiveBtn(e) {
    buttons.forEach((button) => {
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}
