/* @flow */
/* eslint-disable max-len */
import * as React from 'react';

function PhoneIcon(props: { size?: number, className: string, id: string }) {
  return (
    <svg
      id={props.id}
      className={props.className}
      height={props.size}
      width={props.size}
      viewBox="0 0 16 16"
    >
      <g stroke="none" strokeWidth="1" fillRule="evenodd">
        <g transform="translate(-3739.000000, -369.000000)">
          <g transform="translate(3739.000000, 369.000000)">
            <path d="M9.46650621,10.8704959 C9.66350621,10.9684959 9.91350621,11.1304959 10.1255062,11.1084959 C10.3005062,11.0914959 10.4395062,10.9144959 10.5865062,10.7674959 C10.9115062,10.4434959 11.7145062,9.1774959 11.7145062,9.1774959 C11.7145062,9.1774959 12.0315062,8.8224959 12.5005062,9.1154959 C12.9695062,9.4074959 14.0105062,10.1364959 15.8135062,11.2564959 C16.0995062,11.4934959 15.9725062,11.8724959 15.9725062,11.8724959 C15.9725062,11.8724959 14.7095062,13.8944959 12.7315062,14.8804959 C12.2865062,15.1574959 11.2535062,14.8644959 11.2535062,14.8644959 C11.2535062,14.8644959 2.94450621,13.0204959 0.0845062052,4.6204959 C-0.0944937948,4.2444959 0.0665062052,3.5674959 0.0665062052,3.5674959 C0.0665062052,3.5674959 0.315506205,2.0694959 2.60250621,0.142495902 C2.97250621,-0.168504098 3.36750621,0.126495902 3.36750621,0.126495902 C3.36750621,0.126495902 4.58650621,1.2924959 5.98250621,3.2074959 C6.05250621,3.3044959 6.06450621,3.4304959 6.04750621,3.5464959 C6.02650621,3.6864959 5.96150621,3.8114959 5.89750621,3.8514959 C4.92450621,4.6194959 4.35250621,5.4054959 4.24650621,5.5464959 C4.14150621,5.6874959 4.14150621,5.9364959 4.36250621,6.2104959 C4.58550621,6.4834959 6.35250621,9.2914959 9.46650621,10.8704959" />
          </g>
          <g transform="translate(3739.000000, 369.000000)" />
        </g>
      </g>
    </svg>
  );
}

PhoneIcon.defaultProps = {
  size: 16
};

export default PhoneIcon;