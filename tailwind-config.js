// Configuração Customizada do Tailwind
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'primary-blue': '#2563EB',
                'success-green': '#10B981',
                'gray-neutral': '#6B7280',
                'pending-yellow': '#F59E0B',
                'danger-red': '#EF4444',
                'surface-light': '#ffffff', 
                'bg-light': '#f7f7f9', 
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                'xl': '12px', 
                '2xl': '16px',
                '3xl': '24px',
            },
            boxShadow: {
                'md3': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            }
        }
    }
}