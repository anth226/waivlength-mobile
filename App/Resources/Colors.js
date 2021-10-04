const colors = (isDark = false) => ({
    textPrimary: isDark ? 'white' : 'black',
    textSecondary: isDark ? '#9D9CB4' : '#9C9BA2',
    buttonPrimary: isDark ? '#845EE2' : '#408CFF',
    green: '#27AE60',
    white: '#FFFFFF',
    background: isDark ? '#0D104F' : '#E5E5E5',
    backgroundSecondary: isDark ? '#2B2E68' : '#F0F4FA',
    modalBody: isDark ? '#0D104F' : '#FFFFFF',
    text_black: isDark ? 'white' : '#1E1E1E',
    line_grey: isDark ? '#9D9CB4' : '#E5E5E5',
    background_grey: '#F0F4FA',
    error_red: '#CC4545',
    transparent: 'transparent',
    transparent_4: 'rgba(0,0,0,0.4)',
    dotActive: isDark ? '#FFFFFF' : '#408CFF',
    dotInactive: '#9D9CB4',
    inputBackground: isDark ? '#20235C' : '#FFFFFF',
    inputShadow: isDark ? 'rgba(117, 117, 117, 0.13)' : '#E5E5E5',
    tabInactive: '#9C9BA2',
    tabActive: isDark ? '#845EE2' : '#408CFF',
    black: '#1E1E1E'
})

export default colors