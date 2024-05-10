function calculateNumbers(var1, var2) {
  return var1 + var2;
}

//Une fonction qui donne le minimum d'un tableau de nombres
function findMinimum(numbers) {
    if (numbers.length === 0) {
        return null;
    }
    
    let minimum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }
    
    return minimum;
}

