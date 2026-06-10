export const questions = [
  {
    id: 1,
    question: 'Apa perbedaan let, const, dan var di JavaScript?',
    answer:
      'var memiliki function scope dan dapat dideklarasikan ulang. let memiliki block scope dan nilainya dapat diubah. const memiliki block scope tetapi nilainya tidak dapat diassign ulang.',
  },
  {
    id: 2,
    question: 'Apa itu hoisting di JavaScript?',
    answer:
      'Hoisting adalah perilaku JavaScript yang memindahkan deklarasi variabel dan fungsi ke bagian atas scope sebelum kode dieksekusi.',
  },
  {
    id: 3,
    question: 'Apa perbedaan antara == dan ===?',
    answer:
      '== membandingkan nilai setelah melakukan type coercion, sedangkan === membandingkan nilai dan tipe data tanpa konversi.',
  },
  {
    id: 4,
    question: 'Apa itu closure?',
    answer:
      'Closure adalah fungsi yang dapat mengakses variabel dari scope luar meskipun fungsi luar tersebut sudah selesai dieksekusi.',
  },
  {
    id: 5,
    question: 'Apa fungsi method map() pada array?',
    answer:
      'map() digunakan untuk membuat array baru dengan hasil transformasi setiap elemen dari array asli.',
  },
  {
    id: 6,
    question: 'Apa perbedaan antara null dan undefined?',
    answer:
      'undefined berarti variabel belum memiliki nilai, sedangkan null adalah nilai yang sengaja diberikan untuk menunjukkan tidak ada nilai.',
  },
  {
    id: 7,
    question: 'Apa itu Promise dalam JavaScript?',
    answer:
      'Promise adalah objek yang merepresentasikan hasil dari operasi asynchronous yang bisa berstatus pending, fulfilled, atau rejected.',
  },
  {
    id: 8,
    question: 'Apa kegunaan async dan await?',
    answer:
      'async dan await digunakan untuk menangani operasi asynchronous dengan sintaks yang lebih mudah dibaca dibandingkan chaining Promise.',
  },
  {
    id: 9,
    question:
      'Apa perbedaan antara function declaration dan function expression?',
    answer:
      'Function declaration di-hoist sepenuhnya sehingga dapat dipanggil sebelum dideklarasikan, sedangkan function expression tidak.',
  },
  {
    id: 10,
    question: 'Apa itu DOM dalam JavaScript?',
    answer:
      'DOM (Document Object Model) adalah representasi struktur halaman HTML yang memungkinkan JavaScript mengakses dan memanipulasi elemen pada halaman web.',
  },
];
