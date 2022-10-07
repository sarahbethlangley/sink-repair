import { getRequests, deleteRequests } from "./dataAccess.js"
import { mainContainer } from "./main.js"



const requestList = (request) => { 
    return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`
}




export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(requestList).join("")
            }

        </ul>
    `

    return html
}





