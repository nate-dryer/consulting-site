/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Enable JIT mode for faster builds and smaller CSS bundles
  mode: "jit",
  theme: {
  	extend: {
  		// Spacing scale: numeric increments and semantic tokens for sitewide consistency
  		spacing: {
  			// Numeric scale (rem-based, 4px = 0.25rem)
  			'0': '0rem',
  			'0.5': '0.125rem',
  			'1': '0.25rem',
  			'1.5': '0.375rem',
  			'2': '0.5rem',
  			'2.5': '0.625rem',
  			'3': '0.75rem',
  			'3.5': '0.875rem',
  			'4': '1rem',
  			'5': '1.25rem',
  			'6': '1.5rem',
  			'7': '1.75rem',
  			'8': '2rem',
  			'9': '2.25rem',
  			'10': '2.5rem',
  			'12': '3rem',
  			'14': '3.5rem',
  			'16': '4rem',
  			'20': '5rem',
  			'24': '6rem',
  			'28': '7rem',
  			'32': '8rem',
  			'36': '9rem',
  			'40': '10rem',
  			'44': '11rem',
  			'48': '12rem',
  			'52': '13rem',
  			'56': '14rem',
  			'60': '15rem',
  			'64': '16rem',
  			'72': '18rem',
  			'80': '20rem',
  			'96': '24rem',
  			// Semantic tokens
  			'section-y': '4rem', // vertical padding for sections
  			'section-y-sm': '2rem',
  			'section-y-lg': '6rem',
  			'container-x': '1.5rem', // horizontal padding for containers
  			'container-x-lg': '3rem',
  			'card-gap': '2rem', // gap between cards in grids
  			'card-inner': '1.5rem', // internal card padding
          'section-gap-y': '4rem', // margin-bottom for sections
  			'heading-lg-bottom': '2.5rem', // margin-bottom for large headings
  			'heading-md-bottom': '1.5rem',
  			'heading-sm-bottom': '1rem',
  			'form-gap': '1.25rem', // gap between form fields
  			'input-padding': '0.75rem', // input/textarea padding
  			'btn-padding-x': '1.25rem',
  			'btn-padding-y': '0.75rem',
  		},
  		colors: {
  			blue: {
  				'50': '#f0f7ff',
  				'100': '#e0effe',
  				'200': '#bae0fd',
  				'300': '#7cc5fb',
  				'400': '#36a9f7',
  				'500': '#0c8ee7',
  				'600': '#0072c4',
  				'700': '#0059a0',
  				'800': '#004c85',
  				'900': '#00406f'
  			},
  			purple: {
  				'50': '#f3e8ff',
  				'100': '#e9d5ff',
  				'200': '#d8b4fe',
  				'300': '#c084fc',
  				'400': '#a855f7',
  				'500': '#9333ea',
  				'600': '#7e22ce',
  				'700': '#6d28d9',
  				'800': '#5b21b6',
  				'900': '#4c1d95',
  				light: '#7D48F3',
  				dark: '#5B21B6'
  			},
  			red: {
  				'50': '#fef2f2',
  				'100': '#fee2e2',
  				'200': '#fecaca',
  				'300': '#fca5a5',
  				'400': '#f87171',
  				'500': '#ef4444',
  				'600': '#dc2626',
  				'700': '#b91c1c',
  				'800': '#991b1b',
  				'900': '#7f1d1d'
  			},
  			orange: {
  				'50': '#fff7ed',
  				'100': '#ffedd5',
  				'200': '#fed7aa',
  				'300': '#fdba74',
  				'400': '#fb923c',
  				'500': '#f97316',
  				'600': '#ea580c',
  				'700': '#c2410c',
  				'800': '#9a3412',
  				'900': '#7c2d12'
  			},
  			gray: {
  				'50': '#f9fafb',
  				'100': '#f3f4f6',
  				'200': '#e5e7eb',
  				'300': '#d1d5db',
  				'400': '#9ca3af',
  				'500': '#6b7280',
  				'600': '#4b5563',
  				'700': '#374151',
  				'800': '#1f2937',
  				'900': '#111827'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			fieldworks: [
  				'var(--font-fieldworks)'
  			],
  			sans: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.sans
  	             ],
  			serif: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.serif
  	             ],
  			mono: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.mono
  	             ],
  			display: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.sans
  	             ],
  			body: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.sans
  	             ],
  			heading: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.sans
  	             ],
  			button: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.sans
  	             ],
  			input: [
  				'var(--font-fieldworks)',
  	                 ...defaultTheme.fontFamily.sans
  	             ]
  		},
  		transitionDuration: {
  			DEFAULT: '300ms',
  			fast: '150ms',
  			slow: '500ms'
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.8s ease-out forwards',
  			'slide-in-left': 'slideInFromLeft 0.8s ease-out forwards',
  			'slide-in-right': 'slideInFromRight 0.8s ease-out forwards',
  			'wave-top': 'wave-top 15s ease-in-out infinite',
  			'wave-bottom': 'wave-bottom 15s ease-in-out infinite',
  			float: 'float 6s ease-in-out infinite',
  			'pulse-slow': 'pulse 4s ease-in-out infinite',
  			'rotate-slow': 'rotate 15s linear infinite'
  		},
  		keyframes: {
  			fadeIn: {
  				from: {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideInFromLeft: {
  				from: {
  					transform: 'translateX(-50px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			slideInFromRight: {
  				from: {
  					transform: 'translateX(50px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			'wave-top': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-0.25px) scaleY(1.002)'
  				}
  			},
  			'wave-bottom': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(0.25px) scaleY(1.002)'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-15px)'
  				}
  			},
  			pulse: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0.7'
  				}
  			},
  			rotate: {
  				from: {
  					transform: 'rotate(0deg)'
  				},
  				to: {
  					transform: 'rotate(360deg)'
  				}
  			}
  		},
  		boxShadow: {
  			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  			md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  			lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  			xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem',
  			lg: '4rem',
  			xl: '5rem',
  			'2xl': '6rem'
  		}
  	}
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ":root": {
          // Colors
          "--background": theme("colors.white"),
          "--foreground": theme("colors.gray.900"),

          // Primary colors (purple)
          "--primary": theme("colors.purple.700"),
          "--primary-hover": theme("colors.purple.800"),
          "--primary-light": theme("colors.purple.light"),
          "--primary-dark": theme("colors.purple.dark"),

          // Secondary colors
          "--secondary": theme("colors.white"),
          "--secondary-hover": theme("colors.gray.100"),

          // Accent colors
          "--accent": theme("colors.red.500"),
          "--accent-hover": theme("colors.red.600"),

          // Orange colors
          "--orange": theme("colors.orange.500"),
          "--orange-hover": theme("colors.orange.600"),

          // Transitions
          "--transition-fast": theme("transitionDuration.fast"),
          "--transition-default": theme("transitionDuration.DEFAULT"),
          "--transition-slow": theme("transitionDuration.slow"),

          // Animation durations
          "--animation-fast": "0.8s",
          "--animation-medium": "4s",
          "--animation-slow": "15s",

          // Shadows
          "--shadow-sm": theme("boxShadow.sm"),
          "--shadow-md": theme("boxShadow.md"),
          "--shadow-lg": theme("boxShadow.lg"),
          "--shadow-xl": theme("boxShadow.xl"),
        },
      });
    },
      require("tailwindcss-animate")
],
};
