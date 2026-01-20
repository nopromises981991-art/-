<script>
  import { Play, RotateCcw } from 'lucide-svelte';
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 h-[calc(100vh-4rem)] flex flex-col">
  <div class="flex justify-between items-center mb-4">
    <h1 class="text-3xl font-bold text-white">Code Sandbox</h1>
    <div class="flex space-x-2">
      <select class="bg-slate-800 border border-white/10 text-white rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
        <option>Python 3.10</option>
        <option>Node.js 18</option>
        <option>Rust 1.70</option>
      </select>
      <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm transition-colors">
        <Play class="w-4 h-4" /> Run
      </button>
      <button class="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm transition-colors">
        <RotateCcw class="w-4 h-4" /> Reset
      </button>
    </div>
  </div>

  <div class="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-4">
    <!-- Editor -->
    <div class="bg-slate-900 rounded-lg border border-white/10 overflow-hidden flex flex-col">
      <div class="bg-slate-800 px-4 py-2 text-xs text-gray-400 border-b border-white/5">
        main.py
      </div>
      <textarea 
        class="flex-grow w-full h-full bg-slate-950 p-4 font-mono text-sm text-gray-300 focus:outline-none resize-none"
        spellcheck="false"
      ># Welcome to OMAR AI Sandbox
# Write your automation script here

import os

def analyze_data():
    print("Starting analysis...")
    # Your logic here
    return "Analysis complete"

print(analyze_data())
</textarea>
    </div>

    <!-- Output -->
    <div class="bg-black rounded-lg border border-white/10 overflow-hidden flex flex-col">
      <div class="bg-slate-800 px-4 py-2 text-xs text-gray-400 border-b border-white/5">
        Terminal
      </div>
      <div class="p-4 font-mono text-sm">
        <div class="text-green-400">$ python main.py</div>
        <div class="text-white mt-2">Starting analysis...</div>
        <div class="text-white">Analysis complete</div>
        <div class="text-gray-500 mt-4">Program exited with code 0</div>
        <div class="text-gray-500 animate-pulse">_</div>
      </div>
    </div>
  </div>
</div>