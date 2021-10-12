import { Colors, Fonts } from '../../Resources';
import { getHeight, getWidth } from '../../Utils/size'
import { StyleSheet } from 'react-native'

const styles = (isDark = false) => {
    const colors = Colors(isDark);
    return StyleSheet.create({
        background: {
            flex: 1,
            resizeMode: 'cover',
            backgroundColor: colors.white
        },
        container: {
            flex: 1,
            paddingHorizontal: getWidth(20),
            paddingTop: getHeight(20),
            paddingBottom: getHeight(44)
        },
        descText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '400',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginBottom: getHeight(40)
        },
        imagePlaceholder: {
            alignSelf: 'center',
            marginBottom: getHeight(224),
            width: getWidth(160),
            height: getWidth(160),
            resizeMode: 'contain',
            overflow: 'hidden'
        },
        selectedImage: {
            width: '100%',
            height: '100%',
            borderRadius: getWidth(80)
        },
        selectedImageContainer: {
            flexDirection: 'row',
            alignSelf: 'center'
        },
        closeButton: {
            // alignSelf: 'center',
            right: getWidth(20),
            top: 0,
        },
        skipButton: {
            ...Fonts.style.helvetica_neue_bold_16,
            fontWeight: '700',
            lineHeight: getHeight(20),
            color: colors.textPrimary,
            marginTop: getHeight(15),
            alignSelf: 'center'
        }
    })
}

export default styles;