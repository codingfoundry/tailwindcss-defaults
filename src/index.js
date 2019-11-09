function({addComponents}) {
    const scrollbar = {
        '.scrollbar-w-2::-webkit-scrollbar': {
            width: '.5rem !important',
            height: '.5rem !important',
        },
        '.scrollbar-track::-webkit-scrollbar-track': {
            backgroundColor: '#e2e8f0 !important',
        },
        '.scrollbar-thumb::-webkit-scrollbar-thumb': {
            backgroundColor: '#cbd5e0 !important',
            borderRadius: '.25rem !important'
        },
    }
    addComponents(scrollbar)
}