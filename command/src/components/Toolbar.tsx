export class Toolbar {
    toolbar: HTMLElement;
    colorPicker: HTMLElement;
    cameraDistance: HTMLElement;

    constructor() {
        this.toolbar = document.createElement('div')
        this.toolbar.id = 'toolbar'
        this.colorPicker = document.createElement('input')
        this.colorPicker.setAttribute('type', 'color')
        this.colorPicker.id = 'color-picker'
        this.colorPicker.addEventListener('input', this.onColorPickerChange, false)
        this.cameraDistance = document.createElement('input')
        this.cameraDistance.setAttribute('type', 'range')
        this.toolbar.appendChild(this.colorPicker)
        this.toolbar.appendChild(this.cameraDistance)
    }

    toHtml() {
        return(
            this.toolbar
        )
    }

    onColorPickerChange() {
        const colorPicker = document.getElementById('color-picker') as HTMLInputElement
        if (colorPicker) {
           console.log(colorPicker.value);
        }
    }
}