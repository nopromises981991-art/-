<script>
  import { Upload, Eye } from 'lucide-svelte';
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <h1 class="text-3xl font-bold text-white mb-8">Computer Vision</h1>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <!-- Upload Area -->
    <div class="bg-slate-800 rounded-lg border border-white/5 p-8 border-dashed border-2 border-gray-600 flex flex-col items-center justify-center min-h-[400px]">
      <div class="bg-white/5 p-4 rounded-full mb-4">
        <Upload class="w-8 h-8 text-gray-400" />
      </div>
      <h3 class="text-lg font-medium text-white mb-2">Upload Image or Video</h3>
      <p class="text-gray-400 text-center max-w-sm mb-6">
        Drag and drop your files here, or click to browse. Supports JPG, PNG, and MP4.
      </p>
      <button class="bg-secondary hover:bg-secondary/80 text-white px-6 py-2 rounded-md transition-colors">
        Select Files
      </button>
    </div>

    <!-- Results Area -->
    <div class="bg-slate-800 rounded-lg border border-white/5 p-6 flex flex-col">
      <div class="flex items-center gap-2 mb-4">
        <Eye class="w-5 h-5 text-primary" />
        <h3 class="text-lg font-medium text-white">Analysis Results</h3>
      </div>
      
      <div class="flex-grow bg-slate-900/50 rounded-md p-4 text-sm font-mono text-gray-300">
        <p class="text-gray-500 italic">Waiting for input...</p>
      </div>
      
      <div class="mt-4 pt-4 border-t border-white/5">
        <div class="flex justify-between text-sm">
          <span class="text-gray-400">Processing Time</span>
          <span class="text-white">0ms</span>
        </div>
        <div class="flex justify-between text-sm mt-2">
          <span class="text-gray-400">Confidence</span>
          <span class="text-white">-</span>
        </div>
      </div>
    </div>
  </div>
</div>