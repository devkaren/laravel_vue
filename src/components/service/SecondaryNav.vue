<template>
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div>
            <div class="block">
                <nav class="flex">
                    <router-link
                        to="/service/server"
                        :class="'secondary-nav-item ' + (subIsActive('/service/server') ? 'secondary-nav-item-active' : '')"
                        active-class="secondary-nav-item-active"
                    >
                        Server
                    </router-link>
<!--                    <router-link-->
<!--                        to="/service/network"-->
<!--                        active-class="secondary-nav-item-active"-->
<!--                        class="secondary-nav-item"-->
<!--                    >-->
<!--                        Private Networks-->
<!--                    </router-link>-->
                    <router-link
                        to="/service/ssh-key"
                        :class="'secondary-nav-item ' + (subIsActive('/service/ssh-key') ? 'secondary-nav-item-active' : '')"
                        active-class="secondary-nav-item-active"
                    >
                        SSH Keys
                    </router-link>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SecondaryNav',
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input]

            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0
            })
        }
    }
}
</script>