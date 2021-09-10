app.component('review-form',{
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a Review</h3>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option >5</option>
            <option >4</option>
            <option >3</option>
            <option >2</option>
            <option >1</option>
        </select>

        <br>

        <label for="recommend">Would you Recommend this thing?</label>
        <select id=recommend" v-model="recommend">
            <option> Yes </option>
            <option> No </option>
        </select>
        <input type="submit" class="button" value="Submit">

    </form>
    `,
    data(){
        return{
            name: '',
            review:'',
            rating: null,
            recommend: ''
        }
    },
    methods:{
        onSubmit(){

            if (this.name == '' || this.review == '' || this.rating == null || this.recommend == ''){
                alert('Isi woi')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend,
            }
            this.$emit('review-submitted', productReview)
            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = ''
        }
    }
})