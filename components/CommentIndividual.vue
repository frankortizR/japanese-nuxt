<template>
    <div class="comment_div_general">
        <div class="comment_div_cont_name">
            <h3 class="comment_name">{{nombre}}</h3>
        </div>
        <div class="comment_div_cont_comment">
            <p class="comment_comment">{{comentario}}</p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        nombre: {
            type: String,
            default: 'Nombre de fulano',
            require: true,
        },
        comentario:{
            type: String,
            default: 'Feed back del personal',
            require: true,
        }
    }
}
</script>
<style lang="">
    
</style>