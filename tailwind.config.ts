
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#FFDE59',
					foreground: '#1A2238',
					50: '#FFFAE6',
					100: '#FFF6CC',
					200: '#FFED99',
					300: '#FFE466',
					400: '#FFDB33',
					500: '#FFDE59',
					600: '#FFCD00',
					700: '#CCA300',
					800: '#997A00',
					900: '#665200',
				},
				secondary: {
					DEFAULT: '#1A2238',
					foreground: '#ffffff',
					50: '#E6E8EC',
					100: '#CCD0DA',
					200: '#99A1B5',
					300: '#66738F',
					400: '#33446A',
					500: '#1A2238',
					600: '#151C2D',
					700: '#101522',
					800: '#0A0E16',
					900: '#05070B',
				},
				accent: {
					DEFAULT: '#0CA789',
					foreground: '#ffffff',
					50: '#E6F7F4',
					100: '#CCEFE9',
					200: '#99DFD3',
					300: '#66CEBE',
					400: '#33BEA8',
					500: '#0CA789',
					600: '#0A866D',
					700: '#076451',
					800: '#054336',
					900: '#02211B',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-bottom': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-in-bottom': 'slide-in-bottom 0.3s ease-out',
				'fade-in': 'fade-in 0.3s ease-out'
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				heading: ['Poppins', 'sans-serif'],
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
