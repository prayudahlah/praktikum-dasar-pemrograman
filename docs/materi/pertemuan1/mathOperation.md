---
id: materiMathOperation
title: Python Math Operation
sidebar_label: Python Math Operation
sidebar_position: 3
---

## 🧮 Operasi Matematika di Python

Python mendukung berbagai **operasi aritmetika** untuk mengolah angka. Berikut adalah daftar operator yang sering digunakan:

| Operator | Fungsi              | Contoh    | Hasil |
| -------- | ------------------- | --------- | ----- |
|  `+`    | Pertambahan         | `10 + 5`  | `15`  |
|  `-`    | Pengurangan         | `10 - 5`  | `5`   |
|  `*`   | Perkalian           | `10 * 5`  | `50`  |
|  `/`    | Pembagian (float)   | `10 / 4`  | `2.5` |
|  `//`  | Pembagian bulat     | `10 // 4` | `2`   |
|  `%`   | Modulus (sisa bagi) | `10 % 4`  | `2`   |
|  `**`  | Pangkat             | `2 ** 3`  | `8`   |

---

## ➕ Pertambahan

```py title="pertambahan.py"
angka = 100
angka = angka + 100
print(angka)
```

```py title="output"
200
```

---

## ➖ Pengurangan

```py title="pengurangan.py"
angka = 200
angka = angka - 50
print(angka)
```

```py title="output"
150
```

---

## ✖️ Perkalian

```py title="perkalian.py"
angka = 150
angka = angka * 10
print(angka)
```

```py title="output"
1500
```

---

## ➗ Pembagian

```py title="pembagian.py"
angka = 1500
angka = angka / 6
print(angka)
```

```py title="output"
250.0
```

---

## 🔢 Pembagian Bulat

Operator `//` digunakan untuk melakukan pembagian bulat (integer division).
Artinya, hasil pembagian **selalu dibulatkan ke bawah** menuju bilangan bulat terdekat.

Contoh:

```py title="pembagian_bulat.py"
angka = 250
angka = angka // 25
print(f"250 // 25 = {angka}")

angka = 10
print(f"10 // 3 = {10 // 3}")

angka = -10
print(f"-10 // 3 = {-10 // 3}")
```

```py title="output"
250 // 25 = 10
10 // 3 = 3
-10 // 3 = -4
```

➡️ Perhatikan kasus `-10 // 3` hasilnya `-4`, bukan `-3`, karena Python **selalu membulatkan ke bawah (floor)**, bukan sekadar membuang desimal.

---

## 🌀 Modulus

Operator `%` digunakan untuk mendapatkan sisa pembagian.

```py title="modulus.py"
angka = 10
angka = angka % 7
print(angka)
```

```py title="output"
3
```

---

## 🔺 Pangkat

```py title="pangkat.py"
angka = 3
angka = angka ** 3
print(angka)
```

```py title="output"
27
```

---

## ✍️ Augmented Assignment

Selain cara biasa, kita juga bisa menuliskan operasi dengan lebih singkat menggunakan **augmented assignment**:

```py title="augmented.py"
angka = 10
angka += 5   # sama dengan angka = angka + 5
print(f"Angka setelah ditambah 5: {angka}")

angka *= 2   # sama dengan angka = angka * 2
print(f"Angka setelah ditambah 5 lalu dikali 2: {angka}")
```

```py title="output"
Angka setelah ditambah 5 lalu : 15
Angka setelah ditambah 5 lalu dikali 2: 30
```

