// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    output: 'static',
	integrations: [
		starlight({
			title: 'Cactus Docs',
			description: 'Documentation for all cactus projects.',
			logo: {
				dark: './src/assets/logo.webp',
				light: './src/assets/logo-light.webp',
				replacesTitle: true,
				alt: 'Cactus',
			},
			favicon: '/favicon.png',
			customCss: ['./src/custom.css'],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/cactusmod/documentation' },
				{ icon: 'discord', label: 'Discord', href: 'https://cactusmod.xyz/go/?discord' },
			],
			sidebar: [
				{
					label: 'CactusMod',
					items: [
						'cactus',
						{ label: 'Getting Started', items: ['cactus/users/getting-started/installation'] },
						{ label: 'Features', items: ['cactus/users/features/cosmetics'] },
						{ label: 'Developer Documentation', items: [
							{ label: 'Addons', items: [
								'cactus/developers/addons',
								'cactus/developers/addons/project-setup',
								'cactus/developers/addons/registry-bus',
								{ label: 'Features', items: [
									'cactus/developers/addons/features/modules',
									'cactus/developers/addons/features/commands',
									'cactus/developers/addons/features/hud-elements',
									'cactus/developers/addons/features/content-packs',
									'cactus/developers/addons/features/placeholders',
									'cactus/developers/addons/features/configuration',
									'cactus/developers/addons/features/screenshot-providers'
								]},
								'cactus/developers/addons/api-reference'
							]}
						]},
					],
				},
			],
		}),
	],
});
