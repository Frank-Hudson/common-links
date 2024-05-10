import { a, li, p, ul } from "./elements.js";

////////////////////////////////////////////////////////////////////////////////
/* ################################## DATA ################################## */
////////////////////////////////////////////////////////////////////////////////

const COMMON_LINKS_COLLECTION = {
    "C Programming Language": [
        "https://en.wikipedia.org/wiki/C_(programming_language)",
        "https://www.w3schools.com/c",
    ],
    "C++ Programming Language": [
        "https://cplusplus.com",
        "https://en.wikipedia.org/wiki/C%2B%2B",
        "https://www.w3schools.com/cpp",
    ],
    "C-Sharp Programming Language": [
        "https://learn.microsoft.com/en-us/dotnet/csharp",
        "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
        "https://www.w3schools.com/cs/index.php",
    ],
    "Java Programming Language": [
        "https://www.java.com",
        "https://en.wikipedia.org/wiki/Java_(programming_language)",
        "https://www.oracle.com/java",
        "https://www.w3schools.com/java",
    ],
    JavaScript: [
        "https://www.javascript.com",
        "https://en.wikipedia.org/wiki/JavaScript",
        "https://www.w3schools.com/js",
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    ],
    Luxon: [
        "https://moment.github.io/luxon",
        "https://github.com/moment/luxon",
        "https://github.com/moment/luxon/blob/master/docs/formatting.md",
    ],
    "Python Programming Language": [
        "https://www.python.org",
        "https://en.wikipedia.org/wiki/Python_(programming_language)",
        "https://www.w3schools.com/python",
    ],
    "Visual Basic": ["https://en.wikipedia.org/wiki/Visual_Basic_(.NET)"],
};
console.info(COMMON_LINKS_COLLECTION);

////////////////////////////////////////////////////////////////////////////////
/* ############################### CONSTANTS  ############################### */
////////////////////////////////////////////////////////////////////////////////

const SEPARATOR = "#";
console.info(window.location.href);

const CURRENT_PAGE_UNFILTERED = window.location.href.split(SEPARATOR)[1];
const CURRENT_PAGE = CURRENT_PAGE_UNFILTERED
    ? CURRENT_PAGE_UNFILTERED.replaceAll("%20", " ")
    : CURRENT_PAGE_UNFILTERED;
console.info(CURRENT_PAGE);

////////////////////////////////////////////////////////////////////////////////
/* ############################## GET ELEMENTS ############################## */
////////////////////////////////////////////////////////////////////////////////

const header = document.getElementById("header");
const header_heading1 = document.getElementById("h1-common-links");
const page = document.getElementById("page");
const footer = document.getElementById("footer");

////////////////////////////////////////////////////////////////////////////////
/* ################################## ALGS ################################## */
////////////////////////////////////////////////////////////////////////////////

// Collect the data into an array of <li> elements.
let commonLinks_ulist = Array.from(
    Object.entries(COMMON_LINKS_COLLECTION).map(([subject, links]) => {
        // If the current page is home
        if (
            !CURRENT_PAGE ||
            CURRENT_PAGE == "" ||
            CURRENT_PAGE == "#" ||
            CURRENT_PAGE.includes("127.0.0.1:5500") || // VSCode Live Server location
            CURRENT_PAGE.includes("frank-hudson.github.io/common-links") // GH Pages location
        ) {
            // Create an <a> element that has the targeted `subject` as its content
            // and href
            const subject_anchor = a(SEPARATOR + subject, subject);
            // Create a <li> that has the targeted `subject` as its id, and append
            // the previous <a> element to it
            const subject_listitem = li(
                subject.toLocaleLowerCase(),
                subject_anchor
            );
            // Append the previously created <li> element to the `commonLinks_ulist`
            //  <ul> element
            return subject_listitem;
            // If the subject is the current page
        } else if (subject == CURRENT_PAGE || CURRENT_PAGE.includes(subject)) {
            // Append `: {subject}` to the heading
            header_heading1.innerHTML += ": " + subject;

            header.innerHTML += p(a("./", "Back"), "back-button");

            return links
                .map((link) => {
                    // Create an <a> element with the current `link` as its href and
                    // content
                    const link_anchor = a(link, link, "_blank");
                    // Create a <li> element with the current `link` as its id and
                    // append the previous <a> element
                    const link_listitem = li(link, link_anchor);
                    // Append the previously created <li> element to the
                    // `commonLinks_ulist` <ul> element
                    return link_listitem;
                })
                .join("\n");
        }
    })
);
console.info(commonLinks_ulist);

// Append the `commonLinks_ulist` <ul> element to the `page` <div> element.
page.innerHTML += ul("common-links", commonLinks_ulist.join("\n"));
const commonLinks = document.getElementById("common-links");
