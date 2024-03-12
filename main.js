const COMMON_LINKS_COLLECTION = {
    "C-Sharp": [
        "https://learn.microsoft.com/en-us/dotnet/csharp/",
        "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
        "https://www.w3schools.com/cs/index.php",
    ],
};
console.log(COMMON_LINKS_COLLECTION);

const SEPARATOR = "#";
console.log(window.location.href);

const CURRENT_PAGE = window.location.href.split(SEPARATOR)[1];
console.log(CURRENT_PAGE);

function paraString(id, innerHTML) {
    return `<p id="${id}">${innerHTML}</p>`;
}

function anchorString(href, innerHTML, target = "_self") {
    return `<a onclick="window.setTimeout(() => {window.location.reload();}, 100);" href="${href}" target="${target}">${innerHTML}</a>`;
}

function listitemString(id, innerHTML) {
    return `<li id="${id}">${innerHTML}</li>`;
}

function ulistString(id, innerHTML) {
    return `<ul id="${id}">${innerHTML}</ul>`;
}

const header = document.getElementById("header");
const header_heading1 = document.getElementById("header-heading-1");

const page = document.getElementById("page");

let commonLinks_ulist = Array.from([]);

Object.entries(COMMON_LINKS_COLLECTION).forEach(([subject, links]) => {
    // If the current page is home
    if (!CURRENT_PAGE || 
        CURRENT_PAGE == "" || 
        CURRENT_PAGE == "#" || 
        CURRENT_PAGE.includes("127.0.0.1:5500") || 
        CURRENT_PAGE.includes("/common-links")) {
        // Create an <a> element that has the targeted `subject` as its content 
        // and href
        const subject_anchor = anchorString(SEPARATOR + subject, subject);
        // Create a <li> that has the targeted `subject` as its id, and append 
        // the previous <a> element to it
        const subject_listitem = listitemString(subject.toLocaleLowerCase(), subject_anchor);
        // Append the previously created <li> element to the `commonLinks_ulist`
        //  <ul> element
        commonLinks_ulist.push(subject_listitem);
    // If the subject is the current page
    } else if (subject == CURRENT_PAGE || CURRENT_PAGE.includes(subject)) {
        // Append `: {subject}` to the heading
        header_heading1.innerHTML += ": " + subject;

        header.innerHTML +=paraString(
            "back-button", 
            anchorString("#", "Back"),
        );

        links.forEach(link => {
            // Create an <a> element with the current `link` as its href and 
            // content
            const link_anchor = anchorString(link, link, "_blank");
            // Create a <li> element with the current `link` as its id and 
            // append the previous <a> element
            const link_listitem = listitemString(link, link_anchor);
            // Append the previously created <li> element to the 
            // `commonLinks_ulist` <ul> element
            commonLinks_ulist.push(link_listitem);
        });
    }
});

console.log(commonLinks_ulist);

// Append the `commonLinks_ulist` <ul> element to the `page` <div> element.
page.innerHTML += ulistString("common-links", commonLinks_ulist.join("\n"));
const commonLinks = document.getElementById("common-links");
