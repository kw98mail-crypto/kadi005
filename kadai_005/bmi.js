// 体重（kg）
let weight = 68;

// 身長（cm）
let height = 170;

// cm → m に変換
let heightM = height / 100;

// BMI を計算
let BMI = weight / (heightM * heightM);

// 結果を表示
console.log("BMI =", BMI);

