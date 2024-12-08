/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		colors: {
  			primaryFont: '#2D515F',
  			secondaryFont: '#C8D1DA',
  			primary: {
  				'50': '#fef3ef',
  				'55': '#fde0d9',
  				'60': '#fccdbf',
  				'65': '#fbbba6',
  				'70': '#f9a98c',
  				'75': '#f89473',
  				'80': '#f6835a',
  				'85': '#f37040',
  				'90': '#f05e28',
  				'95': '#e34b10',
  				'100': '#e03a00',
  				base: '#F27052',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			light: {
  				'50': '#fbfbfb',
  				'55': '#f9f9f9',
  				'60': '#f7f7f7',
  				'65': '#f4f4f4',
  				'70': '#f2f2f2',
  				'75': '#f0f0f0',
  				'80': '#ededed',
  				'85': '#eaeaea',
  				'90': '#e8e8e8',
  				'95': '#e5e5e5',
  				'100': '#e3e3e3',
  				base: '#E6EAEE'
  			},
  			secondary: {
  				'50': '#f5fbfe',
  				'55': '#e9f9fd',
  				'60': '#d2f0fc',
  				'65': '#bbecfb',
  				'70': '#a4e3fa',
  				'75': '#8ddff9',
  				'80': '#76d6f7',
  				'85': '#5fd2f6',
  				'90': '#48caf5',
  				'95': '#31c1f4',
  				'100': '#1abdf3',
  				base: '#87CEFA',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			success: {
  				'50': '#f2fdf4',
  				'55': '#e6fbeb',
  				'60': '#d1f5df',
  				'65': '#bcf0d4',
  				'70': '#a6eaca',
  				'75': '#90e4bf',
  				'80': '#7adfb5',
  				'85': '#64dba9',
  				'90': '#4fda9f',
  				'95': '#38d595',
  				'100': '#23d28a',
  				base: '#00FF00'
  			},
  			warning: {
  				'50': '#fffbea',
  				'55': '#fff5cd',
  				'60': '#ffec99',
  				'65': '#ffe266',
  				'70': '#ffda33',
  				'75': '#ffd100',
  				'80': '#ffca00',
  				'85': '#ffc100',
  				'90': '#ffba00',
  				'95': '#ffb100',
  				'100': '#ffaa00',
  				base: '#FFA500'
  			},
  			alert: {
  				'50': '#fef3f2',
  				'55': '#fde2e1',
  				'60': '#fcc2be',
  				'65': '#fba19c',
  				'70': '#f97976',
  				'75': '#f75756',
  				'80': '#f53534',
  				'85': '#f31314',
  				'90': '#ed0f1f',
  				'95': '#e20b3b',
  				'100': '#d60000',
  				base: '#FF0000'
  			},
  			lightGray: {
  				'10': '#A6B3BF',
  				'20': '#A0AFBA',
  				'30': '#9AAAB6',
  				'40': '#94A6B1',
  				'50': '#8E9EAC',
  				'60': '#8898A8',
  				'70': '#8293A3',
  				'80': '#7C8F9F',
  				'90': '#768B9A',
  				'100': '#73879A',
  				'200': '#C8D1DA',
  				'300': '#F0F2F5'
  			},
  			line: {
  				and: '#5CBCFF',
  				or: '#FFD65C',
  				andTextBg: '#D6EEFF',
  				orTextBg: '#FFF5D6'
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
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),require('@tailwindcss/typography'),],
}
