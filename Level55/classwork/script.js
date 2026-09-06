let scores = [55, 92, 84, 70, 68, 95, 45];

for (let i = 0; i < scores.length; i++) {
  let score = scores[i];

  if (score >= 90) {
    console.log(`ფანტასტიკურია! ქულა არის ${score}. სტუდენტი იღებს სტიპენდიას.`);
  } else if (score >= 70) {
    console.log(`კარგი შედეგია! ქულა არის ${score}. სტუდენტმა ჩააბარა.`);
  } else {
    console.log(`ქულა არის ${score}. სტუდენტს სჭირდება გადაბარება.`);
  }
}
