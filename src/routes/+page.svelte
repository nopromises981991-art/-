<script>
 import { ArrowRight } from 'lucide-svelte';
</script>

<div class="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
    <div class="max-w-3xl text-center space-y-8">
        <h1 class="text-6xl font-bold tracking-tighter sm:text-7xl">
            OMAR AI
        </h1>
        <p class="text-xl text-muted-foreground">
            The next generation of AI Agents & Automation. 
            Automate tasks, deploy agents, and visualize workflows.
        </p>
        <div class="flex gap-4 justify-center">
            <a href="/dashboard" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 py-2">
                Get Started <ArrowRight class="ml-2 h-4 w-4" />
            </a>
            <a href="https://github.com/nopromises981991-art/-" target="_blank" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-8 py-2">
                GitHub
            </a>
        </div>
    </div>
</div>