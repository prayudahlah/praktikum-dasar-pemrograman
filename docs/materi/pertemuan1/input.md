---
id: materiInput
title: Python Input
sidebar_label: Python Input
sidebar_position: 4
---

---

## ⌨️ Input di Python

Fungsi `input()` digunakan supaya user dapat berinteraksi dengan program.
Sintaks dasarnya adalah:

```py title="input_dasar.py"
nama = input("Masukan Nama\t: ")
print(f"Halo, {nama}!")
```

```py title="output"
Masukan Nama   : Deskafim
Halo, Deskafim!
```

---

## 🔤 Tipe Data Input

Secara default, semua data yang dimasukkan melalui `input()` akan bertipe **string**.
Jika ingin menggunakan tipe lain, kita perlu melakukan **konversi tipe data**.

### Contoh Konversi Manual

```py title="konversi_manual.py"
umur = input("Masukan Umur\t: ")
umur = int(umur)   # konversi ke integer
print(f"Umur saya {umur} tahun")
```

```py title="output"
Masukan Umur   : 20
Umur saya 20 tahun
```

### Konversi Langsung

```py title="konversi_langsung.py"
ipk = float(input("Masukan IPK\t: "))
print(f"IPK saya {ipk}")
```

```py title="output"
Masukan IPK   : 3.75
IPK saya 3.75
```

---

## 📋 Contoh Lengkap

```py title="input_lengkap.py"
nama = input("Masukan Nama\t: ")
umur = int(input("Masukan Umur\t: "))
ipk = float(input("Masukan IPK\t: "))

print("-" * 20)
print(f"Nama\t: {nama}")
print(f"Umur\t: {umur}")
print(f"IPK\t: {ipk}")
```

```py title="output"
Masukan Nama   : Deskafim
Masukan Umur   : 20
Masukan IPK    : 3.75
--------------------
Nama    : Deskafim
Umur    : 20
IPK     : 3.75
```

---

## ⚠️ Error yang Sering Terjadi

### 1. `ValueError` karena input tidak sesuai tipe

Jika user mengetik huruf padahal diminta angka:

```py title="error_value.py"
umur = int(input("Masukan Umur\t: "))
```

```py title="output"
Masukan Umur   : dua puluh
Traceback (most recent call last):
  File "error_value.py", line 1, in <module>
    umur = int(input("Masukan Umur\t: "))
ValueError: invalid literal for int() with base 10: 'dua puluh'
```

✅ Solusi: gunakan **validasi input**.

```py title="validasi_input.py"
try:
    umur = int(input("Masukan Umur\t: "))
    print(f"Umur saya {umur}")
except ValueError:
    print("Input harus berupa angka!")
```

```py title="output"
Masukan Umur : dua puluh
Input harus berupa angka!
```

>ℹ️ Catatan: Penanganan error dengan `try-except` merupakan topik advanced diluar materi praktikum. Untuk sekarang cukup pahami bahwa error ini terjadi jika input tidak sesuai tipe data.

### 2. Input kosong

Jika user hanya menekan Enter:

```py title="error_empty.py"
nama = input("Masukan Nama\t: ")
if nama == "":
    print("Nama tidak boleh kosong!")
```
>ℹ️ Catatan: Struktur `if-else` akan dipelajari di pertemuan kedua, jadi di sini hanya diperkenalkan secara singkat.

---

## 💡 Tips

* Gunakan `strip()` untuk menghapus spasi berlebih:

  ```py
  nama = input("Masukan Nama: ").strip()
  ```
