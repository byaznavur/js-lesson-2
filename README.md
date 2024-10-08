# js-lesson-2

### **JavaScript Ma'lumot Turlari**

### **1. Asosiy (Primitive) Ma'lumot Turlari**

1. **Number**
    - **Ta'rifi**: Sonlarni ifodalash uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        console.log(Infinity, typeof Infinity); // Infinity qiymati va tipi
        console.log(12 / 0); // Infinity
        console.log(NaN, typeof NaN); // NaN (Not a Number)
        console.log(0 / 0); // NaN
        console.log(0b10110); // Binarny (21)
        console.log(0o4762); // Oktal (20050)
        console.log(0xa6b8f); // Hex (426671)
        console.log(0.68); // Float (0.68)
        console.log(0.1 + 0.2); // JavaScriptda noaniqlik (0.30000000000000004)
        console.log(12e5); // Ekspozitsiya (1200000)
        console.log(12e-5); // Ekspozitsiya (0.00012)
        console.log(123_456_789); // Numeric separator (123456789)
        
        ```
        
2. **String**
    - **Ta'rifi**: Matnli ma'lumotlarni ifodalash uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        let doubleQuote = "Abdulaziz Programmer";
        let singleQuote = 'Abdulaziz Programmer';
        let backTicks = `Abdulaziz Programmer`;
        
        ```
        
3. **Undefined**
    - **Ta'rifi**: O'zgaruvchi e'lon qilingan, lekin unga qiymat tayinlanmagan.
    - **Misollar**:
        
        ```jsx
        let firstName;
        console.log(firstName); // undefined
        
        ```
        
4. **Null**
    - **Ta'rifi**: Bilinmaydigan yoki yo'q qiymatni anglatadi.
    - **Misollar**:
        
        ```jsx
        let selected = null;
        console.log(typeof selected); // object (JavaScript xatosi)
        
        ```
        
5. **Boolean**
    - **Ta'rifi**: Haqiqiy yoki yolg'on qiymatlarni ifodalash uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        let isMarried = false;
        let isSingle = true;
        
        ```
        
6. **BigInt**
    - **Ta'rifi**: Katta butun sonlarni ifodalash uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        let b1 = 1231232312321312321321n;
        let b2 = BigInt(234343413213123123);
        
        ```
        
7. **Symbol**
    - **Ta'rifi**: Yunik qiymatlarni yaratish uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        let s1 = Symbol();
        let s2 = Symbol();
        console.log(s1 === s2); // false
        
        ```
        

### **2. Murakkab (Complex) Ma'lumot Turlari**

1. **Array (Massiv)**
    - **Ta'rifi**: Bir nechta qiymatlarni saqlash uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        let arr = [1, 5, 'a', null, 'bcd', undefined];
        
        ```
        
