let menuSizes = {
    product : {
        xxl: {
            width: '400px',
            height: '490px',
            headerMenuTranslateX: 'calc(50vw - 600px)',
        },
        xl: {
            width: '400px',
            height: '490px',
            headerMenuTranslateX: 'calc((100vw - 780px) / 2)',
        },
        lg: {
            width: '400px',
            height: '490px',
            headerMenuTranslateX: 'calc((100vw - 780px) / 2)',
        },
        md: {
            width: '400px',
            height: '490px',
            headerMenuTranslateX: 'calc((100vw - 780px) / 2)',
        },
    },
    solutions: {
        xxl: {
            width: '1200px',
            height: '800px',
            headerMenuTranslateX: 'calc(50vw - 600px)',
            headerArrowTranslateX: -262
        },
        xl: {
            width: '1200px',
            height: '800px',
            headerMenuTranslateX: 'calc((100vw - 1200px) / 2)',
            headerArrowTranslateX: -270
        },
        lg: {
            width: '1120px',
            height: '800px',
            headerMenuTranslateX: 'calc((100vw - 1120px) / 2)',
            headerArrowTranslateX: -255
        },
        md: {
            width: '380px',
            height: '600px',
            headerMenuTranslateX: 'calc((100vw - 380px) / 2)',
            headerArrowTranslateX: -240
        },
    },
    resources: {
        xxl: {
            width: '900px',
            height: '480px',
            headerMenuTranslateX: 'calc(50vw - 450px)',
            headerArrowTranslateX: -173
        },
        xl: {
            width: '900px',
            height: '480px',
            headerMenuTranslateX: 'calc((100vw - 900px) / 2)',
            headerArrowTranslateX: -177
        },
        lg: {
            width: '800px',
            height: '480px',
            headerMenuTranslateX: 'calc((100vw - 800px) / 2)',
            headerArrowTranslateX: -165
        },
        md: {
            width: '580px',
            height: '480px',
            headerMenuTranslateX: 'calc((100vw - 580px) / 2)',
            headerArrowTranslateX: -165
        }
    }
};
const getBreakpoint = (size) => {
    if (size <= 1040) {
        return 'md';
    } else if  (size > 1040 && size < 1400) {
        return 'lg';
    } else if (size > 1400 && size < 1570) {
        return 'xl';
    } else if (size >= 1570) {
        return 'xxl';
    } else {
        return 'xxl';
    }
}

export function menuSize(name, size) {
    return {
        size: {
            width: menuSizes[name][getBreakpoint(size)].width,
            height: menuSizes[name][getBreakpoint(size)].height
        },
        headerArrowTranslateX: menuSizes[name][getBreakpoint(size)].headerArrowTranslateX,
        headerMenuTranslateX: menuSizes[name][getBreakpoint(size)].headerMenuTranslateX,
    }
}