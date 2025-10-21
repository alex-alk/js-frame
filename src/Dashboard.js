export class Dashboard {

    getElement() {
        const html =  `OK`
        const template = document.createElement('template')
        template.innerHTML = html
        const component = template.content

        return component
    }
    
}