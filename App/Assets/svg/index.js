import React from "react"
import Svg, { Path, Circle, Stop, LinearGradient, Defs, ClipPath, G, Rect } from "react-native-svg"
import { getHeight, getWidth } from "../../Utils/size"

export function BackIcon1({ width = 26, height = 26, color = "#3B454E" }) {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M13 .5C6.112.5.5 6.112.5 13c0 6.887 5.612 12.5 12.5 12.5 6.887 0 12.5-5.613 12.5-12.5C25.5 6.112 19.887.5 13 .5zm2.238 16.25a.943.943 0 010 1.325.927.927 0 01-.663.275.927.927 0 01-.662-.275L9.5 13.663a.943.943 0 010-1.325l4.412-4.413a.943.943 0 011.325 0 .943.943 0 010 1.325L11.488 13l3.75 3.75z"
                fill={color}
            />
        </Svg>
    )
}

export function EyeIconClose({ width = 24, height = 24, color = '#ADAEC4' }) {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path fill="#fff" d="M0 0h24v24H0z" />
            <Path
                d="M14.53 9.47l-5.06 5.06a3.576 3.576 0 115.06-5.06z"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73c-3.53 0-6.82 2.08-9.11 5.68-.9 1.41-.9 3.78 0 5.19.79 1.24 1.71 2.31 2.71 3.17M8.42 19.53c1.14.48 2.35.74 3.58.74 3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-.33-.52-.69-1.01-1.06-1.47M15.51 12.7a3.565 3.565 0 01-2.82 2.82M9.47 14.53L2 22M22 2l-7.47 7.47"
                stroke={color}
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export function ButtonNext({ width = getWidth(80), height = getWidth(80) }) {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Rect x={0.5} y={0.5} width={79} height={79} rx={39.5} stroke="#3B454E" />
            <Rect x={3} y={3} width={74} height={74} rx={37} fill="#242A31" />
            <Path
                d="M31.553 42.204h12.17l-5.59 5.59 1.42 1.41 8-8-8-8-1.41 1.41 5.58 5.59h-12.17v2z"
                fill="#fff"
            />
        </Svg>
    )
}

export function CrossButton({ width = getWidth(26), height = getWidth(26) }) {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M13 23.833c5.983 0 10.833-4.85 10.833-10.833 0-5.983-4.85-10.833-10.833-10.833C7.017 2.167 2.167 7.017 2.167 13c0 5.983 4.85 10.833 10.833 10.833z"
                fill="#fff"
                stroke="#EB5757"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16.25 9.75l-6.5 6.5M9.75 9.75l6.5 6.5"
                stroke="#EB5757"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export function ArrowDown({ width = 12, height = 8 }) {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1 1.5l5 5 5-5"
                stroke="#3B454E"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export function ArrowRight({ width = 8, height = 12, color = '#fff' }) {
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M1.75 10.5L6.25 6l-4.5-4.5"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}