function addData (){
  getData();
  arr.push({
    first: document.getElementById('inp1').value,
    second: document.getElementById('inp2').value,
    third: document.getElementById('inp3').value,
    four: document.getElementById('inp4').value,
    five: document.getElementById('inp5').value,
    six: document.getElementById('sel').value,
    seven: document.getElementById('sel2').value,
    eight: document.getElementById('sel3').value,
    nine: document.getElementById('sel1').value,
    ten: document.getElementById('inp6').value
  })
  localStorage.setItem('local',JSON.stringify(arr));
  showData();
}
var arr = new Array();
function getData (){
    const local = localStorage.getItem('local');
    if(local != null){
      arr = JSON.parse(local);
    }
}
function showData (){
    getData();
     let table  = document.getElementById('table');
     var x = table.rows.length;
    while(--x){
      table.deleteRow(x);
    }
    for(var i=0; i<arr.length; i++){
    let table  = document.getElementById('table');
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);
    let cell9 = newRow.insertCell(8);
    let cell10 = newRow.insertCell(9);
    cell1.innerHTML = arr[i].first;
    cell2.innerHTML = arr[i].second;
    cell3.innerHTML = arr[i].third;
    cell4.innerHTML = arr[i].four;
    cell5.innerHTML = arr[i].five;
    cell6.innerHTML = arr[i].six;
    cell7.innerHTML = arr[i].seven;
    cell8.innerHTML = arr[i].eight;
    cell9.innerHTML = arr[i].nine;
    cell10.innerHTML = arr[i].ten;
    clearVal();
    select();
    }
}
document.getElementById('btn1').addEventListener('click',addData);
var index = document.getElementById('table');
var rIndex;
function select (){
  for(var i=0; i<index.rows.length; i++){
     index.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        // arr.forEach((item,index)=>{index});
        document.getElementById('inp1').value = this.cells[0].innerHTML;
        document.getElementById('inp2').value = this.cells[1].innerHTML;
        document.getElementById('inp3').value = this.cells[2].innerHTML;
        document.getElementById('inp4').value = this.cells[3].innerHTML;
        document.getElementById('inp5').value = this.cells[4].innerHTML;
        document.getElementById('sel').value =  this.cells[5].innerHTML;
        document.getElementById('sel1').value = this.cells[6].innerHTML;
        document.getElementById('sel2').value = this.cells[7].innerHTML;
        document.getElementById('sel3').value = this.cells[8].innerHTML;
        document.getElementById('inp6').value = this.cells[9].innerHTML;
     }
  }
}
function editrow (){
  let inp1 = document.getElementById('inp1').value;
  let inp2 = document.getElementById('inp2').value;
  let inp3 = document.getElementById('inp3').value;
  let inp4 = document.getElementById('inp4').value;
  let inp5 = document.getElementById('inp5').value;
  let inp6 = document.getElementById('sel').value;
  let inp7 = document.getElementById('sel1').value;
  let inp8 = document.getElementById('sel2').value;
  let inp9 = document.getElementById('sel3').value;
  let inp10 = document.getElementById('inp6').value;
  index.rows[rIndex].cells[0].innerHTML = inp1;
  index.rows[rIndex].cells[1].innerHTML = inp2;
  index.rows[rIndex].cells[2].innerHTML = inp3;
  index.rows[rIndex].cells[3].innerHTML = inp4;
  index.rows[rIndex].cells[4].innerHTML = inp5;
  index.rows[rIndex].cells[5].innerHTML = inp6;
  index.rows[rIndex].cells[6].innerHTML = inp7;
  index.rows[rIndex].cells[7].innerHTML = inp8;
  index.rows[rIndex].cells[8].innerHTML = inp9;
  index.rows[rIndex].cells[8].innerHTML = inp10;
  clearVal();
}
document.getElementById('btn2').addEventListener('click',editrow);
function remove (){
  var local = localStorage.getItem('local');
  arr = JSON.parse(local);
  arr.splice(rIndex -1,1);
  localStorage.setItem('local',JSON.stringify(arr));
  // index.deleteRow(rIndex);
  showData();
  clearVal();
}
document.getElementById('btn3').addEventListener('click',remove);
document.getElementById('btn4').addEventListener('click',function(){
  localStorage.clear();
  location.reload();
})
function clearVal(){
  document.getElementById('inp1').value = "";
  document.getElementById('inp2').value = "";
  document.getElementById('inp3').value = "";
  document.getElementById('inp4').value = "";
  document.getElementById('inp5').value = "";
  document.getElementById('inp6').value = "";
}
document.getElementById('serchItem').addEventListener('change',function(){
  var search = document.getElementById('serchItem').value;
  console.log(search);
  var inp = document.getElementById('inp');
  inp.addEventListener('keyup',function(){
    let filter = inp.value.toUpperCase();
    let myTable = document.getElementById('table');
    let tr = myTable.getElementsByTagName('tr');
    for (var i=0; i<tr.length; i++){
          let td =  tr[i].getElementsByTagName('td')[search];
          if (td){
              let textValue = td.textContent || td.innerHTML;
              if(textValue.toUpperCase().indexOf(filter) >-1){
                  tr[i].style.display = "";
              }else{
                  tr[i].style.display = "none";
              }
            }
        }
  })
})