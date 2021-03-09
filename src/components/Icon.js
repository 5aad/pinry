import React from 'react';
import {View} from 'react-native';
import Svg, {
  Path,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Icons = ({name, color}) => {
  return (
    <View>
      {name === 'home' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.5"
            height="21.618"
            viewBox="0 0 20.5 21.618">
            <Defs>
              <LinearGradient
                id="a"
                x1="0.5"
                x2="0.5"
                y2="1"
                gradientUnits="objectBoundingBox">
                <Stop offset="0" stopColor="#d988ff"></Stop>
                <Stop offset="1" stopColor="#8b5cff"></Stop>
              </LinearGradient>
            </Defs>
            <Path
              fill="url(#a)"
              stroke="#8b5cff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9.157 20.771V17.7a1.426 1.426 0 011.424-1.419h2.886A1.426 1.426 0 0114.9 17.7h0v3.076A1.225 1.225 0 0016.1 22h1.924a3.456 3.456 0 003.476-3.438h0V9.838a2.439 2.439 0 00-.962-1.9l-6.58-5.248a3.18 3.18 0 00-3.944 0L3.462 7.943a2.42 2.42 0 00-.962 1.9v8.714A3.456 3.456 0 005.973 22H7.9a1.235 1.235 0 001.241-1.229h0"
              transform="translate(-1.75 -1.132)"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'fav' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.8"
            height="23.8"
            viewBox="0 0 27.8 23.8">
            <Path
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.8"
              d="M24 1.945a6.991 6.991 0 00-9.677 0L13 3.224l-1.319-1.279a6.993 6.993 0 00-9.681 0 6.5 6.5 0 000 9.388l1.318 1.279L13 22l9.677-9.388L24 11.333a6.5 6.5 0 000-9.388z"
              transform="translate(.9 .9)"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'profile' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.8"
            height="24.8"
            viewBox="0 0 22.8 24.8">
            <G
              fill="none"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.8"
              transform="translate(.9 .9)">
              <Path d="M21 23v-2.667A5.292 5.292 0 0015.75 15H5.25A5.292 5.292 0 000 20.333V23z"></Path>
              <Circle cx="5" cy="5" r="5" transform="translate(5.5)"></Circle>
            </G>
          </Svg>
        </>
      ) : null}
      {name === 'male' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="72.125"
            height="72.125"
            viewBox="0 0 72.125 72.125">
            <Path
              fill={color}
              d="M46.716 29.566l6.395-6.394.512 8.09a3 3 0 005.987-.378l-.806-12.705a5.265 5.265 0 00-4.879-4.86l-12.684-.8a3 3 0 00-.377 5.986l8.113.513-6.402 6.402a21 21 0 104.145 4.145zM19.011 53.113a15.3 15.3 0 1121.502-.127 15.222 15.222 0 01-21.502.127z"></Path>
          </Svg>
        </>
      ) : null}
      {name === 'female' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="41.997"
            height="60"
            viewBox="0 0 41.997 60">
            <Path
              fill={color}
              d="M41.997 21.187a21 21 0 10-24 20.965v3.868h-4.98a3 3 0 000 6h4.98V57a3 3 0 006 0v-4.98h4.979a3 3 0 000-6h-4.979v-3.87a21.143 21.143 0 0018-20.963zm-36.128 0A15.131 15.131 0 1120.99 36.53 15.238 15.238 0 015.869 21.187z"></Path>
          </Svg>
        </>
      ) : null}
    </View>
  );
};

export default Icons;
