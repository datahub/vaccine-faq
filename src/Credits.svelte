<script>
export let label;
export let text;

</script>

<style>
.credit-box{
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
    margin: 5% 0;
    padding-bottom: 10px; 
    font-family: 'Unify Sans', Tahoma, sans-serif;
}
.credit-label{
    width: 30%; 
    margin-right: 2%;
    color: #222;
    cursor: pointer;
}

.credit-info{
    width: 60%; 
    margin-left: 7%;
}
.credit-info .text{
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 16px;
    color: #636363;
}
</style>

<div class="credit-box">
        <div class="credit-label">
            <strong>{@html label}</strong>
        </div>
        <div class="credit-info">
            <p class="text">{@html text}</p>
        </div>
</div>