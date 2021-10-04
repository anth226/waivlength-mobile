import { getHeight } from "../Utils/size"

const family = {
    helvetica_neue_light: 'HelveticaNeueLight',
    helvetica_neue_bold: 'HelveticaNeueBold',
    helvetica_neue_medium: 'HelveticaNeueMedium'
}

const size = {
    s10: getHeight(10),
    s14: getHeight(14),
    s15: 15,
    s16: getHeight(16),
    s17: 17,
    s18: getHeight(18),
    s20: getHeight(20),
    s22: 22,
    s23: 23,
    s24: getHeight(24),
    s32: getHeight(32),
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
    helvetica_neue_bold_24: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s24,
    },
    helvetica_neue_bold_32: {
        fontFamily: family.helvetica_neue_bold,
        fontSize: size.s32,
    }
}

export default {
    family,
    size,
    style
}