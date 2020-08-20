const firstRow = prompt('Введите предложение например "мама мыла раму"');
const secondRow = prompt('Введите предложение например "собака друг человека"');

let firstRowCount = 0;
let secondRowCount = 0;

function getRow(firstRow, secondRow) {
    for (let i = 0 ; i < firstRow.length; i++){
    if(firstRow.charAt(i) == 'а'){
       firstRowCount++;
    }
};

for (let i = 0 ; i < secondRow.length; i++){
    if(secondRow.charAt(i) == 'а'){
       secondRowCount++;
    }
};

if(firstRowCount > secondRowCount ){
    alert('В этом предложении ' + '"' + firstRow + '"' + ' больше буквы "а"');
}else if(firstRowCount == secondRowCount){
    alert('Тут нет ни одной буквы "а"')
}else {
    alert('В этом предложении ' + '"' + secondRow + '"' + ' больше буквы "а"');
}
}

getRow(firstRow, secondRow)
