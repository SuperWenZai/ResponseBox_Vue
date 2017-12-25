export default {
    name: "nav_miniso",
    data() {
        return {
            navId: 0,
            xianshiNav: false,
        }
    },
    props: {
        items: {
            default1: [],
            type: Array,
        }
    },
    methods: {
        xianshi() {
            if (this.xianshiNav == false) {
                this.xianshiNav = true;
            } else {
                this.xianshiNav = false;
            }
        }
    },
}