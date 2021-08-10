
window.addEventListener('load', () => {
     let userDropdown = document.getElementById('user-info');
    let dropdownMenu = document.querySelector('.nav-dropdown');

    userDropdown.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('active')) {
            dropdownMenu.classList.remove('active');
        } else {
            dropdownMenu.classList.add('active');
        }
    })

    let panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('mouseover', () => {
            if(!panel.classList.contains('open')) {
                panel.classList.add('open');
                // panel.style.animation = 'book-open 500ms forwards'
            }
        })
        panel.addEventListener('mouseout', () => {
            if(panel.classList.contains('open')) {
                panel.classList.remove('open');
                // panel.style.animation = 'book-open 500ms reverse forwards'
            }
        })
    })
})

// function handleResponse(response) {
//     for (let i = 0; i < response.items.length; i++) {
//       let item = response.items[i];
//       // in production code, item.text should have the HTML entities escaped.
//       let itemImage = document.createElement('img');
//       itemImage.src = item.volumeInfo.imageLinks.smallThumbnail;
//       document.getElementById('content').appendChild(itemImage);
//     //   document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.imageLinks.smallThumbnail;
    
//     }
// }