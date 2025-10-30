---
id: materiList
title: Python List
sidebar_label: Python List
sidebar_position: 1
---

---

## 📦 Apa Itu List?

**List** digunakan untuk menyimpan beberapa elemen dalam satu variabel.
List dapat berisi berbagai tipe data seperti string, integer, float, atau bahkan list lain (nested list).

### Deklarasi List

```py title="deklarasi_list.py"
mahasiswa = []                   # List kosong
mahasiswa = ["Yuda", "Falah", "Alvin", "Ian"]   # List berisi data
```

```py title="output"
['Yuda', 'Falah', 'Alvin', 'Ian']
```

> 🧠 **Catatan:** Penomoran indeks pada list **dimulai dari 0**.

| Elemen | Yuda | Falah | Alvin | Ian |
| :----: | :--: | :---: | :---: | :-: |
| Indeks |   0  |   1   |   2   |  3  |

---

## 🔍 Mengakses Elemen List

```py title="akses_list.py"
print(mahasiswa[0])
print(f"Nama Mahasiswa: {mahasiswa[1]}")
```

```py title="output"
Yuda
Nama Mahasiswa: Falah
```

---

## ➕ Menambah dan Menyisipkan Elemen

```py title="tambah_list.py"
mahasiswa.append("Deskafim_")              # Tambah di akhir
mahasiswa.insert(2, "Deska")              # Sisipkan di indeks ke-2
print(mahasiswa)
```

```py title="output"
['Yuda', 'Falah', 'Deska', 'Alvin', 'Ian', 'Deskafim_']
```

---

## 🔁 Mengubah dan Menghapus Elemen

```py title="ubah_hapus_list.py"
mahasiswa[5] = "deskafim.code"             # Mengubah elemen indeks ke-5
mahasiswa.pop(2)                           # Menghapus elemen indeks ke-2
print(mahasiswa)
```

```py title="output"
['Yuda', 'Falah', 'Alvin', 'Ian', 'deskafim.code']
```

---

## 🧭 Operasi Umum pada List

| Operasi     | Fungsi                       | Contoh                     |
| ----------- | ---------------------------- | -------------------------- |
| `index(x)`  | Mencari posisi elemen        | `mahasiswa.index("Alvin")` |
| `sort()`    | Mengurutkan elemen           | `data.sort()`              |
| `reverse()` | Membalik urutan              | `data.reverse()`           |
| `count(x)`  | Menghitung jumlah kemunculan | `data.count(9)`            |
| `len(x)`    | Menghitung panjang list      | `len(data)`                |
| `max(x)`    | Mencari nilai terbesar       | `max(data)`                |
| `min(x)`    | Mencari nilai terkecil       | `min(data)`                |
| `sum(x)`    | Menjumlahkan semua elemen    | `sum(data)`                |

### Contoh:

```py title="operasi_list.py"
data = [6, 3, 5, 2, 1, 7, 7, 9, 9, 9, 9, 4, 6, 8, 10]
print(f"Data Sebelum Sort : {data}")
data.sort()
print(f"Data Sesudah Sort : {data}")
data.reverse()
print(f"Data Sesudah Reverse : {data}")
```

```py title="output"
Data Sebelum Sort : [6, 3, 5, 2, 1, 7, 7, 9, 9, 9, 9, 4, 6, 8, 10]
Data Sesudah Sort : [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9, 9, 9, 9, 10]
Data Sesudah Reverse : [10, 9, 9, 9, 9, 8, 7, 7, 6, 6, 5, 4, 3, 2, 1]
```

---

## 🧮 Fungsi Numerik Umum

```py title="fungsi_numerik.py"
data = [6, 3, 5, 2, 1, 7, 7, 9, 9, 9, 9, 4, 6, 8, 10]
print(f"Jumlah angka 9: {data.count(9)}")
print(f"Banyak Data: {len(data)}")
print(f"Nilai Maksimum: {max(data)}")
print(f"Nilai Minimum: {min(data)}")
pengeluaran = [12000, 5000, 5000, 10000, 15000, 10000, 122000]
print(f"Total Pengeluaran: {sum(pengeluaran)}")
```

```py title="output"
Jumlah angka 9: 4
Banyak Data: 15
Nilai Maksimum: 10
Nilai Minimum: 1
Total Pengeluaran: 177000
```

---

## 🧩 Nested List (List di dalam List)

List juga bisa berisi list lain — biasa digunakan untuk merepresentasikan **matriks** atau data tabel.

```py title="nested_list.py"
matriks1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matriks1)
print(f"Matriks 1:\n{matriks1[0]}\n{matriks1[1]}\n{matriks1[2]}")
```

```py title="output"
[[1, 2, 3], [4, 5, 6], [7, 8, 9]]
Matriks 1:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```

---

## 💡 Tips Tambahan

* Gunakan **list comprehension** untuk membuat list baru dari list lama dengan ekspresi singkat.

  ```py
  angka = [1, 2, 3, 4, 5]
  kuadrat = [x**2 for x in angka]
  print(kuadrat)
  ```

  ```py title="output"
  [1, 4, 9, 16, 25]
  ```

* List bersifat **mutable**, artinya isinya dapat diubah setelah dibuat.

* Untuk menyalin list tanpa referensi, gunakan `copy()`:

  ```py
  baru = mahasiswa.copy()
  ```
