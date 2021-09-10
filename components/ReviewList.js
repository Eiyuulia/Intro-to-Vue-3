app.component('review-list',{
    props:{
        reviews:{
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews: </h3>
        <ul>
            <li v-for="(review,index) in reviews" :key="index">
                <hr>
                {{review.name}} gave this {{review.rating}} stars
                <br>
                "{{review.review}}"
                <br>
                <p v-if="review.recommend == 'Yes'">
                    Him/Her recommend this item
                </p>
                <p v-else>
                    Him/Her not recommend this item
                </p>
                <hr>
            </li>
        </ul>
    </div>
    `
})