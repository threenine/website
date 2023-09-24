
<script setup lang="ts">


const features = [
      {
        name: 'Continuous Learning',
        description:
            'To innovate, to try a new process, or to do something new all requires learning. All our activities are focused on learning, teaching, sharing and supporting technology for the benefit of all.',
        icon: 'cil:education',
      },
      {
        name: 'Strive for sustainability',
        description:
            'Code has an impact on the environment, we aim to produce algorithms that have minimal energy consumption as much as possible.',
        icon: 'carbon:sustainability',
      },
      {
        name: 'Bitcoin',
        description:
            'We believe that Bitcoin and its ecosystem will be the change for good for humanity, with continued support, education and focus we aim to help drive the adoption and integration of this nascent technology for all',
        icon: 'bxl:bitcoin',
      },
      {
        name: 'Privacy and Security',
        description:
            'We believe big corporations, states and technology giants are over stepping the mark and beyond when it comes to data collection and surveillance ',
        icon: 'material-symbols:privacy-tip-outline-rounded',
      },
    ]
</script>
    <template>
  <div class="bg-orange-50 py-24 sm:py-32 rounded-2xl">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <p class="mt-2 text-lg font-semibold tracking-tight text-orange-400 sm:text-xl">Our Mission</p>

      </div>
      <div class="max-w-full text-center">
        <p class="mt-6 text-4xl leading-8 font-extrabold text-orange-500">Develop the change we want to see in the world!</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 mr-2">
                <Icon :name="feature.icon" class="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
