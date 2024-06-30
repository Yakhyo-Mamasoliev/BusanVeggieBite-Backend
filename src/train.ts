// O-TASK:
// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

function calculateSumOfNumbers(arr: any[]): number {
  let sum = 0;

  for (const item of arr) {
    if (typeof item === "number") {
      sum += item;
    }
  }

  return sum;
}

const result = calculateSumOfNumbers([10, "10", { number: 10 }, true, 35]);
console.log(result);

// // 2024-06-27
// // MIT 14
// // TASK N:

// // Parametr sifatida yagona string qabul qiladigan function tuzing.
// // Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// // 'true' yokida 'false' qaytarsin.
// // MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// // Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// // Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)
// // *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// // bir xil ma'noni beradigan so'zga aytiladi

// function palindromeCheck(word: string): boolean {
//   const reversedWord = word.split("").reverse().join("");
//   return word === reversedWord;
// }

// console.log(palindromeCheck("dad"));
// console.log(palindromeCheck("number"));

// // M-TASK:

// // Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// // MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(
//   numbers: number[]
// ): { number: number; square: number }[] {
//   return numbers.map((num) => ({
//     number: num,
//     square: num * num,
//   }));
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log("result:", result);

// // L-TASK:

// // Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// // MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(sentence: string): string {
//   let words = sentence.split(" ");
//   let reversedWords = words.map((word) => word.split("").reverse().join(""));
//   return reversedWords.join(" ");
// }

// console.log("output:", reverseSentence("we like coding"));

// // TASK K:

// // // Berilayotgan parametr tarkibida nechta unli harf bor
// // // ekanligini aniqlovchi function tuzing
// // // MASALAN: countVowels("string"); return 1
// // // Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// // // bo'lganligi uchun '1'ni qaytarmoqda

// function countVowels(input: string): number {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let char of input) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log("Vowels:", countVowels("string"));

// // J-TASK:

// // Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// // MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(sentence: string): string {
//   const words = sentence.split(" ");
//   let longestWord = "";
//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log("Longest word: ", findLongestWord("I come from Uzbekistan"));

// // I-TASK:

// // Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// // MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(nums: number[]): number {
//   let majorityElement = nums[0];
//   let maxCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         count++;
//       }
//     }

//     if (count > maxCount) {
//       maxCount = count;
//       majorityElement = nums[i];
//     }
//   }

//   return majorityElement;
// }

// console.log("return:", majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// // // H2-TASK:
// // // Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// // // MASALAN: getDigits("m14i1t") return qiladi "141"

// // function getDigits(input: string): string {
// //   let result: string = "";

// //   for (let i = 0; i < input.length; i++) {
// //     const char = input[i];
// //     if (char >= "0" && char <= "9") {
// //       result += char;
// //       //console.log(result);
// //     }
// //   }

// //   return result;
// // }

// // console.log(getDigits("m14i1t"));

// /*
// function getDigits(input) {
//   let result = "";

//   for (let i = 0; i < input.length; i++) {
//     const char = input[i];
//     if (char >= "0" && char <= "9") {
//       result += char;
//     }
//   }

//   return result;
// }

// console.log(getDigits("m14i1t")); */

// // // H-TASK:

// // // shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// // // MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// // function getPositive(arr: number[]): string {
// //   return arr.filter((num) => num > 0).join(", ");
// // }

// // console.log(getPositive([1, -4, 2]));

// // // G-TASK:

// // // Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// // // MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// // function getHighestIndex(arr: number[]): number {
// //     if (arr.length === 0) {
// //         throw new Error("Array cannot be empty");
// //     }

// //     let maxIndex = 0;
// //     let maxValue = arr[0];

// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] > maxValue) {
// //             maxValue = arr[i];
// //             maxIndex = i;
// //         }
// //     }

// //     return maxIndex;
// // }

// // const exampleArray = [5, 21, 12, 21, 8];
// // const highestIndex = getHighestIndex(exampleArray);
// // console.log(highestIndex);
