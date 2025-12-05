// console.log('x');
let x=1
function demo(){
    if(x==1){
        console.log(document.querySelector('.book-apoi'));
        
        document.querySelector('.book-apoi').style='width: fit-content;height: fit-content;z-index: 9;padding:20px'
        x=2
    }
    else{
        document.querySelector('.book-apoi').style='width:0;height: 0;z-index: 9;'
        x=1
    }
}
let btn=document.querySelector('.bo-ap');
function sumit(){
    btn.innerText='Appoinment Booked'
    btn.style='background:green;color:white'
    document.querySelector('.book-apoi').style='width:0;height: 0;z-index: 9;padding:0px'
    x=2
}