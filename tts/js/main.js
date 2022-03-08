import { add } from './Utils.js';

// console.log(add([1, 2, 3]));
let app = document.querySelector('#app');
let horizontal = 'JAVASCRIPT';
let vertical = 'ANGULAR';
// app.innerHTML = mendatar(horizontal);

function mendatar(data) {
  let TR = '<tr >';
  for (let i = 0; i < data.length; i++) {
    TR += `<td>${data[i]}</td>`;
  }
  TR += '</tr>';
  console.log(TR);
  return TR;
}

// 1. ambil nilai jawaban
// 2. hitung panjang nilai jawaban
// 3. pilih nilai jawaban pertama untuk mendatar paling atas sebagai patokan
// 4. pilih nilai jawaban kedua untuk dijadikan menurun
// 5. membuat fungsi yang dapat menemukan nilai index[0] mendatar awal = index[0] menurun
// 6. jika mendatar maka yang dilooping td nya, jika menurun yang dilooping tr nya, dengan syarat td yang tidak terisi akan memiliki warna hitam
