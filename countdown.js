var output = document.querySelector('.output');
output.innerHTML = '';

var i = 10;
while (i >= 0) {
    var para = document.createElement('p');
    if (i === 10) {
        para.textContent = 'Countdown ' + i;

    } else if (i === 0) {
        para.textContent = 'Blastoff!';
    } else {
        para.textContent = i;
    }
    output.appendChild(para);

    i--;
}