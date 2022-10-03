import * as React from 'react';
import Svg, {SvgProps, Mask, Path, G} from 'react-native-svg';

export const AddIcon = (props: SvgProps) => (
  <Svg width={22} height={22} {...props}>
    <Path
      d="M10 21a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V1a1 1 0 1 0-2 0v9H1a1 1 0 1 0 0 2h9v9Z"
      fill={props.color}
    />
    <G mask="url(#a)">
      <Path fill="#72A8BC" d="M-1-1h24v24H-1z" />
    </G>
  </Svg>
);
