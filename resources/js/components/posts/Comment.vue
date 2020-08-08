<template>
    <section>
        <h3 class="comment-box-header">
            {{ comment.creator.name }}
            <span class="comment-box-date">{{comment.created_at}}</span>
        </h3>
        <p>{{ comment.body }}</p>
    </section>
</template>

<script>
export default {
    name: `Comment`,
    props: {
        comment: {
            type: Object,
            default: function () {
                return {  
                    
                }
            }
        }
    },
        // ['comment'],
    data: function () {
        return {
        }
    },
};
</script>
