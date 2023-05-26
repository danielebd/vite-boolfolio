
<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <ul class="list-unstyled m-0 p-0 gap-2">
                <li>
                    <router-link :to="{name: 'home'}" class="nav-link">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about'}" class="nav-link">
                        About
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped></style>