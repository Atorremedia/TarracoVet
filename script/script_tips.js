
const animalSelector = document.getElementById('species');
const dogTips = document.querySelectorAll('.dog');
const catTips = document.querySelectorAll('.cat');
const tabTitle = document.querySelectorAll('.tab-title');
var value = animalSelector.options[animalSelector.selectedIndex].value;
console.log(value);

animalSelector.addEventListener('change', displaytags);
    
    function displaytags(){
    console.log('chosen: ' + animalSelector.value);
    
    for (i = 0; i < tabTitle.length; i++){
        tabTitle[i].style.display = 'none';
    }
    for (i = 0; i < dogTips.length; i++){
        dogTips[i].style.display = 'none';
    }
    for (i = 0; i < catTips.length; i++){
        catTips[i].style.display = 'none';
    }

    if (animalSelector.value == 'dog'){tabTitle[0].style.display = 'block'}
    if (animalSelector.value == 'cat'){tabTitle[1].style.display = 'block'}
    if (animalSelector.value == 'all'){tabTitle[2].style.display = 'block'}


    if (animalSelector.value == 'dog' || animalSelector.value == 'all'){
        for (let i = 0; i < dogTips.length; i++){
            dogTips[i].style.display = 'flex';
        }
    } else if (animalSelector.value == 'cat' || animalSelector.value == 'all'){
        for (let i = 0; i < catTips.length; i++){
            catTips[i].style.display = 'flex';
        }
    }
}