2. **Object (Obyekt)**
    - **Ta'rifi**: Kalit-qiymat juftliklarini saqlash uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        let person = {
          firstName: "Abdulaziz",
          lastName: "Programmer",
          age: 24
        };
        
        ```
        

### **3. Operatorlar**

1. **Aritmetik Operatorlar**
    - **Ta'rifi**: Sonli qiymatlarni hisoblash uchun ishlatiladi.
    - **Misollar**:
        
        ```jsx
        let a = 5 + 2; // qo'shish
        let b = 5 - 2; // ayirish
        let c = 5 * 2; // ko'paytirish
        let d = 5 / 2; // bo'lish
        let e = 5 ** 2; // daraja
        let f = 5 % 2; // qoldiqli bo'lish
        
        ```
        
2. **Tayinlash Operatorlari**
    - **Ta'rifi**: Qiymatlarni o'zgaruvchilarga tayinlash uchun ishlatiladi.
    - **Misollar**:
        
        
        | Operator | Misol | Qanday ishlaydi |
        | --- | --- | --- |
        | = | x = y | x = y |
        | += | x += y | x = x + y |
        | -= | x -= y | x = x - y |
        | *= | x *= y | x = x * y |
        | /= | x /= y | x = x / y |
        | %= | x %= y | x = x % y |
        | **= | x **= y | x = x ** y |
3. **Taqqoslash Operatorlari**
    - **Ta'rifi**: Qiymatlarni taqqoslash uchun ishlatiladi.
    - **Misollar**:
        
        
        | Operator | Ta'rif |
        | --- | --- |
        | == | teng |
        | === | teng qiymat va tur |
        | != | teng emas |
        | !== | teng emas yoki tur teng emas |
        | > | kattaroq |
        | >= | kattaroq yoki teng |
        | < | kichikroq |
        | <= | kichikroq yoki teng |
4. **Mantiqiy Operatorlar**
    - **Ta'rifi**: Boolean qiymatlar bilan ishlash uchun ishlatiladi.
    - **Misollar**:
        
        
        | Operator | Ta'rif | Misollar |
        | --- | --- | --- |
        | && | mantiqiy AND | true && true = true, true && false = false |
        | || | mantiqiy OR | true || true = true, false || true = true |
        | ! | mantiqiy NOT | !true → false, !false → true |
5. **Bitwise Operatorlar**
    - **Ta'rifi**: Bitlarga asoslangan operatsiyalarni amalga oshiradi.
    - **Misollar**:
        
        
        | Operator | Ta'rif | Misol | Natija |
        | --- | --- | --- | --- |
        | & | AND | 5 & 1 | 1 |
        | | | OR | 5 | 1 | 5 |
        | ~ | NOT | ~5 | 10 |
        | ^ | XOR | 5 ^ 1 | 4 |
        | << | chapga siljitish | 5 << 1 | 10 |
        | >> | o'ngga siljitish | 5 >> 1 | 2 |
        | >>> | unsigned o'ngga siljitish | 5 >>> 1 | 2 |
6. **Boshqa Operatorlar**
    - **Nullish Coalescing Operator** (??): Null yoki undefined qiymatlar uchun zaxira qiymatni qaytaradi.
    - **Conditional (ternary) Operator** (?:): If-else shartlarini qisqartirish uchun ishlatiladi.
    - **Optional Chaining Operator** (?.): Ob'ektning mavjud bo'lmagan xususiyatlariga xavfsiz kirish imkonini beradi.

### **4. `Math` Objekti**

1. **Doimiylar**
    - **Math.E**: Euler raqami
    - **Math.PI**: PI qiymati
    - **Math.SQRT2**: 2 ning kvadrat ildizi
    - **Math.SQRT1_2**: 1/2 ning kvadrat ildizi
    - **Math.LN2**: 2 ning tabiiy logarifmi
    - **Math.LN10**: 10 ning tabiiy logarifmi
    - **Math.LOG2E**: E ning 2 asosidagi logarifmi
    - **Math.LOG10E**: E ning 10 asosidagi logarifmi
2. **Metodlar**
    
    
    | Metod | Ta'rif |
    | --- | --- |
    | Math.round(x) | x ni eng yaqin butun songa yaxlitlaydi |
    | Math.trunc(x) | x ning butun qismini qaytaradi |
    | Math.ceil(x) | x ni eng yaqin yuqori butun songa yaxlitlaydi |
    | Math.floor(x) | x ni eng yaqin pastki butun songa yaxlitlaydi |
    | Math.sign(x) | Musbat, nol yoki manfiy qiymat qaytaradi |
    | Math.pow(x, y) | x ning y darajasini qaytaradi |
    | Math.sqrt(x) | x ning kvadrat ildizini qaytaradi |
    | Math.abs(x) | x ning musbat qiymatini qaytaradi |
    | Math.min(...args) | Minimal qiymatni qaytaradi |
    | Math.max(...args |  |

) | Maksimal qiymatni qaytaradi |
| Math.cos(x) | x burchakining kosinusini qaytaradi |
| Math.sin(x) | x burchakining sinusini qaytaradi |
| Math.random() | [0, 1) oraliqda tasodifiy son qaytaradi |

1. **Tasodifiy Son**
    - **Tasodifiy son olish**: `Math.random()` yordamida [0, 1) oraliqda tasodifiy son qaytariladi.
    - **Interval oraliqda tasodifiy son olish**: `Math.floor(Math.random() * (max - min) ) + min;` [min, max) yoki `Math.floor(Math.random() * (max - min + 1) ) + min;` [min, max] oraliqlarida.

### **Nazariy va Amaliy Savollar**

1. **Nazariy Savollar**:
    - JavaScriptdagi asosiy ma'lumot turlari qanday?
    - `null` va `undefined` orasidagi farq nima?
    - `Math` obyektining qaysi metodlari mavjud va ular qanday ishlaydi?
2. **Amaliy Savollar**:
    - JavaScriptda sonli qiymatlarni qanday taqqoslaysiz?
    - `Math.random()` yordamida tasodifiy sonni qanday olish mumkin?
    - Array va Object ma'lumot turlarini qanday e'lon qilasiz va ulardan qanday foydalanasiz?

Umid qilamanki, bu ma'lumotlar sizga yordam beradi! Agar qo'shimcha savollar yoki tushunmovchiliklar bo'lsa, so'rang.