// H2-TASK:
// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"

function getDigits(input: string): string {
  let result: string = "";

  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char >= "0" && char <= "9") {
      result += char;
    }
  }

  return result;
}

console.log(getDigits("m14i1t"));



// // H-TASK:

// // shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// // MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(arr: number[]): string {
//   return arr.filter((num) => num > 0).join(", ");
// }

// console.log(getPositive([1, -4, 2]));

// // G-TASK:

// // Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// // MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// function getHighestIndex(arr: number[]): number {
//     if (arr.length === 0) {
//         throw new Error("Array cannot be empty");
//     }

//     let maxIndex = 0;
//     let maxValue = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//             maxIndex = i;
//         }
//     }

//     return maxIndex;
// }

// const exampleArray = [5, 21, 12, 21, 8];
// const highestIndex = getHighestIndex(exampleArray);
// console.log(highestIndex);
