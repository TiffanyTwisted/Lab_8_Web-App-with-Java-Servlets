const message = document.querySelector('.message'),
    form = document.getElementById('form');
function addOperation(event){
    // запрет на события браузера, в нашем случае нет перезагрузки
    const operationValue = message.value;
        if(!operationValue)message.style.borderColor = 'red';


};
form.addEventListener('submit',addOperation)