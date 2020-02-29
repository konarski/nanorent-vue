<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item>
                    <router-link to="/home">Home</router-link>
                </b-nav-item>
                <b-nav-item>
                    <router-link to="/resources">Resources</router-link>
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<script>
    export default {
        name: 'Navbar'
    }
</script>