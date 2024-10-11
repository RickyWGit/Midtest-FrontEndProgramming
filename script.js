// Index.html Like, Bookmark
document.addEventListener('DOMContentLoaded', () => {
    const loveIcons = document.querySelectorAll('.uil-heart');
    loveIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.toggle('menyukai');
        });
    });

    const bookmarkIcons = document.querySelectorAll('.uil-bookmark');
    bookmarkIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            this.classList.toggle('tersimpan');
        });
    });
});


// Friendreq.html acc dec friend
document.addEventListener('DOMContentLoaded', () => {
    const acceptButtons = document.querySelectorAll('.acc-btn');
    const declineButtons = document.querySelectorAll('.dec-btn');

    acceptButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.request-card');
            alert(` ${card.querySelector('h3').innerText} telah menjadi teman anda!`);
            card.style.display = 'none';
        });
    });

    declineButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.request-card');
            alert(`Anda menolak pertemanan dari ${card.querySelector('h3').innerText}.`);
            card.style.display = 'none';
        });
    });
});

// Messages.html send message
document.addEventListener('DOMContentLoaded', () => {
    const sendMessageButton = document.getElementById('sendMessage');
    const newMessageInput = document.getElementById('newMessage');
    const messageList = document.getElementById('message-list');

    sendMessageButton.addEventListener('click', () => {
        const messageText = newMessageInput.value.trim();

        if (messageText !== '') {
            const newMessageElement = document.createElement('div');
            newMessageElement.classList.add('message');

            newMessageElement.innerHTML = `
                <div class="pp">
                    <img src="./images/p1.jpg" alt="User Avatar">
                </div>
                <div class="message-body">
                    <h5>Ricky Wijaya [Anda]</h5>
                    <p class="wf">${messageText}</p>
                </div>
            `;

            messageList.appendChild(newMessageElement);

            newMessageInput.value = '';

            messageList.scrollTop = messageList.scrollHeight;
        }
    });

    newMessageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessageButton.click();
        }
    });
});

// Contast.html Hapus kontak
document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.contact-btn');

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const contactCard = this.parentElement;
            contactCard.remove();
        });
    });
});
