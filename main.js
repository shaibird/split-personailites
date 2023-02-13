const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const disorderList = originalDisorderFormat.split('|$|')

const newList = disorderList.join("</div> \n <div>")

console.log(`<div>${newList}</div>`)