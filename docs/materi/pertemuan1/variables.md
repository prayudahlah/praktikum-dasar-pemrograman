---
id: materiVariable
title: Python Variable
sidebar_label: Python Variable
sidebar_position: 2
---

---

## 📖 Definisi dan Sintaks Dasar

Variabel adalah tempat untuk menyimpan data di dalam program.
Dalam Python, deklarasi variabel dilakukan dengan cara memberikan nama lalu diikuti tanda sama dengan `=` dan nilainya.

```py title="variabel_dasar.py"
nama = "Deskafim"
umur = 20
print(nama)
print(umur)
```

```py title="output"
Deskafim
20
```

---

## 🔢 Tipe Data Variabel

Python mendukung berbagai tipe data untuk variabel, misalnya:

* `int` → bilangan bulat
* `float` → bilangan desimal
* `str` → teks
* `bool` → True/False

```py title="tipe_data.py"
angka = 10          # int
pi = 3.14           # float
teks = "Halo"        # str
is_active = True    # bool

print(type(angka))
print(type(pi))
print(type(teks))
print(type(is_active))
```

```py title="output"
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
```

---

## 🔁 Multiple Assignment

Python memungkinkan inisialisasi beberapa variabel sekaligus dalam satu baris.

```py title="multiple_assignment.py"
a, b, c = 1, 2, 3
print(a, b, c)
```

```py title="output"
1 2 3
```

---

## ♻️ Reassignment

Nilai variabel dapat diganti kapan saja selama program berjalan.

```py title="reassignment.py"
x = 5
print(x)

x = "Lima"
print(x)
```

```py title="output"
5
Lima
```

---

## 🖨️ Print Variabel dengan Kalimat

Ada 2 cara menampilkan variabel bersama kalimat di Python.

### 1. Menggunakan f-string (format-string)

```py title="print_variabel_fstring.py"
umur = 20
prodi = "Sains Data"
ipk = 3.75
lulus = True

print("1. Contoh Penggunaan variabel dengan kalimat :)")
print("Nama\t: Deskafim_")
print(f"Umur\t: {umur}")
print(f"Prodi\t: {prodi}")
print(f"IPK\t: {ipk:.2f}")      # .2f untuk 2 angka di belakang koma
print(f"Lulus\t: {lulus}")
```

```py title="output"
1. Contoh Penggunaan variabel dengan kalimat :)
Nama    : Deskafim_
Umur    : 20
Prodi   : Sains Data
IPK     : 3.75
Lulus   : True
```

### 2. Menggunakan format klasik (koma atau format())

```py title="print_variabel_format.py"
umur = 20
prodi = "Sains Data"
ipk = 3.75
lulus = True

print("2. Contoh Penggunaan variabel dengan kalimat :)")
print("Nama\t: Deskafim_")
print("Umur\t:", umur)
print("Prodi\t:", prodi)
print("IPK\t:", "{:.2f}".format(ipk))
print("Lulus\t:", lulus)
```

```py title="output"
2. Contoh Penggunaan variabel dengan kalimat :)
Nama    : Deskafim_
Umur    : 20
Prodi   : Sains Data
IPK     : 3.75
Lulus   : True
```
