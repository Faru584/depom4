// Arama işlevi
function searchGame() {
    const searchInput = document.querySelector('.search-bar input');
    const searchQuery = searchInput.value.toLowerCase(); // Arama sorgusunu küçük harfe çevir
    const cards = document.querySelectorAll('.card'); // Tüm kartları al
    let found = false; // Eşleşme durumu için bayrak

    cards.forEach(card => {
        const title = card.querySelector('.card-info h3').innerText.toLowerCase(); // Kart başlığını al
        if (title.includes(searchQuery)) {
            card.scrollIntoView({ behavior: 'smooth' }); // Kartı görünebilir hale getir
            card.classList.add('highlight'); // Kartın çerçevesini yanıp söndür
            found = true; // Eşleşme bulundu
        } else {
            card.classList.remove('highlight'); // Eşleşmeyen kartların yanıp sönme efektini kaldır
        }
    });

    // Mesajı göster veya gizle
    const message = document.querySelector('.no-results-message');
    if (!found) {
        message.style.display = 'block'; // Mesajı göster
    } else {
        message.style.display = 'none'; // Mesajı gizle
    }
}

// Enter tuşuna basıldığında arama işlemini tetikle
document.querySelector('.search-bar input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Formun gönderilmesini önle
        searchGame(); // Arama işlevini çağır
    }
});

// Arama butonuna tıklanıldığında da arama işlemini yap
document.querySelector('.search-bar button').addEventListener('click', searchGame);

// Sayfanın en üstüne kaydırma işlevi
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
