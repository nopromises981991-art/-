<script>
    import { Bot, Play, Pause, Settings } from "lucide-svelte";
    const agents = [
        { name: "Researcher", status: "Running", tasks: 12 },
        { name: "Coder", status: "Idle", tasks: 0 },
        { name: "Support Bot", status: "Running", tasks: 45 },
    ];
</script>

<div class="flex items-center justify-between">
    <h2 class="text-2xl font-bold tracking-tight">Agents</h2>
    <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">New Agent</button>
</div>

<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each agents as agent}
        <div class="rounded-xl border bg-card text-card-foreground shadow-sm">
            <div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 class="font-semibold leading-none tracking-tight">{agent.name}</h3>
                <Bot class="size-4 text-muted-foreground" />
            </div>
            <div class="p-6 pt-0">
                <div class="text-sm text-muted-foreground mb-4">Status: <span class={agent.status === 'Running' ? 'text-green-500' : 'text-yellow-500'}>{agent.status}</span></div>
                <div class="flex items-center gap-2">
                    <button class="p-2 border rounded-md hover:bg-accent"><Play class="size-4" /></button>
                    <button class="p-2 border rounded-md hover:bg-accent"><Pause class="size-4" /></button>
                    <button class="p-2 border rounded-md hover:bg-accent ml-auto"><Settings class="size-4" /></button>
                </div>
            </div>
        </div>
    {/each}
</div>
