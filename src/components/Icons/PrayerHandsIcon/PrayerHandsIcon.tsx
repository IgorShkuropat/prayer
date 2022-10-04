import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

export const PrayerHandsIcon = (props: SvgProps) => (
  <Svg width={29} height={23} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.294.043c.482-.104.962-.002 1.32.13.368.136.739.352 1.023.626.654.628 1.32 1.768 1.842 2.75a54.13 54.13 0 0 1 1.088 2.197l.158.333c.28.582.597 1.54.867 2.489.275.963.525 1.998.657 2.767.13.756.304 1.46.472 2.114l.065.253c.084.324.166.644.236.947.103.027.21.053.325.079l.29.062.15.03c.373.076.816.166 1.217.303.468.16.994.42 1.395.91.414.506.601 1.142.601 1.877 0 .908-.189 1.814-.625 2.553-.448.76-1.168 1.35-2.148 1.496-.858.127-1.635-.034-2.457-.328-.591-.21-1.273-.517-2.064-.873l-.025-.01c-.257-.117-.525-.237-.806-.361-.52-.23-1.002-.403-1.478-.574h-.002l-.11-.04c-.496-.177-1.016-.366-1.489-.617a4.187 4.187 0 0 1-1.346-1.087c-.392-.489-.675-1.084-.871-1.81-.172-.635-.26-1.545-.325-2.431-.03-.412-.056-.817-.08-1.215-.034-.52-.065-1.03-.107-1.525-.099-1.192-.115-2.464.137-3.41.124-.465.355-1.014.832-1.379.27-.207.566-.316.868-.35-.363-.889-.637-1.372-.837-1.724l-.036-.063a4.242 4.242 0 0 1-.344-.715 2.77 2.77 0 0 1-.143-.929c0-.223.06-.459.11-.627.06-.196.147-.418.26-.637a2.93 2.93 0 0 1 .465-.673c.198-.21.501-.45.915-.538ZM20.222 10.6a19.459 19.459 0 0 0-.115-.58l-.054-.277a31.426 31.426 0 0 0-.68-2.799c-.133-.445-.28-.886-.44-1.303-.498-1.294-.877-1.964-1.129-2.407l-.033-.058a2.484 2.484 0 0 1-.193-.38.722.722 0 0 1-.034-.235c.005-.02.012-.049.023-.086.029-.092.071-.202.125-.307.035-.067.068-.12.095-.158a1.033 1.033 0 0 1 .464.23c.39.376.923 1.233 1.461 2.247.414.78.781 1.554 1.04 2.098l.119.251.052.11c.2.416.479 1.232.746 2.17a26.9 26.9 0 0 1 .61 2.558c.144.84.335 1.61.504 2.271l.068.263.114.446c.09.358.163.663.21.932l.094.54.507.211c.498.207 1.023.322 1.457.411l.156.032c.392.08.698.143.967.235.292.1.425.2.495.284.056.07.149.223.149.611 0 .654-.14 1.184-.347 1.537-.196.333-.436.491-.72.534-.406.06-.829.003-1.49-.233-.51-.182-1.086-.441-1.847-.783-.277-.125-.579-.26-.911-.407a22.836 22.836 0 0 0-1.609-.626l-.117-.041c-.512-.184-.9-.329-1.226-.502-.312-.165-.54-.342-.722-.57-.184-.23-.361-.56-.502-1.082-.113-.422-.193-1.143-.26-2.056-.027-.357-.052-.75-.077-1.149v-.002c-.035-.55-.07-1.112-.111-1.608-.098-1.166-.081-2.14.076-2.727.024-.093.049-.161.07-.21.02.02.047.048.082.093.06.075.138.192.23.374.2.397.373.926.516 1.488.04.162.078.322.112.48a38.913 38.913 0 0 1 .266 1.571l.015.11.004.027v.006a1 1 0 0 0 1.986-.237l-.994.107.994-.107v-.005l-.002-.012-.005-.043a19.531 19.531 0 0 0-.189-1.237ZM11.706.043c-.482-.104-.962-.002-1.32.13-.368.136-.739.352-1.023.626-.654.628-1.32 1.768-1.842 2.75a54.133 54.133 0 0 0-1.088 2.197c-.06.129-.114.24-.158.333-.28.582-.597 1.54-.867 2.489-.275.963-.525 1.999-.657 2.767-.13.756-.304 1.46-.472 2.114l-.065.253c-.084.324-.166.644-.236.947-.186.05-.39.094-.615.14l-.15.031c-.374.076-.816.166-1.217.303-.468.16-.995.42-1.395.91C.187 16.54 0 17.175 0 17.91c0 .908.189 1.814.625 2.553.448.76 1.168 1.35 2.148 1.496.858.128 1.635-.034 2.457-.327.591-.212 1.273-.518 2.064-.874.264-.119.541-.243.83-.371.52-.23 1.003-.403 1.479-.573l.002-.001.11-.04c.496-.177 1.016-.366 1.489-.617a4.187 4.187 0 0 0 1.346-1.087c.392-.489.675-1.084.871-1.81.172-.635.26-1.544.325-2.431.015-.197.028-.392.04-.585.014-.212.028-.422.04-.63.034-.52.065-1.03.107-1.525.099-1.192.115-2.464-.137-3.41-.124-.465-.355-1.014-.832-1.379a1.718 1.718 0 0 0-.868-.35c.363-.889.637-1.372.837-1.724l.036-.063a7.08 7.08 0 0 0 .193-.356 2.612 2.612 0 0 0 .287-1.055c.005-.076.007-.153.007-.233 0-.138-.022-.28-.052-.41a3.925 3.925 0 0 0-.317-.855 3.3 3.3 0 0 0-.205-.345 2.603 2.603 0 0 0-.26-.327 1.788 1.788 0 0 0-.916-.538Zm-3.02 11.096c.049-.311.117-.7.207-1.118l.02-.108.034-.17c.165-.828.39-1.825.68-2.798.133-.446.28-.887.44-1.304.498-1.294.877-1.963 1.129-2.407l.033-.057c.125-.222.168-.308.193-.38a.722.722 0 0 0 .034-.236l-.006-.023a1.923 1.923 0 0 0-.205-.48.827.827 0 0 0-.032-.048 1.033 1.033 0 0 0-.464.23c-.39.376-.923 1.233-1.461 2.247-.199.373-.386.746-.556 1.092a81.419 81.419 0 0 0-.655 1.366c-.2.417-.479 1.234-.746 2.171a26.89 26.89 0 0 0-.61 2.558c-.144.84-.335 1.61-.504 2.272l-.068.262c-.144.558-.258 1.004-.324 1.378l-.094.54-.507.211c-.498.207-1.023.322-1.457.412l-.156.032c-.392.08-.698.142-.967.235-.292.1-.425.198-.495.283-.056.07-.149.223-.149.611 0 .655.14 1.184.347 1.538.196.332.436.49.72.533.406.06.829.004 1.49-.233.509-.181 1.083-.44 1.84-.78l.007-.003c.277-.124.579-.26.911-.407.59-.261 1.139-.457 1.609-.626l.117-.041c.512-.184.9-.329 1.226-.502.175-.093.324-.19.453-.296.1-.084.189-.174.269-.274.184-.23.361-.56.502-1.082.113-.421.193-1.143.26-2.056.019-.249.037-.515.054-.788l.023-.36c.035-.552.07-1.114.112-1.61.097-1.167.08-2.141-.076-2.728a1.579 1.579 0 0 0-.07-.21 1.029 1.029 0 0 0-.133.16c-.051.073-.112.173-.18.307-.2.397-.373.926-.515 1.488-.041.162-.079.322-.113.48a38.97 38.97 0 0 0-.265 1.571l-.016.11-.004.027v.007a1 1 0 0 1-1.986-.237l.994.106-.994-.106v-.006l.002-.012.005-.043.007-.062.012-.093c.017-.132.042-.319.078-.543Z"
      fill="#72A8BC"
    />
    <G mask="url(#a)">
      <Path fill="#72A8BC" d="M.001-4h29v29h-29z" />
    </G>
  </Svg>
);
