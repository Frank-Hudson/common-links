const COMMON_LINKS_COLLECTION = {
    "C&35;": [
        "https://learn.microsoft.com/en-us/dotnet/csharp/",
        "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
        "https://www.w3schools.com/cs/index.php",
    ],
};

const SEPARATOR = "#";

const CURRENT_PAGE = window.location.href.split(SEPARATOR)[1];

function anchorString(href, innerHTML) {
    return `<a href="${href}">${innerHTML}</a>`;
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

let commonLinks_ulist = [];

for (const [subject, links] in COMMON_LINKS_COLLECTION) {
    // If the current page is home
    if (!CURRENT_PAGE || CURRENT_PAGE == "" || CURRENT_PAGE == "#") {
        // Create an <a> element that has the targeted `subject` as its content 
        // and href
        const subject_anchor = anchorString(SEPARATOR + subject, subject);
        // Create a <li> that has the targeted `subject` as its id, and append 
        // the previous <a> element to it
        const subject_listitem = listitemString(subject.toLocaleLowerCase(), subject_anchor);
        // Append the previously created <li> element to the `commonLinks_ulist`
        //  <ul> element
        commonLinks_ulist.append(subject_listitem);
    } else {
        // If the subject is not the current page; continue the loop until it 
        // is
        if (subject != CURRENT_PAGE || !CURRENT_PAGE.includes(subject)) {
            continue;
        }

        // Append `: {subject}` to the heading
        header_heading1.innerHTML += ": " + subject;

        for (const link in links) {
            // Create an <a> element with the current `link` as its href and 
            // content
            const link_anchor = anchorString(link, link);
            // Create a <li> element with the current `link` as its id and 
            // append the previous <a> element
            const link_listitem = listitemString(link, link_anchor);
            // Append the previously created <li> element to the 
            // `commonLinks_ulist` <ul> element
            commonLinks_ulist.append(link_listitem);
        }
    }
}

console.log(commonLinks_ulist);

// Append the `commonLinks_ulist` <ul> element to the `page` <div> element.
page.innerHTML += ulistString("common-links", commonLinks_ulist.join("\n"));
const commonLinks = document.getElementById("common-links");
