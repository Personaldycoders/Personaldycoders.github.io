const typingText = document.getElementById("typing-text");

const texts = [
    "I'm frontend developer",
    "and UI/UX",
    "from Indonesia"
];

let textIndex = 0; // Indeks teks berikutnya yang akan ditampilkan
let charIndex = 0; // Indeks karakter berikutnya yang akan ditampilkan

// Fungsi untuk menampilkan teks satu per satu dengan efek pengetikan
function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50); // Waktu antara setiap karakter (dalam milidetik)
    } else {
        // Setelah teks ditampilkan, mulai menghapusnya
        setTimeout(erase, 1000); // Waktu tampilan sebelum penghapusan (dalam milidetik)
    }
}

// Fungsi untuk menghapus teks satu per satu dengan efek pengetikan
function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Waktu antara setiap karakter yang dihapus (dalam milidetik)
    } else {
        // Setelah teks dihapus, lanjut ke teks berikutnya
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500); // Waktu antara setiap teks (dalam milidetik)
    }
}

// Mulai pengetikan untuk pertama kali
type();
