<script>
    import { Terminal, Globe } from "lucide-svelte";
</script>

<h2 class="text-2xl font-bold tracking-tight mb-4">Agent Sandbox</h2>

<div class="grid grid-rows-[1fr_1fr] lg:grid-rows-1 lg:grid-cols-2 gap-4 h-[calc(100vh-200px)]">
    <!-- Terminal -->
    <div class="rounded-xl border bg-black text-green-400 font-mono text-sm p-4 overflow-auto shadow-sm flex flex-col">
        <div class="flex items-center gap-2 border-b border-green-900/50 pb-2 mb-2 text-green-600">
            <Terminal class="size-4" />
            <span>Terminal</span>
        </div>
        <div class="space-y-1">
            <p>> initializing environment...</p>
            <p>> loading agent modules...</p>
            <p>> connected to OMAR AI core.</p>
            <p>> waiting for commands...</p>
            <p class="animate-pulse">_</p>
        </div>
    </div>

    <!-- Browser Preview -->
    <div class="rounded-xl border bg-background shadow-sm flex flex-col overflow-hidden">
         <div class="flex items-center gap-2 border-b bg-muted/40 p-2 text-sm text-muted-foreground">
            <Globe class="size-4" />
            <div class="bg-background px-3 py-1 rounded-md text-xs border flex-1">https://example.com/demo</div>
        </div>
        <div class="flex-1 bg-white p-4 relative">
            <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                Browser View
            </div>
        </div>
    </div>
</div>
