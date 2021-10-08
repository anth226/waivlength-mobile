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
            paddingTop: getHeight(30)
        },
        descText: {
            ...Fonts.style.helvetica_neue_medium_16,
            fontWeight: '400',
            lineHeight: getHeight(22),
            color: colors.textPrimary,
            marginBottom: getHeight(30)
        },
        imagePlaceholder: {
            alignSelf: 'center',
            marginTop: getHeight(130),
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
            alignSelf: 'center',
            right: getWidth(20)
        }
    })
}

export default styles;