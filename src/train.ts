// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}
function countChars(input: string): { [key: string]: number } {
  const charCount: { [key: string]: number } = {};

  for (let char of input) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  return charCount;
}

console.log(countChars("hello"));

// // U-TASK:

// // Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// // MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;
// function countOdds(number: number): number {
//   let count = 0;

//   for (let i = 1; i <= number; i++) {
//     if (i % 2 !== 0) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countOdds(9));
// console.log(countOdds(11));

// // // // T-TASK:

// // // // Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// // // // MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// // // function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
// // //   const mergedArray = [...arr1, ...arr2];
// // //   return mergedArray.sort((a, b) => a - b);
// // // }

// // // const array1 = [0, 3, 4, 31];
// // // const array2 = [4, 6, 30];
// // // const result = mergeSortedArrays(array1, array2);
// // // console.log(result);

// // // // S-TASK:

// // // // // Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// // // // // MASALAN: missingNumber([3, 0, 1]) return 2

// // // // function missingNumber(nums: number[]): number {
// // // //   const n = nums.length;
// // // //   const expectedSum = (n * (n + 1)) / 2;
// // // //   const actualSum = nums.reduce((acc, num) => acc + num, 0);
// // // //   return expectedSum - actualSum;
// // // // }

// // // // const nums = [3, 0, 1];
// // // // console.log(missingNumber(nums));

// // // // // R-TASK:

// // // // // Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// // // // // MASALAN: calculate("1+3") return 4;

// // // // function calculate(expression: string): number {
// // // //   const parts = expression.split("+");

// // // //   const num1 = parseFloat(parts[0]);
// // // //   const num2 = parseFloat(parts[1]);
// // // //   return num1 + num2;
// // // // }

// // // // console.log(calculate("1+3"));

// // // // // // Q-TASK:

// // // // // // Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// // // // // // MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// // // // // function hasProperty(obj: Record<string, any>, property: string): boolean {
// // // // //   return obj.hasOwnProperty(property);
// // // // // }

// // // // // console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// // // // // console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false

// // // // // // P-TASK:

// // // // // // Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// // // // // // MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// // // // // function objectToArray(obj: { [key: string]: any }): [string, any][] {
// // // // //   const result: [string, any][] = [];

// // // // //   for (const key in obj) {
// // // // //     if (obj.hasOwnProperty(key)) {
// // // // //       result.push([key, obj[key]]);
// // // // //     }
// // // // //   }
// // // // //   return result;
// // // // // }

// // // // // const exampleObject = { a: 10, b: 20 };
// // // // // const result = objectToArray(exampleObject);
// // // // // console.log("Masalan:", result);

// // // // // // O-TASK:
// // // // // // Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// // // // // // MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// // // // // function calculateSumOfNumbers(arr: any[]): number {
// // // // //   let sum = 0;

// // // // //   for (const item of arr) {
// // // // //     if (typeof item === "number") {
// // // // //       sum += item;
// // // // //     }
// // // // //   }

// // // // //   return sum;
// // // // // }

// // // // // const result = calculateSumOfNumbers([10, "10", { number: 10 }, true, 35]);
// // // // // console.log(result);

// // // // // // 2024-06-27
// // // // // // MIT 14
// // // // // // TASK N:

// // // // // // Parametr sifatida yagona string qabul qiladigan function tuzing.
// // // // // // Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// // // // // // 'true' yokida 'false' qaytarsin.
// // // // // // MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// // // // // // Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// // // // // // Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)
// // // // // // *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// // // // // // bir xil ma'noni beradigan so'zga aytiladi

// // // // // function palindromeCheck(word: string): boolean {
// // // // //   const reversedWord = word.split("").reverse().join("");
// // // // //   return word === reversedWord;
// // // // // }

// // // // // console.log(palindromeCheck("dad"));
// // // // // console.log(palindromeCheck("number"));

// // // // // // M-TASK:

// // // // // // Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// // // // // // MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// // // // // function getSquareNumbers(
// // // // //   numbers: number[]
// // // // // ): { number: number; square: number }[] {
// // // // //   return numbers.map((num) => ({
// // // // //     number: num,
// // // // //     square: num * num,
// // // // //   }));
// // // // // }

// // // // // const result = getSquareNumbers([1, 2, 3]);
// // // // // console.log("result:", result);

// // // // // // L-TASK:

// // // // // // Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// // // // // // MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// // // // // function reverseSentence(sentence: string): string {
// // // // //   let words = sentence.split(" ");
// // // // //   let reversedWords = words.map((word) => word.split("").reverse().join(""));
// // // // //   return reversedWords.join(" ");
// // // // // }

