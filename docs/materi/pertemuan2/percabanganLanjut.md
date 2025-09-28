---
id: materiPercabanganLanjut
title: Percabangan Lanjut
sidebar_label: Match-Case
sidebar_position: 2
---

## 🎯 Match-Case pada Python

`match-case` pada dasarnya mirip dengan `if-else`, namun menggunakan **kasus** yang lebih eksplisit dan rapi.

### Sintaks Dasar

```py
match [variabel]:
    case [kondisi]:
        [code]
    case [kondisi]:
        [code]
    case _:  # mirip else pada if-else
        [code]
```

---

### Contoh 1: Konversi Huruf IPK ke Skala 4.0

```py title="match_ipk.py"
huruf_ipk = input("Masukan Huruf IPK : ")
match huruf_ipk:
    case "A":
        print("4.0")
    case "B":
        print("3.0")
    case "C":
        print("2.0")
    case _:
        print("1.0")
```

```py title="output"
Masukan Huruf IPK : B
3.0
```

💡 Catatan: `case _` berfungsi seperti `else`, menangkap semua kasus yang tidak tercantum sebelumnya.

---

### Contoh 2: Klasifikasi Umur dengan Match-Case + If

```py title="match_umur.py"
umur = int(input("Masukan Umur : "))
match umur:
    case n if 0 < n < 13:
        print("Anak Anak")
    case n if 13 <= n < 18:
        print("Remaja")
    case n if n >= 18:
        print("Dewasa")
    case _:
        print("Tidak Diketahui")
```

```py title="output"
Masukan Umur : 15
Remaja
```

> ℹ️ Tips tambahan untuk pemula:
>
> 1. `match-case` lebih rapi untuk banyak kasus dibanding `if-elif-else` panjang.
> 2. Setiap `case` bisa memiliki kondisi tambahan menggunakan `if`, seperti contoh umur.
> 3. `_` selalu menangkap semua kondisi yang tidak terdefinisi.
> 4. Aturan urutan `case` penting, sama seperti urutan `if-elif`.

---

### Bonus

Kamu bisa menggabungkan beberapa nilai dalam satu case:

```py
match huruf_ipk:
    case "A" | "A+":
        print("4.0")
```

Ini setara dengan "jika `huruf_ipk` adalah A atau `huruf_ipk` adalah A+, maka print 4.0".

