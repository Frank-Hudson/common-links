const COMMON_LINKS_COLLECTION = {
    "C&35;": [
        "https://learn.microsoft.com/en-us/dotnet/csharp/",
        "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
        "https://www.w3schools.com/cs/index.php",
    ],
};

const SEPARATOR = "#";

const CURRENT_PAGE = window.location.href.split(SEPARATOR)[1];

const header = document.getElementById("header");
const header_heading1 = document.getElementById("header-heading-1");

const page = document.getElementById("page");

const commonLinks_ulist = new HTMLUListElement();
commonLinks_ulist.id = "common-links";

for (const [subject, links] in COMMON_LINKS_COLLECTION) {
    // If the current page is home
    if (!CURRENT_PAGE || CURRENT_PAGE == "" || CURRENT_PAGE == "#") {
        // Create an <a> element that has the targeted `subject` as its content 
        // and href
        const subject_anchor = new HTMLAnchorElement();
        subject_anchor.href = SEPARATOR + subject;
        subject_anchor.append(subject);
        // Create a <li> that has the targeted `subject` as its id, and append 
        // the previous <a> element to it
        const subject_listitem = new HTMLLIElement();
        subject_listitem.id = subject.toLocaleLowerCase();
        subject_listitem.appendChild(subject_anchor);
        // Append the previously created <li> element to the `commonLinks_ulist`
        //  <ul> element
        commonLinks_ulist.appendChild(subject_listitem);
    } else {
        // If the subject is not the current page; continue the loop until it 
        // is
        if (subject != CURRENT_PAGE || !CURRENT_PAGE.includes(subject)) {
            continue;
        }

        // Append `: {subject}` to the heading
        header_heading1.append(": " + subject);

        for (const link in links) {
            // Create an <a> element with the current `link` as its href and 
            // content
            const link_anchor = new HTMLAnchorElement();
            link_anchor.href = link;
            link_anchor.append(link);
            // Create a <li> element with the current `link` as its id and 
            // append the previous <a> element
            const link_listitem = new HTMLLIElement();
            link_listitem.id = link;
            link_listitem.appendChild(link_anchor);
            // Append the previously created <li> element to the 
            // `commonLinks_ulist` <ul> element
            commonLinks_ulist.appendChild(link_listitem);
        }
    }
}

// Append the `commonLinks_ulist` <ul> element to the `page` <div> element.
page.appendChild(commonLinks_ulist);
const commonLinks = document.getElementById("common-links");
