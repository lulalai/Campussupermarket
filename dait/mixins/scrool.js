export default {
    mounted () {
        window.addEventListener('scroll', this.scrool, false)
    },
    destroyed() {
        window.removeEventListener('scrool', this.scroll),false
    },
    methods: {
        scroll() {
            const windowHeight = window.innerHeight
            const pageHeight = document.body.clientHeight
            const scrollTop = document.querySelector('html').scrollTop
            if (pageHeight - scrollTop < windowHeight + 10) {
                this.$options.scrollBottom.call(this)
            } 
        }
    }
}