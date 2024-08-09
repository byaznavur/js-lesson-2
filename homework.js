// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son”.
// console.log(A % 2 === 0);
// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:

// "A >= 0 yoki B <-2"

// console.log(A >= 0 || B < -2);
// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
// console.log((A > B && B > C) || (C > B && B > A));
// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".

// console.log(A % 2 !== 0 && B % 2 !== 0);
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
// console.log(A % 2 !== 0 || B % 2 !== 0);
// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
// console.log((A % 2 == 0 && B % 2 !== 0) || (A % 2 !== 0 && B % 2 == 0));
// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".

// console.log(A > 0 && B > 0 && C > 0);
// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".

// console.log(
//   (A > 0 && B > 0 && C < 0) ||
//     (A > 0 && B < 0 && C > 0) ||
//     (A < 0 && B > 0 && C > 0)
// );

// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
// console.log(
//   (A > 0 && B < 0 && C < 0) ||
//     (A < 0 && B > 0 && C < 0) ||
//     (A < 0 && B < 0 && C > 0)
// );
// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".

// console.log(A > 9 && A % 2 == 0);
// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".

// console.log(A > 99 && A % 2 !== 0);
// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".

// console.log(A === -B || A === -C || B === -C);

// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".
// let ABC = 321;
// let C = ABC % 10;
// let B = ((ABC - C) / 10) % 10;
// let A = (ABC - B * 10 - C) / 100;

// console.log(A);
// console.log(B);
// console.log(C);

// console.log(A > B && B > C);
// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".
// let ABC = 321;
// let C = ABC % 10;
// let B = ((ABC - C) / 10) % 10;
// let A = (ABC - B * 10 - C) / 100;

// console.log(A);
// console.log(B);
// console.log(C);

// console.log((A > B && B > C) || (A < B && B < C));
// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
// let ABC = 321;
// let C = ABC % 10;
// let B = ((ABC - C) / 10) % 10;
// let A = (ABC - B * 10 - C) / 100;

// console.log(A);
// console.log(B);
// console.log(C);

// console.log((A > B && B > C) || (A < B && B < C));
// console.log(A == B);
// ! ﻿SHAXMATGA OID MASALALAR (IXTIYORIY)

// Boolean16. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Berilgan maydonlar bir xil rangda".
// let x1 = 3;
// let y1 = 4;

// let x2 = 5;
// let y2 = 6;

// let res = (x1 + y1) % 2 === (x2 + y2) % 2;

// console.log(res);
// Boolean17. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Ruh bir yurishda bir maydondan ikkinchisiga o'ta oladi".
// let x1 = 3;
// let y1 = 4;

// let x2 = 5;
// let y2 = 6;

// let res = x1 === x2 || y1 === y2;
// console.log(res);
// Boolean18. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Shoh bir yurishda bir maydondan ikkinchisiga o'ta oladi."

// let x1 = 3;
// let y1 = 4;

// let x2 = 5;
// let y2 = 6;

// let res = Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
// console.log(res);
// Boolean19. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Fil bir yurishda bir maydondan ikkinchisiga o'ta oladi".
// let x1 = 3;
// let y1 = 4;

// let x2 = 5;
// let y2 = 6;

// let res =Math.abs(x1 - x2) === Math.abs(y1 - y2);
// console.log(res);
// Boolean20. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Ot bir yurishda bir maydondan ikkinchisiga o'ta oladi".
let x1 = 3;
let y1 = 4;

let x2 = 5;
let y2 = 6;

const dx = Math.abs(x1 - x2);
const dy = Math.abs(y1 - y2);

let res = (dx === 2 && dy === 1) || (dx === 1 && dy === 2);

console.log(res); // true yoki false (natijaga qarab)
