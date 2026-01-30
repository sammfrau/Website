
// Defining HTML elements
document.getElementById('header1').textContent = 'Welcome to my Website';
document.getElementById('button1OutputArea').textContent = 'Yowaddup';

// Accessing elements
let button1 = document.getElementById('button1');
let button1OutputArea = document.getElementById('button1OutputArea');

function buttonClicked()
{
    if(button1OutputArea.style.display == 'block')
    {
        
        button1OutputArea.style.display = 'none';
    }
    else
    {
        button1OutputArea.style.display = 'block';
    }
};


// Attaching an event listener
button1.addEventListener('click', buttonClicked);