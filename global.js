// STEP 1
console.log("IT’S ALIVE!");

// TODO: Add the $$ function here!
function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// // STEP 2
// // 2.1
// let navLinks = $$("nav a");

// // 2.2
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)
// // 2.3
// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink?.classList.add("current");
// }

// STEP 3
// TODO: Remove <nav> menu from all HTML pages!
// TODO: Comment out the step 2 code in this file!

// step 3.1
// step 3.1
let pages = [
	{url: "", title: "Home"},
	{url: "projects/", title: "Projects"},
    {url: "experience/", title: "Experience"},
    {url: "contact/", title: "Contact"},
];


let nav = document.createElement("nav");
document.body.prepend(nav);

// TODO: Inside index.html (our home page), add a class="home" attribute to the <html lang="en"> element!
const ARE_WE_HOME = document.documentElement.classList.contains("home");

// step 3.2
// TODO: Comment out the `for (let p of pages) {...}` loop you made in step 3.1 and uncomment the for loop below! I have helped you restructure the loop a bit in a way that may be confusing from the lab instructions

for (let p of pages) {
	let url = p.url;
	let title = p.title;

    // Create correct relative link and add it to nav  
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current"); // FILL IN CLASS NAME
    }

    if (url.startsWith("http")) { // FILL IN CONDITION TO OPEN LINK IN NEW TAB
        a.target = "_blank";
    }

    nav.append(a);
}

// STEP 4
// step 4.1
// TODO: Inside your styles.css file, adjust your navigation menu colors! There is nothing to do in this file in this step.

// step 4.2
document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
			<option value="auto">Automatic</option>
			<option value="light">Light</option>
			<option value="dark">Dark</option>
		</select>
	</label>`
);


// step 4.3
// TODO: Inside your styles.css file, add styling to move the switcher with class .color-scheme to the top right corner. There is nothing to do in this file in this step

// STEP 4.4: Theme Switcher

// Select the theme dropdown
let select = document.querySelector(".color-scheme select");

// Function to apply the selected theme
function applyTheme(theme) {
    document.documentElement.classList.remove("light", "dark", "auto");
    document.documentElement.classList.add(theme); // Add class to <html> for CSS to handle
    localStorage.setItem("colorScheme", theme); // Save preference to localStorage
    select.value = theme; // Update dropdown selection
}

// Load saved theme or default to "auto" (Automatic)
const savedTheme = localStorage.getItem("colorScheme") || "auto";
applyTheme(savedTheme);

// Event listener: change theme on dropdown selection
select.addEventListener("input", (event) => {
    console.log("Color scheme changed to:", event.target.value);
    applyTheme(event.target.value);
});
// STEP 5 (OPTIONAL)
// Note: This is an optional part of the lab! If you want to do it, uncomment the lines below and fill in the TODOs. Otherwise, leave the lines commented out.

// TODO: Inside the /contact/index.html, remove the enctype and method attributes from the <form> element. Remove the "Email" label and input as well.

// TODO: uncomment below to select the form element!
// let form = document.querySelector("form");

// form?.addEventListener("submit", function (event) { // FILL IN EVENT WE ARE WAITING FOR
//     event.preventDefault();
//     let data = new FormData(form);

//     let url = form.action + "?";
//     for (let [name, value] of data) {
// 	    url += (name + "=" + value + "&");
// 	    console.log(name, value);
//     }

//     // TODO: open url here!
//     window.open(url, "_blank"); // Opens the form submission in a new tab
// });
