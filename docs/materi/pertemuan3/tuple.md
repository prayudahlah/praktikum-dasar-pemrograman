---
id: materiTuple
title: Python Tuple
sidebar_label: Python Tuple
sidebar_position: 2
---

---

## 🔷 Apa itu Tuple?

`Tuple` digunakan untuk menyimpan beberapa elemen dalam satu variabel, **mirip seperti list**, namun **bersifat immutable** — artinya isinya **tidak bisa diubah**, ditambah, disisipkan, maupun dihapus.

---

## 🧩 Deklarasi Tuple

Tuple dapat dideklarasikan dengan dua cara:

```py title="tuple_dasar.py"
# Dengan tanda kurung
nama_var = (isi, isi, isi)

# Tanpa tanda kurung (opsional)
nama_var = isi, isi, isi
```

### Contoh:

```py title="tuple_contoh.py"
nilai_angka = 4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.0, 0.0
print(nilai_angka)
```

```py title="output"
(4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.0, 0.0)
```

---

## ⚠️ Tuple dengan Satu Elemen

Jika tuple hanya memiliki **satu elemen**, kamu **harus menambahkan koma (,)** agar dikenali sebagai tuple.

```py title="tuple_satu_elemen.py"
pi_1 = 3.14,
print(f"pi_1 = {pi_1}")
print("Type Variable Pi_1 :", type(pi_1))
```

```py title="output"
pi_1 = (3.14,)
Type Variable Pi_1 : <class 'tuple'>
```

Tanpa koma, variabel dianggap sebagai tipe data biasa (bukan tuple):

```py title="tuple_salah.py"
pi_2 = 3.14
print(f"pi_2 = {pi_2}")
print("Type Variable Pi_2 :", type(pi_2))
```

```py title="output"
pi_2 = 3.14
Type Variable Pi_2 : <class 'float'>
```

> 💡 **Catatan:** Tanda koma (`,`) lebih penting daripada tanda kurung `()` dalam pembentukan tuple!

---

## ⌨️ Input Tuple dari Pengguna

Tuple bisa diinput melalui keyboard menggunakan kombinasi `input()`, `split()`, `map()`, dan `tuple()`.

### Cara 1 (bertahap):

```py title="input_tuple_manual.py"
ip_semester = input("Masukan IP Semester : ")
ip_semester = ip_semester.split()
ip_semester = map(float, ip_semester)
ip_semester = tuple(ip_semester)
print(ip_semester)
```

### Cara 2 (langsung):

```py title="input_tuple_langsung.py"
gravity = tuple(map(float, input("Masukan Gravitasi Bumi : ").split()))
print(f"Gravitasi Bumi Adalah : {gravity}")
```

```py title="output"
Masukan Gravitasi Bumi : 9.8 9.81 9.807
Gravitasi Bumi Adalah : (9.8, 9.81, 9.807)
```

---

## 🧮 Fungsi yang Berlaku untuk Tuple

Fungsi bawaan berikut **juga dapat digunakan untuk tuple**, seperti halnya pada list:

| Fungsi       | Kegunaan                                |
| ------------ | --------------------------------------- |
| `len(t)`     | Menghitung jumlah elemen                |
| `sum(t)`     | Menjumlahkan semua elemen numerik       |
| `max(t)`     | Mencari nilai maksimum                  |
| `min(t)`     | Mencari nilai minimum                   |
| `t.index(x)` | Mencari indeks elemen `x`               |
| `t.count(x)` | Menghitung jumlah kemunculan elemen `x` |

### Contoh:

```py title="fungsi_tuple.py"
angka = (2, 5, 3, 7, 5, 5, 9)
print(f"Tuple: {angka}")
print(f"Banyak elemen: {len(angka)}")
print(f"Jumlah total: {sum(angka)}")
print(f"Nilai terbesar: {max(angka)}")
print(f"Nilai terkecil: {min(angka)}")
print(f"Jumlah angka 5: {angka.count(5)}")
print(f"Indeks pertama angka 7: {angka.index(7)}")
```

```py title="output"
Tuple: (2, 5, 3, 7, 5, 5, 9)
Banyak elemen: 7
Jumlah total: 36
Nilai terbesar: 9
Nilai terkecil: 2
Jumlah angka 5: 3
Indeks pertama angka 7: 3
```

---

## 💡 Bonus: Mengecek Tipe Data

Gunakan fungsi `type()` untuk mengetahui tipe data variabel.

```py title="type_variable.py"
angka1 = 4
t_var = type(angka1)
print(t_var)

angka2 = 5.5
print(type(angka2))
```

```py title="output"
<class 'int'>
<class 'float'>
```

---

## 🧠 Catatan Penting

* Gunakan **tuple** saat data **tidak boleh diubah** (misalnya koordinat, konstanta, nilai tetap, dsb).
* Gunakan **list** saat data **perlu dimodifikasi**.

> 🎓 **Kesimpulan:** Tuple adalah struktur data yang efisien dan aman dari perubahan, cocok untuk menyimpan data konstan seperti nilai IPK, koordinat, atau parameter tetap lainnya.
