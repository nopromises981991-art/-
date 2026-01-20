<script>
    import { Upload, Camera } from "lucide-svelte";
</script>

<h2 class="text-2xl font-bold tracking-tight mb-4">Computer Vision Analysis</h2>

<div class="grid gap-6 lg:grid-cols-2">
    <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="text-lg font-semibold mb-4">Input Source</h3>
        <div class="border-2 border-dashed rounded-lg h-64 flex flex-col items-center justify-center text-muted-foreground hover:bg-accent/50 transition-colors cursor-pointer">
            <Upload class="size-10 mb-2" />
            <p>Drag and drop image or video here</p>
            <p class="text-xs">Supports JPG, PNG, MP4</p>
        </div>
        <div class="mt-4 flex justify-center">
            <span class="text-sm text-muted-foreground">- OR -</span>
        </div>
        <button class="mt-4 w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 rounded-md flex items-center justify-center gap-2 text-sm font-medium">
            <Camera class="size-4" /> Use Webcam
        </button>
    </div>

    <div class="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
        <h3 class="text-lg font-semibold mb-4">Analysis Results</h3>
        <div class="space-y-4">
            <div class="p-4 bg-muted/50 rounded-lg">
                <p class="text-sm font-medium">Waiting for input...</p>
                <div class="h-2 w-full bg-muted mt-2 rounded-full overflow-hidden">
                    <div class="h-full bg-primary w-0"></div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
                <div class="h-20 bg-muted/30 rounded-md"></div>
                <div class="h-20 bg-muted/30 rounded-md"></div>
            </div>
        </div>
    </div>
</div>
