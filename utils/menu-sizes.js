let menuSizes = {
    product : {
        xxl: {
            width: '390px',
            height: '520px',
            headerMenuTranslateX: 'calc(50vw - 500px)',
        },
        xl: {
            width: '390px',
            height: '560px',
            headerMenuTranslateX: 'calc((100vw - 780px) / 2)',
        },
        lg: {
            width: '390px',
            height: '560px',
            headerMenuTranslateX: 'calc((100vw - 780px) / 2)',
        },
        md: {
            width: '390px',
            height: '560px',
            headerMenuTranslateX: 'calc((100vw - 780px) / 2)',
        },
    },
    solutions: {
        xxl: {
            width: '1170px',
            height: '690px',
            headerMenuTranslateX: 'calc(50vw - 585px)',
        },
        xl: {
            width: '957px',
            height: '653px',
            headerMenuTranslateX: 'calc((100vw - 957px) / 2)',
        },
        lg: {
            width: '560px',
            height: '653px',
            headerMenuTranslateX: 'calc((100vw - 560px) / 2)',
        },
        md: {
            width: '390px',
            height: '560px',
            headerMenuTranslateX: 'calc((100vw - 390px) / 2)',
        },
    },
    resources: {
        xxl: {
            width: '810px',
            height: '580px',
            headerMenuTranslateX: 'calc(50vw - 405px)',
        },
        xl: {
            width: '810px',
            height: '580px',
            headerMenuTranslateX: 'calc((100vw - 810px) / 2)',
        },
        lg: {
            width: '610px',
            height: '580px',
            headerMenuTranslateX: 'calc((100vw - 610px) / 2)',
        },
        md: {
            width: '390px',
            height: '560px',
            headerMenuTranslateX: 'calc((100vw - 390px) / 2)',
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