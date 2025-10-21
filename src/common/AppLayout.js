export class AppLayout {

    getElement() {
        const html =  /*html*/`
            <div>
                <router-view></router-view>
            </div>
        `

        const template = document.createElement('template')
        template.innerHTML = html
        const component = template.content

        return component
    }
    
}