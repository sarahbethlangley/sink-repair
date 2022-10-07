import { getRequests, deleteRequests } from "./dataAccess.js"




const requestList = (request) => { 
    return `
    <li>
        ${request.description}
        ${request.address}
        ${request.budget}
        ${request.neededBy}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`
}




export const Requests = () => {
    const requests = getRequests()

    let html = `<ul>${requests.map(requestList).join("")}</ul>`

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequests(parseInt(requestId))
    }
})




// this is just some notes to myself that aren't really notes