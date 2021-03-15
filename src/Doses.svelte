<script>
export let stat;
export let number;
export let rank;
</script>

<style>
    .stats {
        position: relative;
        max-width: 1100px;;
        /* margin: 5% 0; */
        margin: 0 auto;
    }
    .numbers {
        text-align: center;
        font-weight: 600;
        font-size: 1em;
        color: #fff;
        font-family: 'Unify Sans', Tahoma, sans-serif;
        padding: 5px 12px;
        display: inline-flex;
        max-width: 335px;
    }

    .numbers div {
        background-color: #415bca;
        /* margin: 0 16%; */
        padding: 10px;
        width: 330px;
        height: 100px;
    }
    .updating-num{
        font-size: 1.8em;
        font-weight: 900;
    }
    .numbers div small{
        font-weight: 400;
        font-size: .8em;
        text-transform: uppercase;
    }
</style>

<div class="stats">
    <div class="numbers">
        <div>{stat}<br>
            <span class="updating-num">{number}</span><br>
            <small>Ranked {rank} in the Midwest</small>
        </div>
    </div>
</div>