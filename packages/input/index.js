import verifyInput from './src/main'

verifyInput.install = function (Vue) {
    Vue.component(verifyInput.name, verifyInput)
}
export default verifyInput
