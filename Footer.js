// Select the id="footer"
const footer = document.getElementById('footer');

// Creating the Footer Tag
const footerTag = document.createElement('footer');
footerTag.classList.add('cssFooter');

footer.append(footerTag);

// Footer items array
const footerItems = ['Home','Company','About'];


// Footer items
for(let i = 0; i < footerItems.length; i++){
	const a = document.createElement('a');
	a.setAttribute('href', `#${navItems[i]}`);
	a.innerText = navItems[i];
	footerTag.append(a);	
}

// CopyRight in Footer 

const CopyrightYear = new Date().getFullYear();

const copyrightItem = document.createElement('a');
copyrightItem.innerText = `Copyright © ${CopyrightYear}`;
footerTag.append(copyrightItem);


/*
 <footer className="cssFooter" >
                <a href="#1F">Company</a>
                <a href="#2F">About</a>
                <a href="#6F">Copyright © {CopyrightYear}</a>
            
        </footer>



// Append Navigation bar to the header
header.append(nav);



// Creation of the first tag 'a' for the logo image
const a = document.createElement('a');
a.setAttribute('href', '#');
nav.append(a);

// Create the 'img' tag and append it to the 'a' tag
const img = document.createElement('img');
img.setAttribute('src', 'images/logo.png');
a.append(img);

//Finally we append the 'a' tag to the 'nav'
nav.append(a);

// Rest of the navigation 'a' tag items
for(let i = 0; i < navItems.length; i++){
	const a = document.createElement('a');
	a.setAttribute('class', 'home-links');
	a.setAttribute('href', `#${navItems[i]}`);
	a.innerText = navItems[i];
	nav.append(a);	
}



*/


/*
return(
        <nav className="cssHeader">
                <a href="#">
                    <img src="logo400.png" width='50' alt=' ' />
                </a>
                <a href="#1">Home</a>
                <a href="#2">Company</a>
                <a href="#3">About</a>
        </nav>
);
*/	


