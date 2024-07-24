let courses = [];
console.log('hello')
const checkNodes = document.getElementsByName('course');
console.log(checkNodes);

checkNodes.forEach(node => node.addEventListener("change", ()=> collectdata()));

function collectdata()
{
    console.log('hello')
    courses = [];
    for(const node of checkNodes){
        if(node.checked){
            courses.push(node.value)
        }
    }

    console.log(courses)
}