// // // // // console.log("output:", reverseSentence("we like coding"));

// // // // // // TASK K:

// // // // // // // Berilayotgan parametr tarkibida nechta unli harf bor
// // // // // // // ekanligini aniqlovchi function tuzing
// // // // // // // MASALAN: countVowels("string"); return 1
// // // // // // // Yuqoridagi misolda 'string' so'zi tarkibida yagona unli harf 'i'
// // // // // // // bo'lganligi uchun '1'ni qaytarmoqda

// // // // // function countVowels(input: string): number {
// // // // //   const vowels = "aeiouAEIOU";
// // // // //   let count = 0;

// // // // //   for (let char of input) {
// // // // //     if (vowels.includes(char)) {
// // // // //       count++;
// // // // //     }
// // // // //   }

// // // // //   return count;
// // // // // }

// // // // // console.log("Vowels:", countVowels("string"));

// // // // // // J-TASK:

// // // // // // Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// // // // // // MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// // // // // function findLongestWord(sentence: string): string {
// // // // //   const words = sentence.split(" ");
// // // // //   let longestWord = "";
// // // // //   for (const word of words) {
// // // // //     if (word.length > longestWord.length) {
// // // // //       longestWord = word;
// // // // //     }
// // // // //   }
// // // // //   return longestWord;
// // // // // }

// // // // // console.log("Longest word: ", findLongestWord("I come from Uzbekistan"));

// // // // // // I-TASK:

// // // // // // Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// // // // // // MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// // // // // function majorityElement(nums: number[]): number {
// // // // //   let majorityElement = nums[0];
// // // // //   let maxCount = 0;

// // // // //   for (let i = 0; i < nums.length; i++) {
// // // // //     let count = 0;
// // // // //     for (let j = 0; j < nums.length; j++) {
// // // // //       if (nums[i] === nums[j]) {
// // // // //         count++;
// // // // //       }
// // // // //     }

// // // // //     if (count > maxCount) {
// // // // //       maxCount = count;
// // // // //       majorityElement = nums[i];
// // // // //     }
// // // // //   }

// // // // //   return majorityElement;
// // // // // }

// // // // // console.log("return:", majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// // // // // // // H2-TASK:
// // // // // // // Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// // // // // // // MASALAN: getDigits("m14i1t") return qiladi "141"

// // // // // // function getDigits(input: string): string {
// // // // // //   let result: string = "";

// // // // // //   for (let i = 0; i < input.length; i++) {
// // // // // //     const char = input[i];
// // // // // //     if (char >= "0" && char <= "9") {
// // // // // //       result += char;
// // // // // //       //console.log(result);
// // // // // //     }
// // // // // //   }

// // // // // //   return result;
// // // // // // }

// // // // // // console.log(getDigits("m14i1t"));

// // // // // /*
// // // // // function getDigits(input) {
// // // // //   let result = "";

// // // // //   for (let i = 0; i < input.length; i++) {
// // // // //     const char = input[i];
// // // // //     if (char >= "0" && char <= "9") {
// // // // //       result += char;
// // // // //     }
// // // // //   }

// // // // //   return result;
// // // // // }

// // // // // console.log(getDigits("m14i1t")); */

// // // // // // // H-TASK:

// // // // // // // shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// // // // // // // MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// // // // // // function getPositive(arr: number[]): string {
// // // // // //   return arr.filter((num) => num > 0).join(", ");
// // // // // // }

// // // // // // console.log(getPositive([1, -4, 2]));

// // // // // // // G-TASK:

// // // // // // // Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// // // // // // // MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.

// // // // // // function getHighestIndex(arr: number[]): number {
// // // // // //     if (arr.length === 0) {
// // // // // //         throw new Error("Array cannot be empty");
// // // // // //     }

// // // // // //     let maxIndex = 0;
// // // // // //     let maxValue = arr[0];

// // // // // //     for (let i = 1; i < arr.length; i++) {
// // // // // //         if (arr[i] > maxValue) {
// // // // // //             maxValue = arr[i];
// // // // // //             maxIndex = i;
// // // // // //         }
// // // // // //     }

// // // // // //     return maxIndex;
// // // // // // }

// // // // // // const exampleArray = [5, 21, 12, 21, 8];
// // // // // // const highestIndex = getHighestIndex(exampleArray);
// // // // // // console.log(highestIndex);
