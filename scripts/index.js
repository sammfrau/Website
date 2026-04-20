/* ================================== In Every Page ================================== */

// Accessing elements
let buttonMenu= document.getElementById('buttonMenu');
let areaMenu = document.getElementById('areaMenu');
let buttonHome = document.getElementById('buttonHome');
let buttonAbout  = document.getElementById('buttonAbout');
let buttonFun  = document.getElementById('buttonFun');

// Defining elements
let linkHome = '/index.html';
let linkAbout = '/html/about.html';
let linkFun = '/html/fun.html';


// Shows or hides an area when a button is clicked
function toggleVisibility(element)
{
    // This looks at the actual style being applied by the CSS file
    let currentDisplay = window.getComputedStyle(element).display;

    if(element.style.display == 'block')
    {
        
        element.style.display = 'none';
    }
    else
    {
        element.style.display = 'block';
    }
}

// Goes to the defined link in the same window and tab, can't do links via folders
function gotoLink(element)
{
    window.location.href = element;
}


// Attaches the event listeners to the Menu for visibility
buttonMenu.addEventListener('click', function()
{
    toggleVisibility(areaMenu);
});

// Attaches the event listeners to the Menu for opening links
buttonHome.addEventListener('click', function()
{
    gotoLink(linkHome);
});
buttonAbout.addEventListener('click', function()
{
    gotoLink(linkAbout);
});
buttonFun.addEventListener('click', function()
{
    gotoLink(linkFun);
});



/* =================================== In This Page ================================== */
