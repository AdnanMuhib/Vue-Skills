<template>
    <div class="about">
        <h1>Hello {{their_name}}, This is about page </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe delectus odio minima, velit soluta officiis dolorem temporibus unde voluptate culpa voluptates minus quisquam possimus, obcaecati necessitatibus vitae doloremque amet.</p>
    </div>
</template>

<script>
export default {
    name:"about",
    data(){
        return {their_name:this.$route.params.name}
    }
}
</script>