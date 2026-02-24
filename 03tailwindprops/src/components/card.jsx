import React from 'react'

export default function card(props) {

  console.log(props.username)

  return (
    <div> <figure class="bg-slate-100 rounded-xl dark:bg-slate-800">
  <img class="w-24 h-24" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure></div>
  )
}
