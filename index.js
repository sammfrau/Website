// Accessing elements
let menuDropdown = document.getElementById('menuDropdown');
let menuOutputArea = document.getElementById('menuOutputArea');
let button1 = document.getElementById('button1');
let button1OutputArea = document.getElementById('button1OutputArea');

// Shows or hides an area when a button is clicked
function buttonClicked(areaId)
{
    if(areaId.style.display == 'block')
    {
        
        areaId.style.display = 'none';
    }
    else
    {
        areaId.style.display = 'block';
    }
};


// Attaching the event listeners
menuDropdown.addEventListener('click', function()
{
    buttonClicked(menuOutputArea);
});
button1.addEventListener('click', function()
{
    buttonClicked(button1OutputArea);
});