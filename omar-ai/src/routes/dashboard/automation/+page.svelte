<script>
    import { Plus } from "lucide-svelte";
</script>

<div class="flex items-center justify-between h-full">
    <h2 class="text-2xl font-bold tracking-tight">Automation Workflows</h2>
    <button class="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
        <Plus class="size-4" /> New Workflow
    </button>
</div>

<div class="h-[600px] border rounded-xl bg-muted/20 relative overflow-hidden flex items-center justify-center mt-4">
    <div class="text-muted-foreground text-center">
        <p class="text-lg font-medium">Select or create a workflow to begin</p>
        <p class="text-sm">Drag and drop nodes to build your automation.</p>
    </div>
</div>
