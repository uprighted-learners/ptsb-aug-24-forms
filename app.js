/* 
    ? Forms
    * default behavior is to send a GET request to the action attr value
    * by default once form has been submitted, it refreshes the page
    * can be overriden using event.preventDefault()
    * name attr within html elements give data its properties
*/


const output = document.getElementById("output")

const db = [
    { email: "valerie@gmail.com", password: "password123" },
    { email: "jonah@gmail.com", password: "password123" },
    { email: "marcus@gmail.com", password: "password123" },
    { email: "amy@gmail.com", password: "password123" },
]

document
    .getElementsByClassName("form-container")[0]
    .addEventListener("submit", evt => {
        evt.preventDefault()
        let email = evt.target[0].value
        let password = evt.target[1].value

        const foundUser = db.filter(entry => entry.email === email)

        if (!foundUser.length) {
            output.textContent = "No user found"
            return
        }

        if (foundUser[0].password !== password) {
            output.textContent = "Incorrect password"
            return
        }

        output.textContent = `Wecome, ${email}`
    })