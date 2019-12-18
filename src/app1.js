import $ from 'jQuery';
import './app1.css';
const $button1 = $('#add');
const $button2 = $('#reduce');
const $button3 = $('#mul');
const $button4 = $('#device');
const $number = $('#numbers');
let n = localStorage.getItem('n');
$number.text(n || 100);
$button1.on('click', () => {
    let n = parseInt($number.text());
    n += 1;
    localStorage.setItem('n',n)
    $number.text(n);
});
$button2.on('click', () => {
    let n = parseInt($number.text());
    n -= 1;
    localStorage.setItem('n',n)
    $number.text(n);
});
$button3.on('click', () => {
    let n = parseInt($number.text());
    n *= 2;
    localStorage.setItem('n',n)
    $number.text(n);
});
$button4.on('click', () => {
    let n = parseInt($number.text());
    n /= 2;
    localStorage.setItem('n',n)
    $number.text(n);
});

