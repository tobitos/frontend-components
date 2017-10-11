/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function AlertIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 20 20"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-4066.000000, -284.000000)">
          <g transform="translate(4067.000000, 285.000000)">
            <path d="M9.00042345,16.9417992 C4.62225447,16.9417992 1.05862426,13.378046 1.05862426,9 C1.05862426,4.62149634 4.62186521,1.05862426 9.00042345,1.05862426 C13.3782577,1.05862426 16.9413757,4.6216193 16.9413757,9 C16.9413757,13.377923 13.3778685,16.9417992 9.00042345,16.9417992 L9.00042345,16.9417992 Z M9.00042345,18.0004234 C13.9625551,18.0004234 18,13.9625605 18,9 C18,4.03694909 13.9629116,0 9.00042345,0 C4.03722771,0 0,4.03680977 0,9 C0,13.9626999 4.03758426,18.0004234 9.00042345,18.0004234 L9.00042345,18.0004234 Z" />
            <g transform="translate(8.000000, 4.000000)">
              <g>
                <path d="M-0.2572,9.2312 C-0.2572,9.8988 0.2772,10.4484 0.9744,10.4484 C1.6716,10.4484 2.2068,9.8988 2.2068,9.2312 C2.2068,8.5344 1.6428,7.9844 0.9744,7.9844 C0.3068,7.9844 -0.2572,8.5344 -0.2572,9.2312 Z" />
                <path d="M1.7756,6.6 L2.1912,-0.2 L-0.242,-0.2 L0.1732,6.6 L1.7756,6.6 L1.7756,6.6 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

AlertIcon.defaultProps = {
  size: 20
};

export default AlertIcon;