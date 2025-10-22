/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  // Your code here
  if (!petBreed || !petName) {
    console.log(`Missing information. Please provide a valid pet.`)
  } else {
    switch (petBreed) {
      case 'dog':
        console.log(`I love dogs! ${petName} is so cute!`);
        break;
      case 'cat':
        console.log(`I love cats! ${petName} is so cute!`);
        break;
      case 'turtle':
        console.log(`Who doesn't love a good turtle? ${petName} is the tops.`);
        break;
      case 'snake':
        console.log(`Not a fan, please take ${petName} and leave.`);
        break;
      default:
        console.log(`What an...interesting pet.`);
    }
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  // Your code here
  for (; firstNum < secondNum; firstNum++) {
    console.log(firstNum)
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  // Your code here
  for (const letter of str) {
    console.log(`${letter.toUpperCase()}!`);
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  // Your code here
  const object = { lowercase: 0, uppercase: 0, neither: 0 };
  for (const letter of str) {
    if (!letter.match('[a-zA-Z]')) {
      object.neither++;
    } else if (letter === letter.toUpperCase()) {
      object.uppercase++;
    } else if (letter === letter.toLowerCase()) {
      object.lowercase++;
    }
  }
  return object;
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  // Your code here
  const greedyGnomes = [];
  for (const gnome of gnomes) {
    if (gnome.stolenDecorations.length > 1) {
      greedyGnomes.push(gnome.name);
    }
  }
  return greedyGnomes;
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
