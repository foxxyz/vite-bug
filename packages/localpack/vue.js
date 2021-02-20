import { reactive } from 'vue'

export function vuePlugin() {
    return reactive({
        foo: 'bar'
    })
}