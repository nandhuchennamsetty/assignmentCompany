const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

const l1ItemsNotl2 = [];
const combineItems = [];
const l2ItemsNotl1=[];

list1.forEach(e=>{
    if(!list2.includes(e)){
        l1ItemsNotl2.push(e)
    }else{
        combineItems.push(e)
    }
})

for (let i of list2){
    if(!list1.includes(i)){
        l2ItemsNotl1.push(i)
    }
}

console.log(l1ItemsNotl2);

console.log(l2ItemsNotl1);

console.log(combineItems);
