<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
           <post-tweet :tweets="tweets"></post-tweet>
                <div class="card">
                    <div class="card-header">Timeline</div>

                    <div class="card-body">
                       <div class="media" v-for="tweet in tweets">
                            <div class="media-body">
                                <strong>{{ tweet.user.name }}</strong><br>
                                <p class="mt-0">{{ tweet.body }}</p>
                            </div>
                       </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostTweet from './PostTweet.vue'
    export default {
        data () {
           return{
               tweets: []
           }
        },
        components: {
            PostTweet
        },
        mounted() {
            axios.get('/tweets').then((response) => {
                this.tweets = response.data;
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
</script>
