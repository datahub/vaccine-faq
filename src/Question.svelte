<script>
    import { fade } from 'svelte/transition';

    export let question;
    export let answer;
    export let linkOne ;
    export let urlOne;
    export let linkTwo;
    export let urlTwo;
    export let linkThree;
    export let urlThree;

    let active = false;

    function handleClick() {
		active = !active;
	}

//    let answerLines = answer;
//    $: answerLines = answer.split('\n')


</script>

<style>
.question-box{
    margin: 5px 0;
    padding: 10px;
    border: 1px solid rgb(0, 36, 59);
    border-radius: 3px;
    box-shadow: 2px 2px 0 #00243b;
    background-color: #fff;
    /* box-shadow: 0 0 2px #d3d3d3; */
    box-sizing: border-box;
    width: 100%;
}
.voter-question{
    align-items: center;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    cursor: pointer;
    font-size: 1.4em;
    margin-block-start: .33em;
    margin-block-end: .33em;
}
.voter-question:hover {
  color: #d78401;
}
.voter-question:before{
    font-size: 24px;
    padding: 3px 10px;
    content: '+';
    color: #415bca;
    /* color:#d78401; */
    font-weight: 900;
    cursor: pointer;
}
.voter-question.active:before{
    content: '-';
    padding: 3px 10px;
    font-size: 28px;
}
.voter-answer {
    align-items: center;
    padding: 10px 20px;
    font-family: 'Unify Serif', Georgia, serif;
    font-size: 18px;
}
.voter-answer ul{
    list-style-type: none;
    padding-inline-start: 0;
}
.voter-answer li{
    padding: 5px 0;
}
.voter-answer a{
    text-decoration: none;
    color: #d78401;
}
/* .update-flag {
    background-color: tomato;
    padding: 3px;
    border-radius: 2px;
    font-size: 18px;
    color: #fff;
    text-transform: uppercase;
} */

</style>
<div class="questions">
    <div class="question-box">
        <div class="qa">
            <h4 class="voter-question" class:active="{active}" on:click={handleClick}>{@html question}</h4>
            {#if active}
                <div class="voter-answer" transition:fade>
                    {@html answer}
                    {#if urlOne !== ''}
                        <ul class="related-links">
                        <h4><u>Related</u></h4>
                            <li><a href="{urlOne}">{linkOne}</a></li>
                            <li><a href="{urlTwo}">{linkTwo}</a></li>
                            <li><a href="{urlThree}">{linkThree}</a></li>
                        </ul>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
</div>