var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
var para = document.querySelector('p');

/*----- while loop ------------ 
var i = 0;
while (i < cats.length) {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++;
}
*/
/*-------- do while loop ------- */
var i = 0;

do {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }
    i++;
} while (i < cats.length);
para.textContent = info;