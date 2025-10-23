# VendorHub Backend API

## 📌 Deskripsi Proyek
VendorHub Backend adalah aplikasi REST API berbasis **Node.js, Express, dan MySQL** yang menyediakan fitur **CRUD untuk Customer dan Purchase History**, serta fitur **Login dan Register**.

---

## 🚀 Langkah Instalasi
### 1️⃣ Clone Repository
```bash
git clone <repository-url>
cd Backend-BaFangLaiCai
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Konfigurasi Environment (.env)
Buat file `.env` di root folder dan isi sebagai berikut:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=VendorHub
PORT=3000
```

> Pastikan database `VendorHub.db` yang ada di folder db sudah export di MySQL.
---

## 📡 Endpoint CRUD
### 🔐 Authentication
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/customer/login` | Login customer |
| POST | `/customer/register` | Register customer |

### 👤 Customer CRUD
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/customer` | Get semua customer |
| GET | `/customer/:id` | Get customer by ID |
| GET | `/customer/email/:email` | Get customer by Email |
| POST | `/customer/register` | Tambah customer |
| PUT | `/customer/update/:id` | Update customer by ID |

### 🛍️ Purchase History CRUD
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/purchase-history` | Get semua riwayat pembelian |
| GET | `/purchase-history/:id` | Get riwayat pembelian by customer ID |
| POST | `/purchase-history/add` | Tambah riwayat pembelian |
| PUT | `/purchase-history/:id` | Update riwayat pembelian |
| DELETE | `/purchase-history/:id` | Hapus riwayat pembelian |

---

## ▶️ Menjalankan Server
```bash
npm run start
```
Akses API melalui: `http://localhost:3000`

---

## ✅ Contoh Request Body
### Register Customer
```json
{
  "nama": "John Doe",
  "email": "john@example.com",
  "password": "123456",
  "telepon": "08123456789",
  "alamat": "Medan"
}
```

### Tambah Purchase History
```json
{
  "customer_id": 1,
  "purchase_details": "Beli laptop",
  "purchase_date": "2025-10-01"
}
```

---

## 📞 Contact
Jika ada pertanyaan, silakan hubungi developer.

---

🎉 **Project siap dijalankan!**

