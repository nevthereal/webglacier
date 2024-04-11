<script lang="ts">
	import me from '$lib/img/me.jpg?enhanced';
	import graphic from '$lib/img/graphic.png?enhanced';
</script>

<svelte:head>
	<title>WebGlacier - Projects</title>
	<meta
		name="description"
		content="Homepage of WebGlacier Frontend Web Development Agency by Neville Brem"
	/>
</svelte:head>

<div class="md:grid md:grid-cols-2 md:h-[60dvh] mt-2">
	<div class="flex">
		<div class="m-auto flex flex-col">
			<h1 class="h1 text-6xl text-center md:text-left">WebGlacier</h1>
			<p class="md:mt-4 text-secondary-500 font-bold">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone italic"
					>blazingly</span
				> fast, user-friendly web apps
			</p>
			<a
				class="btn mt-2 variant-ghost-primary border-b-2 border-b-primary-500 group w-min mx-auto md:mx-0"
				href="#about"
				><i
					class="fa-solid fa-arrow-right pr-2 group-hover:translate-x-1 duration-200 ease-in-out"
				/>Find out more</a
			>
		</div>
	</div>

	<div class="flex mt-4 md:mt-0">
		<enhanced:img src={graphic} loading="eager" alt="fancy graphic" class="w-[50%] m-auto" />
	</div>

	<div class="col-span-2 grid gap-2 md:gap-0 md:grid-flow-col p-6 md:p-16">
		<div class="m-auto">
			<h1 class="font-bold h1 text-center md:text-left">2+ Years</h1>
			<h4 class="h4 text-primary-500 text-center md:text-left">of experience</h4>
		</div>
		<div class="m-auto">
			<h1 class="font-bold h1 text-center md:text-left">500+</h1>
			<h4 class="h4 text-primary-500 text-center md:text-left">github commits</h4>
		</div>
		<div class="m-auto">
			<h1 class="font-bold h1 text-center md:text-left">3+ Projects</h1>
			<h4 class="h4 text-primary-500 text-center md:text-left">for production</h4>
		</div>
	</div>
</div>

<div id="about" class="py-8">
	<div class="grid md:grid-cols-2">
		<enhanced:img
			src={me}
			loading="lazy"
			alt="me"
			class="m-auto md:w-[40%] w-[80%] rounded-xl shadow-lg shadow-black/20 hover:shadow-black/50 duration-200 ease-in-out"
		/>
		<div class="m-auto max-w-[80%] md:max-w-[60%]">
			<h2 class="h2 my-4">About Me</h2>
			<p>
				Hey, there I am a 16 years old front-end web dev. I'm based in Zurich, Switzerland. I love
				creating websites and learning new technologies. I have a keen eye on detail and very fast
				response times, so don't contact me if you don't need a beautiful website ASAP.
			</p>
		</div>
	</div>
	<div class="max-w-[80%] md:max-w-[60%] mx-auto mt-16">
		<h2 class="h2 m-auto">Skills & Technologies:</h2>
		<div class="grid md:grid-cols-2 gap-4 my-6 mx-auto">
			<div
				class="card variant-glass-primary p-6 shadow-lg shadow-black/20 hover:shadow-black/50 duration-200 ease-in-out"
			>
				<h3 class="h3">Stack 1</h3>
				<ul class=" list-disc list-inside">
					<li>React</li>
					<li>TypeScript</li>
					<li>TailwindCSS</li>
					<li>Framer Motion</li>
				</ul>
			</div>
			<div
				class="card variant-glass-primary p-6 shadow-lg shadow-black/20 hover:shadow-black/50 duration-200 ease-in-out"
			>
				<h3 class="h3">Stack 2 (current)</h3>
				<ul class=" list-disc list-inside">
					<li>Skeleton UI</li>
					<li>SvelteKit</li>
					<li>TailwindCSS</li>
					<li>TypeScript</li>
				</ul>
			</div>
		</div>
		<div>
			<h2 class="h2">Projects & Experience</h2>
			<div class="mt-2">
				<p>To see my projects click here:</p>
				<a
					href="/projects"
					class="btn variant-ghost-primary border-b-2 border-b-primary-500 mt-2 group"
					><i
						class="fa-solid fa-arrow-right mr-2 group-hover:translate-x-1 duration-200 ease-in-out"
					/> Projects</a
				>
			</div>
		</div>
	</div>
</div>
