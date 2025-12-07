function BMI(weight, height) {
  // heightはメートルで入力（例：170cm → 1.7）
  const bmi = weight / (height * height);
  return bmi;
}

// 例：体重 68kg, 身長 170cm の場合
const weight = 68;
const height = 1.70;

console.log(BMI(weight, height)); 
