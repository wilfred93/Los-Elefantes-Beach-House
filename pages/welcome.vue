<template>
  <div class="container mx-auto md:px-0 px-5 bg-elefantes-yellow">
    <img
      src="/public/images/LosElefantesLogo.svg"
      class="mx-auto mt-6 w-[222px]"
      alt="Los Elefantes - Logo"
    />
    <div class="max-w-screen-lg mx-auto">
      <!-- Address Section -->
      <Collapsable title="Address">
        <p>You can access the apartment from 2 entrances:</p>
        <div class="container leading-7">
          <p class="font-bold mt-3.5">📍7th Floor Access:</p>
          <p>Calle Marruecos, 3, 35100 San Bartolomé de Tirajana, Las Palmas</p>
          <a
            class="italic text-light"
            href="https://goo.gl/maps/bHfMYzePFe8s61DT7"
            target="_blank"
            >(Click here to view in Google Maps)</a
          >

          <p class="font-bold">📍Pool Access:</p>
          <p>
            Avenida de Tirma, 2, 35100 San Bartolomé de Tirajana, Las Palmas.
          </p>
          <a
            class="italic text-light"
            href="https://goo.gl/maps/fGLpeuCBsEHkzAVq9"
            target="_blank"
            >(Click here to view in Google Maps)</a
          >

          <p class="my-3">
            🔑 The keys are collected in the
            <span class="font-bold">7th floor access</span> so make sure to use
            this access for the check-in.
          </p>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1ebF6_zh8oF7j8n10165fvrqAWSflfuk&ehbc=2E312F"
            width="100%"
            height="480"
          ></iframe>
        </div>
      </Collapsable>

      <!-- Check-In Section -->
      <Collapsable title="Check-In (Key collect)">
        <p class="text-bold">➡ Check-in from 15:00 to 23:30</p>
        <p class="mb-3.5 italic text-light">
          *Early check-in MIGHT be possible depending on availability. Please
          ask and we will try our best
        </p>
        <div class="container leading-7">
          <p class="font-bold mt-2">Instructions:</p>
          <ol class="list-decimal ml-8">
            <li class="mb-2">
              Go to <span class="font-bold">7th Floor Access.</span>
            </li>
            <li class="mb-2">
              To the right of the roundabout you will see a
              <span class="font-bold">door with the number 3</span> on it.
            </li>
            <li class="mb-2">
              To the left of the door,
              <span class="font-bold">behind a light pole</span> you will see a
              box lock attached to the fence.
            </li>
            <li class="mb-2">
              Open the box with the following
              <span class="font-bold">password: 0493</span>
            </li>
            <li class="mb-2">
              You will <span class="font-bold">find 2 keys:</span> one for all
              the community doors (entrance and swimming pool) and the other one
              for the apartment.
            </li>
            <li class="mb-2">
              After opening the first door you will be in the parking area.
              Inside you will see another door that is opened with the same key
              as the one from previous door.
            </li>
            <li class="mb-2">
              Once you are inside the building go to the left hallway and find
              <span class="font-bold">apartment 705</span>
            </li>
            <li class="mb-2">
              Please send us a Whatsapp so we know you arrive safely
            </li>
            <li class="mb-2">Enjoy your holiday!!🌴</li>
          </ol>

          <p class="mt-6">
            Below you can find some images that will help you locate the key box
            and the entrance:
          </p>
          <img
            class="mx-auto"
            src="/public/images/welcome/entrance.png"
            alt="Los Elefantes - Entrance"
          />
          <img
            class="mx-auto"
            src="/public/images/welcome/lock.png"
            alt="Lock"
          />
        </div>
      </Collapsable>

      <!-- Check-out Section -->
      <Collapsable title="Check-out">
        <p class="text-bold">➡ Check-out from 11:00 to 12:00</p>
        <p class="mb-3.5 italic text-light">
          * Late check-out MIGHT be possible depending on availability. Please
          ask and we will try our best
        </p>
        <p class="mt-3">
          🔑 For the check-out simply leave the keys in the kitchen table
        </p>
      </Collapsable>

      <!-- Wifi Section -->
      <Collapsable title="Wifi">
        <p class="text-bold">
          Name: <span class="font-bold">MOVISTAR_3640</span>
        </p>
        <p class="mt-1 text-bold">
          Password: <span class="font-bold">XJMXNAUx4Cr52ExnGnDn</span>
        </p>

        <p class="mt-5 text-bold">
          Name: <span class="font-bold">MOVISTAR_PLUS_3640</span>
        </p>
        <p class="mt-1 text-bold">
          Password: <span class="font-bold">XJMXNAUx4Cr52ExnGnDn</span>
        </p>
      </Collapsable>

      <!-- House Rules Section -->
      <Collapsable title="House Rules">
        <p class="text-bold">
          Hey there! Just a few quick rules to keep things chill during your
          stay:
        </p>
        <ol class="list-decimal ml-8 mt-3">
          <li class="mb-2">
            <span class="font-bold">No smoking:</span> Sorry, smoking's a no-go
            in our pad, but you can smoke on the balcony.
          </li>
          <li class="mb-2">
            <span class="font-bold">Keep it down:</span> We're all about good
            vibes here, so please keep the noise level down – especially after
            10pm.
          </li>
          <li class="mb-2">
            <span class="font-bold">No parties:</span> As much as we love a good
            time, our spot isn't the place for parties or events. And please
            don't bring any extra guests without giving us a heads up.
          </li>
          <li class="mb-2">
            <span class="font-bold">No pets:</span> Sorry, no furry friends
            allowed.
          </li>
          <li class="mb-2">
            <span class="font-bold"
              >Keep it tidy (even with cleaning fee):</span
            >
            We've got your back with a cleaning fee, but it's still super cool
            if you could help us out and keep things neat during your stay.
            Cheers!
          </li>
          <li class="mb-2">
            <span class="font-bold">Check-in and check-out:</span> Let's stick
            to the check-in and check-out times, unless we've worked out
            something different beforehand.
          </li>
        </ol>
        <p class="mt-2">
          Thanks for checking out the rules. Enjoy your stay – we hope it's
          epic!
        </p>
      </Collapsable>

      <!-- Contact Section -->
      <Collapsable title="Contact">
        <p>Alfredo Lázaro</p>
        <ul>
          <li><a href="tel:+34684055732">+34 684 055 732</a></li>
          <li>wilfred.lazaro@gmail.com</li>
        </ul>
        <p class="mt-3.5">Katia Lázaro</p>
        <ul>
          <li><a href="+34646779320">+34646779320</a></li>
        </ul>
      </Collapsable>

      <!-- About Section -->
      <Collapsable title="About the property">
        <p>
          Welcome to Los Elefantes Beach House, your tropical oasis in the heart
          of Playa del Inglés, Gran Canaria! 🌴
        </p>
        <p class="mt-6">
          My name is Alfredo and I'm thrilled to have you as our guest.
        </p>
      </Collapsable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Collapsable from "../components/shared/Collapsable.vue";

useHead({
  bodyAttrs: {
    class: "bg-elefantes-yellow",
  },
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
