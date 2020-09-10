<template>
    <div>
        <div class="card mb-3">
            <div class="card-header">
            Tweet
            </div>
            <div class="card-body">
                 <form class="p-1" @submit.prevent="post">
                    <div class="form-group">
                        <textarea class="form-control" id="tweet" rows="3" v-model="body"></textarea>
                        <button class="btn btn-primary mt-1" type="submit">Send Tweet</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
                body: null
        }
    },
    props: [
        'tweets'
    ],
    methods: {
        post() {
            axios.post('/tweets', { body: this.body })
             .then(response => {
                  this.tweets.unshift(response.data.body);
                  this.body = null;
                  location.reload();
             })
            .catch(err => {
                console.log(err);
            });
        }
    }
}
</script>