<template>
  <section class="py-10 lg:py-5 relative overflow-hidden">
    <div class="absolute bottom-0 right-[-200px] z-10">
      <img src="/images/leaf.png" alt="leaf image">
    </div>
    <div class="container mx-auto px-5">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div class="order-2 md:order-1 md:col-span-5 grid grid-cols-12">
          <div class="col-span-5 md:col-span-12 flex justify-center items-center">
            <img src="/images/local-guide-mobile.png" alt="Local Guide App" class="md:w-2/3 lg:w-auto mr-auto md:mr-0">
          </div>
          <div class="col-span-7 md:hidden p-5">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        </div>
        <div class="order-1 md:order-2 md:col-span-7">
          <h2 class="primary--title mt-0 z-10">
            Uncover Hidden Gems:
            <span>Your Exclusive Local Guide Awaits!</span>
          </h2>
          <p class="leading-8">Hola, dear travelers 👋</p>
          <p class="leading-8">
            I'm Alfredo, your host and the proud owner of this little slice of paradise nestled in the heart of Gran Canaria. As you consider your stay on this beautiful island, I invite you to experience hospitality with heart at Los Elefantes.
          </p>
          <button class="hidden md:block bg-blue-500 hover:bg-blue-700 text-elefantes-yellow font-bold py-2 px-4 rounded z-10">
            Click Me
          </button>
        </div>
      </div>
    </div>
  </section>
</template> 