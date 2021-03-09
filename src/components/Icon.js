import React from 'react';
import {View} from 'react-native';
import Svg, {Path, G, Circle} from 'react-native-svg';
const Icons = ({name, color}) => {
  return (
    <View>
      {name === 'home' ? (
        <>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.695"
            height="25.059"
            viewBox="0 0 27.695 25.059">
            <G fill="#c9e265">
              <Path
                d="M12.24 7.814l-.895-.895a3.485 3.485 0 01-1.869.544 3.518 3.518 0 113.518-3.518 3.483 3.483 0 01-.544 1.869l.895.895a.781.781 0 01-1.105 1.105zM4.785.036a.782.782 0 00-.782.782v2.345H1.658V.818a.782.782 0 00-1.564 0v6.254a.782.782 0 001.564 0V4.727h2.345v2.345a.782.782 0 001.564 0V.818a.782.782 0 00-.782-.782z"
                transform="translate(-.038 -.059) translate(11.836 17.076)"></Path>
            </G>
            <Path
              fill={color}
              d="M27.454 11.205L14.388.242a.783.783 0 00-1.005 0L.317 11.205a.783.783 0 001.006 1.2l1.62-1.36v13.103a.782.782 0 00.782.782h5.861a.782.782 0 100-1.564H4.507V9.73l9.38-7.87 9.382 7.872v5.816a.782.782 0 101.564 0v-4.5l1.618 1.358a.781.781 0 101-1.2z"
              transform="translate(-.038 -.059)"></Path>
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
