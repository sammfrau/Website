/* ================================== In Every Page ================================== */

// Accessing elements
let buttonMenu= document.getElementById('buttonMenu');
let areaMenu = document.getElementById('areaMenu');
let buttonHome = document.getElementById('buttonHome');
let buttonAbout  = document.getElementById('buttonAbout');

// Defining elements
let linkHome = 'index.html';
let linkAbout = 'about.html';


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



/* =================================== In This Page ================================== */

// Constants
const textAbout = `
Missouri S&T Computer Engineering graduate currently serving as a Districtwide Technology Support Specialist for Rockwood School District.
I specialize in providing dedicated, in-person technical support for Rockwood Valley Middle School,
ensuring seamless technology integration for both staff and students.
My expertise lies in high-level troubleshooting, end-user communication, and full-cycle asset management.
I am passionate about leveraging my engineering background to help resolve technical challenges in real-time.
Currently, I am expanding my technical knowledge by deepening my skills in Website and Application Development.
`;

// Accessing elements
let paragraphAbout = document.getElementById('paragraphAbout')

// Setting Text
paragraphAbout.textContent = textAbout;