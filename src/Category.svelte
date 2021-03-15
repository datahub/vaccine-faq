<script>
    import Question from './Question.svelte';
    //import { sticky } from 'waypoints';

    export let category;
    export let ID;
    export let info;
    export let link;
    export let url;
    export let questions;

    // var sticky = new Waypoint.Sticky({
    //     element: $('.category-context')[0]
    // })
</script>

<style>
.anchor-position{
    position: relative;
    bottom: 70px;
}
.category{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 0 10% 0;
    width: 100%;
    position: relative;
    max-width: 1400;
}
.category-context{
    font-family: 'Unify Sans', Tahoma, sans-serif;
    width:30%;
    max-width: 400px;
    margin: 30px 18px;
    font-size: 18px;
}
.category-context h4{
    font-weight: 600;
    font-size: 1.5em;
    margin-block-start: 0;
}
.category-context::before{
    display: block;
    position: absolute;
    top: 0px;
    left: 20px;
    content: " ";
    width: 29%;
    height: 20px;
    border-top: 7px solid #415bca; /*#d78401; */
}
.category-group{
    display: flex;
    flex-direction: column;
    width:65%;
    max-width: 1000;
}
@media(max-width: 900px){
    .category-context{
        width: 100%;
    }
    .category-group{
        width: 100%;
    }
}
</style>

<div class="category">
<div class="anchor-position" id="{ID}"></div>
    <div class="category-context">
        <h4>{category}</h4>
        <div>{@html info}</div>
        <br>
        <div><a href="{url}">{link}</a></div>
    </div>
    <div class="category-group">
        {#each questions as question, i}
            <Question question = {question.question} answer = {question.answer} linkOne = {question.linkOne} urlOne = {question.urlOne} linkTwo = {question.linkTwo} urlTwo = {question.urlTwo} linkThree = {question.linkThree} urlThree = {question.urlThree}  />
        {/each}
    </div>
</div>