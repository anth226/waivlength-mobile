import { getHeight } from "../Utils/size"

const family = {
    helvetica_neue_light: 'HelveticaNeue-Light',
    helvetica_neue_bold: 'HelveticaNeue-Bold',
    helvetica_neue_medium: 'HelveticaNeue-Medium'
}

const size = {
    s10: getHeight(10),
    s12: getHeight(12),
    s14: getHeight(14),
    s15: getHeight(15),
    s16: getHeight(16),
    s17: getHeight(17),
    s18: getHeight(18),
    s20: getHeight(20),
    s22: getHeight(22),
    s23: getHeight(23),
    s24: getHeight(24),
    s32: getHeight(32),
    s34: getHeight(34),
    s42: getHeight(42)
}

const style = {
    helvetica_neue_light_10: {
        fontFamily: family.helvetica_neue_light,
        fontSize: size.s10,
    },
    helvetica_neue_light_14: {
        fontFamily: family.helvetica_neue_light,
        fontSize: size.s14,
    },
    helvetica_neue_light_16: {
        fontFamily: family.helvetica_neue_light,
        fontSize: size.s16,
    },
    helvetica_neue_light_18: {
        fontFamily: family.helvetica_neue_light,
        fontSize: size.s18,
    },
    helvetica_neue_light_20: {
        fontFamily: family.helvetica_neue_light,
        fontSize: size.s20,
    },
    helvetica_neue_light_24: {
        fontFamily: family.helvetica_neue_light,
        fontSize: size.s24,
    },
    helvetica_neue_light_32: {
        fontFamily: family.helvetica_neue_light,
        fontSize: size.s32,
    },
    helvetica_neue_medium_12: {
        fontFamily: family.helvetica_neue_medium,
        fontSize: size.s12,
    },
    helvetica_neue_medium_14: {
        fontFamily: family.helvetica_neue_medium,
        fontSize: size.s14,
    },
    helvetica_neue_medium_16: {
        fontFamily: family.helvetica_neue_medium,
        fontSize: size.s16,
    },
    helvetica_neue_medium_18: {
        fontFamily: family.helvetica_neue_medium,
        fontSize: size.s18,
    },
    helvetica_neue_medium_20: {
        fontFamily: family.helvetica_neue_medium,
        fontSize: size.s20,
    },
    helvetica_neue_medium_24: {
        fontFamily: family.helvetica_neue_medium,
        fontSize: size.s24,
    },
    helvetica_neue_medium_32: {
        fontFamily: family.helvetica_neue_medium,
        fontSize: size.s32,
    },
    helvetica_neue_bold_16: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s16,
    },
    helvetica_neue_bold_18: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s18,
    },
    helvetica_neue_bold_20: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s20,
    },
    helvetica_neue_bold_24: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s24,
    },
    helvetica_neue_bold_32: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s32,
    },
    helvetica_neue_bold_34: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s34,
    }
}

export default {
    family,
    size,
    style
}