// Constants
const aboutText= `Missouri S&T Computer Engineering graduate currently serving as a Districtwide Technology Support Specialist for Rockwood School District.
I specialize in providing dedicated, in-person technical support for Rockwood Valley Middle School, ensuring seamless technology integration for both staff and students.
My expertise lies in high-level troubleshooting, end-user communication, and full-cycle asset management.
I am passionate about leveraging my engineering background to help resolve technical challenges in real-time.
Currently, I am expanding my technical knowledge by deepening my skills in Website and Application Development.`;

// Accessing elements
let menuDropdown = document.getElementById('menuDropdown');
let menuOutputArea = document.getElementById('menuOutputArea');
let homeButton = document.getElementById('homeButton');
let aboutButton  = document.getElementById('aboutButton');
let paragraph1 = document.getElementById("paragraph1");

// Defining elements
let homeLink = 'index.html';
let aboutLink = 'about.html';
paragraph1.textContent = aboutText;


/* ===================================================================================== */


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

// Goes to the defined link in the same window and tab, can't do folders well
function gotoLink(element)
{
    window.location.href = element;
}


/* ===================================================================================== */


// Attaches the event listeners for the Menu and for this page's button for visibility
menuDropdown.addEventListener('click', function()
{
    toggleVisibility(menuOutputArea);
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