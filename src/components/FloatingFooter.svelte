<script lang="ts">
  import NavigationLinks from './NavigationLinks.svelte';
  import IconMobilePhone from '../assets/iconsax/mobile.svg';
  import IconMessageFrom from '../assets/iconsax/messages-3.svg';
  import IconVCS from '../assets/iconsax/hierarchy-square.svg';
</script>

<footer>
  <!-- Navigation Links -->
  <NavigationLinks />

  <!-- Socials -->
  <ul class="socials-wrapper avatar-group -space-x-4">
    <li class="avatar">
      <a href="mailto:babaali196@gmail.com" class="social">
        <IconMessageFrom />
      </a>
    </li>
    <li class="avatar">
      <a href="https://github.com/AleeyCreative" class="social">
        <IconVCS />
      </a>
    </li>
    <li class="avatar">
      <a href="tel:08024711182" class="social">
        <IconMobilePhone />
      </a>
    </li>
  </ul>
</footer>

<style lang="postcss">
  footer {
    @apply fixed bottom-12 flex md:px-8 px-4 items-center justify-between w-screen;
  }

  .socials-wrapper {
    @apply flex justify-between text-clip;
  }
  .social {
    @apply w-8 md:w-16 h-8 md:h-16 relative  inline-grid place-items-center shadow-md rounded-full bg-white hover:before:w-full hover:before:h-full;
  }
  .social svg {
    @apply w-8 h-8;
  }

  .social::before {
    content: '';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @apply w-0 h-0 absolute bg-gray-400 opacity-25 rounded-full transition-all duration-[1200];
  }
</style>
