<script>
	import { onMount } from 'svelte';
	// import { sticky } from 'waypoints';
	import Doses from './Doses.svelte';
	import Phases from './Phases.svelte';
	import Category from './Category.svelte';
	import Credit from './Credits.svelte';
	import Related from './Related.svelte';

	let categories = [];
	let phases = [];
	let doses = [];
	let related = [];
	let credits = [];

	onMount(async () => {
		const res = await fetch(`data.json`);
		const data = await res.json();
		phases = data.phases;
		doses = data.doses;
		categories = data.categories;
		credits = data.credits;
		related = data.related;
	});
</script>

<style>
</style>

<div class="flex-container">
	<!-- <div class="doses"> -->
		{#each doses as dose, i}
		<Doses stat = {dose.stat} number = {dose.number} rank = {dose.rank} />
		{/each}
		
		{#each phases as phase, i}
		<Phases phase = {phase.phase} rolloutDate = {phase.rolloutDate} phaseRequirements = {phase.phaseRequirements} status = {phase.status} checkmark = {phase.checkmark} />
		{/each}
	<!-- </div> -->

	<div class="topic-menu">
		<p class="how-to">Answers below are based on questions submitted from readers and information gleaned from previous reporting.</p>
		<div class="topic-buttons">
			<ul>
				<li><h4 class="topics">Topics:</h4></li>
				<li><div><a href="#eligibility">Eligibility</a></div></li>
				<li><div><a href="#availability">Availability</a></div></li>
				<li><div><a href="#basics">Vaccine basics</a></div></li>
			</ul>
		</div>
		<div class="form-cta"><span><a href="https://forms.gle/mPVtinmDDDmbNsVQ9"><i class="fas fa-question-circle"></i> Ask us a question about vaccine distribution</a></span></div>
	</div>

	{#each categories as category, i}
	<Category category = {category.category} ID = {category.ID} info = {category.info} link = {category.link} url = {category.url} questions = {category.questions}/>
	{/each}

	<div class="extra-container">
		<div class="credits">
			<h3 class="label-block" id="credits">Credits</h3>
			{#each credits as credit}
				<Credit label = {credit.label} text = {credit.text}/>
			{/each}
		</div>

		<div class="related">
			<h3 class="label-block">More coronavirus coverage</h3>
			{#each related as related}
				<Related label = {related.label} relatedHeadline = {related.relatedHeadline} relatedBrief = {related.relatedBrief} relatedImage = {related.relatedImage} relatedURL = {related.relatedURL}/>
			{/each}
		</div>
	</div>
</div>