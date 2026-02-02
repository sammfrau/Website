// Accessing elements
let menuDropdown = document.getElementById('menuDropdown');
let menuOutputArea = document.getElementById('menuOutputArea');
let button1 = document.getElementById('button1');
let button1OutputArea = document.getElementById('button1OutputArea');
let homeButton = document.getElementById('homeButton');
let aboutButton  = document.getElementById('aboutButton');

// Defining elements
let homeLink = 'index.html';
let aboutLink = 'about.html';


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

// Goes to the defined link in the same window and tab
function gotoLink(element)
{
    window.location.href = element;
}


// Attaches the event listeners for the Menu and for this page's button for visibility
menuDropdown.addEventListener('click', function()
{
    toggleVisibility(menuOutputArea);
});
button1.addEventListener('click', function()
{
    toggleVisibility(button1OutputArea);
});

// Attaches the event listeners for the Menu and for this page's button for opening links
homeButton.addEventListener('click', function()
{
    gotoLink(homeLink);
});
aboutButton.addEventListener('click', function()
{
    gotoLink(aboutLink);
});