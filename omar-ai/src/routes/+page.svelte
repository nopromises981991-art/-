<script>
  import { Bot, Eye, Code, ArrowRight } from 'lucide-svelte';
</script>

<div class="relative overflow-hidden">
  <!-- Hero Section -->
  <div class="relative pt-20 pb-32 sm:pt-32 sm:pb-40">
    <div class="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
    </div>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
        Unlock the Power of <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">OMAR AI</span>
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
        The ultimate platform for AI Agents, Automation, Computer Vision, and Secure Sandboxing. Experience the future of intelligent workflows.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/dashboard" class="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all flex items-center gap-2">
          Get Started <ArrowRight class="w-4 h-4" />
        </a>
        <a href="#features" class="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>

  <!-- Features Section -->
  <div id="features" class="py-24 sm:py-32 bg-slate-900/50">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-secondary">Faster, Smarter, Better</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything you need to automate your world
        </p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          
          <div class="flex flex-col items-start">
            <div class="rounded-lg bg-white/5 p-2 ring-1 ring-white/10 mb-4">
              <Bot class="h-6 w-6 text-white" />
            </div>
            <dt class="text-xl font-semibold leading-7 text-white">Autonomous Agents</dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
              <p class="flex-auto">Deploy intelligent agents that handle complex tasks, from data processing to customer interactions, with minimal supervision.</p>
            </dd>
          </div>

          <div class="flex flex-col items-start">
            <div class="rounded-lg bg-white/5 p-2 ring-1 ring-white/10 mb-4">
              <Eye class="h-6 w-6 text-white" />
            </div>
            <dt class="text-xl font-semibold leading-7 text-white">Computer Vision</dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
              <p class="flex-auto">Analyze images and video streams in real-time. Detect objects, recognize text, and extract insights effortlessly.</p>
            </dd>
          </div>

          <div class="flex flex-col items-start">
            <div class="rounded-lg bg-white/5 p-2 ring-1 ring-white/10 mb-4">
              <Code class="h-6 w-6 text-white" />
            </div>
            <dt class="text-xl font-semibold leading-7 text-white">Secure Sandbox</dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
              <p class="flex-auto">Execute code safely in our isolated sandbox environment. Test scripts and run automation logic without risk.</p>
            </dd>
          </div>

        </dl>
      </div>
    </div>
  </div>
</div>