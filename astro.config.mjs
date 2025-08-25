import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import scrollProgress from './src/index.ts';
import starlightRapide from 'starlight-theme-rapide';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Starlight Progress Bar',
      description: 'Beautiful scroll progress bars for your Starlight documentation sites.',
      plugins: [
        starlightRapide(),
        scrollProgress({
          height: '5px',
          color: '#42b883',
          position: 'top',
          animation: 'smooth',
          zIndex: 100,
          showOnMobile: true,
          showOnDesktop: true,
          throttle: 16,
        })
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/' },
            { label: 'Installation', link: '/getting-started/installation/' },
            { label: 'Quick Start', link: '/getting-started/quick-start/' },
          ],
        },
        {
          label: 'Configuration', 
          items: [
            { label: 'Options', link: '/configuration/options/' },
            { label: 'Styling', link: '/configuration/styling/' },
            { label: 'Advanced', link: '/configuration/advanced/' },
          ],
        },
        {
          label: 'Examples',
          items: [
            { label: 'Basic Usage', link: '/examples/basic/' },
            { label: 'Custom Styles', link: '/examples/custom-styles/' },
            { label: 'Responsive Design', link: '/examples/responsive/' },
          ],
        },
      ],
    }),
  ],
});
