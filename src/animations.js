import { useAnimatedScrollHandler, Extrapolate, interpolate, useAnimatedStyle, interpolateColor } from "react-native-reanimated";
import { stickyHeaderHeight } from "components/sticky-header";
import { Window } from 'globals';

export const scrollHandler = (scroll) => useAnimatedScrollHandler({
    onScroll: (event) => {
        scroll.value = event.contentOffset.y;
    },
});

export const animatedStyle = (sharedValue, animations) => useAnimatedStyle(() => {

    const style = {};
    const transforms = [];

    animations.forEach(animation => {

        const interpolatedValue = animation.isColor ?
            interpolateColor(
                sharedValue.value,
                animation.inputRange,
                animation.outputRange,
                'RGB',
            ) :
            interpolate(
                sharedValue.value,
                animation.inputRange,
                animation.outputRange,
                Extrapolate.CLAMP,
            )

        animation.isTransform ?
            transforms.push(Object.defineProperty(Object.create(null), animation.type, { value: animation.isRotate ? `${interpolatedValue}deg` : interpolatedValue, enumerable: true })) :
            Object.defineProperty(style, animation.type, { value: interpolatedValue, enumerable: true })

    });

    transforms.length > 0 ? Object.defineProperty(style, 'transform', { value: transforms, enumerable: true }) : null

    return style;

})

const defaultInputRange = {
    swipeIndicator: [0, Window.WIDTH * 0.36],
    stickyHeader: [0, stickyHeaderHeight],
}

export const animations = {
    swipeIndicator: {
        iconRotate: {
            type: 'rotateZ',
            isTransform: true,
            isRotate: true,
            inputRange: defaultInputRange.swipeIndicator,
            outputRange: [0, 180],
        },
        iconTranslate: {
            type: 'translateY',
            isTransform: true,
            inputRange: defaultInputRange.swipeIndicator,
            outputRange: [0, Window.WIDTH * 0.05],
        },
        textTranslate: {
            type: 'translateY',
            isTransform: true,
            inputRange: defaultInputRange.swipeIndicator,
            outputRange: [0, Window.WIDTH * -0.04],
        },
        textFadeIn: {
            type: 'opacity',
            inputRange: defaultInputRange.swipeIndicator,
            outputRange: [0, 1],
        },
        textFadeOut: {
            type: 'opacity',
            inputRange: defaultInputRange.swipeIndicator,
            outputRange: [1, 0],
        },
    },
    stickyHeader: {
        collapse: {
            type: 'translateY',
            isTransform: true,
            inputRange: defaultInputRange.stickyHeader,
            outputRange: [0, -stickyHeaderHeight],
        },
        parallax: {
            type: 'translateY',
            isTransform: true,
            inputRange: defaultInputRange.stickyHeader,
            outputRange: [0, stickyHeaderHeight / 2],
        },
        iconTranslate: {
            type: 'translateY',
            isTransform: true,
            inputRange: defaultInputRange.stickyHeader,
            outputRange: [0, stickyHeaderHeight],
        },
        titleTranslate: {
            type: 'translateY',
            isTransform: true,
            inputRange: defaultInputRange.stickyHeader,
            outputRange: [0, Window.WIDTH * 0.03],
        },
        subtitleTranslate: {
            type: 'translateY',
            isTransform: true,
            inputRange: defaultInputRange.stickyHeader,
            outputRange: [0, Window.WIDTH * -0.04],
        },
        titleScale: {
            type: 'scale',
            isTransform: true,
            inputRange: defaultInputRange.stickyHeader,
            outputRange: [1, 0.75],
        },
        fadeIn: {
            type: 'opacity',
            inputRange: [0, stickyHeaderHeight * 0.99, stickyHeaderHeight],
            outputRange: [0, 0, 1],
        },
        fadeOut: {
            type: 'opacity',
            inputRange: defaultInputRange.stickyHeader,
            outputRange: [1, 0],
        },
    }
}