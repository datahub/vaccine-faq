<script>
export let phase;
export let rolloutDate;
export let phaseRequirements;
export let status;
export let checkmark;
</script>

<style>
.phases {
    margin: 0 15%;
    color: #222;
    font-family: 'Unify Sans', Tahoma, sans-serif;
    padding: 5px 10px;
}

.phases .phase {
    margin: 5px 0 0 0;
}

.phases span{
    margin: 0 10px;
    padding: 5px;
    font-size: 1.7em;
    font-weight: 900;
}


.phases span.complete{
    margin: 0 10px;
    background-color: #ccc;
    padding: 5px;
    font-size: 1.7em;
    font-weight: 900;
}

.phases .phase-group{
    margin:10px;
    font-size: 18px;
    font-style: italic;
    color: #636363;
    padding: 10px 0 20px 25px;
}

.phase-group .timestamp{
    margin-left:0;
    color: darkred;
    font-style: italic;
    font-size: 14px;
    font-weight: 400;
}

</style>


<div class="phases">
    <div class="phase">
        {@html checkmark}<span class="{status}">{phase}</span><br>
        <div class="phase-group"><span class="timestamp">{rolloutDate}</span>{@html phaseRequirements}</div>
    </div>
</div>