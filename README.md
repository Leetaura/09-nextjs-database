This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Laporan Proses Seeding Database

## Deskripsi
Pada tugas ini, saya menjalankan proses seeding database untuk mengisi tabel-tabel yang diperlukan dalam aplikasi Next.js menggunakan Node.js. Proses ini menggunakan skrip `seed.js` untuk mengisi data dummy ke dalam tabel database yang terdiri dari `users`, `customers`, `invoices`, dan `revenue`.


## soal 3
## Hasil Proses Seeding
Berikut adalah hasil dari perintah `npm run seed` yang telah dijalankan pada terminal:

- ## Tabel `users`: Berhasil dibuat dan berisi 1 pengguna.
- ## Tabel `customers`: Berhasil dibuat dan berisi 10 pelanggan.
- ## Tabel `invoice`: Berhasil dibuat dan berisi 15 invoice.
- ## Tabel `revenue`: Berhasil dibuat dan berisi 12 data pendapatan.


## Apa yang telah dipelajari?
Melalui proses seeding ini, saya mempelajari beberapa hal berikut:
1. **Pembuatan dan Pengisian Tabel Database**: Saya belajar cara membuat tabel di database dan mengisinya dengan data dummy menggunakan Node.js dan Sequelize.
2. **Penggunaan Skrip Seeder**: Proses seeding menggunakan skrip `seed.js` memungkinkan untuk mengisi data secara otomatis ke dalam database, sehingga menghemat waktu dalam pengujian aplikasi.
3. **Pengelolaan Data di Aplikasi Next.js**: Data yang telah disiapkan melalui seeding ini digunakan untuk menguji fitur-fitur CRUD dalam aplikasi Next.js yang sedang dikembangkan.

## soal 2

### yang saya pelajari:
- Mengerti pentingnya memilih region basis data yang sesuai untuk mengurangi latency.
- Menyimpan informasi sensitif di file `.env` dan menambahkannya ke `.gitignore` untuk keamanan.
- Menggunakan SDK untuk mempermudah integrasi dengan basis data Postgres di Vercel.

## soal 1

### Langkah-langkah:
1. Membuat repository GitHub menggunakan template starter code dari [09-nextjs-database](https://github.com/jti-polinema/09-nextjs-database).
2. Membuat akun Vercel dan menghubungkannya dengan akun GitHub.
3. Mengimpor repository dari GitHub ke Vercel dan melakukan deploy project.
   
### Pembelajaran:
- Penggunaan template starter code mempermudah pembuatan project karena sudah memiliki setup awal.
- Vercel menawarkan kemudahan dalam proses deploy, terutama dengan fitur continuous deployment dan pratinjau instan pada setiap pull request.
- Menghubungkan GitHub dengan Vercel memberikan efisiensi dalam alur kerja, karena setiap push ke main branch langsung memperbarui aplikasi yang sudah di-deploy.

## soal 4 

### Pembelajaran:
- Menggunakan fitur Query pada dashboard Vercel untuk mengeksekusi SQL query secara langsung.
- Memahami penggunaan JOIN dalam SQL untuk menghubungkan dua tabel berdasarkan relasi kunci.
- Menerapkan filter menggunakan WHERE untuk mendapatkan data spesifik.