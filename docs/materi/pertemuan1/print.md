---
id: materiPrint
title: Python Print
sidebar_label: Python Print
sidebar_position: 1
---

---
## 📖 Definisi dan Sintaks Dasar

Fungsi `print()` digunakan untuk menampilkan output ke layar.  
Sintaks dasarnya adalah:

```py title="hello_world.py"
print("Hello, world!")
```
```py title="output"
Hello, world!
```

---
## 🔁 Print berulang

`print()` juga dapat mencetak sebuah kalimat berkali kali menggunakan * setelah deklarasi kalimat

```py title="print_berulang.py"
print("Halo " * 5))
```
```py title="output"
Halo Halo Halo Halo Halo 
```

---
## ↩️ Tab dan Enter

Jika ingin menggunakan enter atau tab pada print, maka dapat menggunakan :  
- `\n` = enter  
- `\t` = tab

```py title="tab_dan_enter.py"
print("Prodi\t\t: Sains Data")
print("Fakultas\t: Fatisda\nKelas\t\t: B")
```

```py title="output"
Prodi           : Sains Data
Fakultas        : Fatisda
Kelas           : B
```

---
## ⏩ Print Tanpa New Line

Pada akhir print, jika tidak ingin pindah baris, dapat menggunakan `end = ""`

```py title="print_tanpa_new_line.py"
print("Belajar Koding ",end = "")
print("Menggunakan Python")
```

```py title="output"
Belajar Koding Menggunakan Python
```
