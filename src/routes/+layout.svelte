<script lang="ts">
	import './app/styles/globals.css';

	export let data: any;
</script>

<header>
	<a href="/">From header</a>
	<ul>
		{#each data.globalData as row}
			<li>
				<h3>{row.id}</h3>
				<p>{row.info}</p>
			</li>
		{/each}
	</ul>
</header>

<main>
	<slot />
</main>
