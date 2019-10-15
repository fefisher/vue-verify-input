import busLine from './src/main'

busLine.install = function (Vue) {
    Vue.component(busLine.name, busLine)
}
export default busLine
