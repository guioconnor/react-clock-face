import * as React from 'react';
import styled from 'styled-components';

interface StyleProps {
  hours: number;
  minutes: number;
  size: string;
  marks: boolean;
  numbers: boolean;
};

const SVG = styled.svg`
  height: ${(props: StyleProps) => props.size};
  fill: none;
  stroke: #000;
  stroke-width: 1;
  stroke-linecap: round;
  transform: rotate(-90deg);
  --start-minutes: 0;
  --start-hours: 11;
  --display--marks: ${(props: StyleProps) => props.marks ? "block" : "none"};
  --display--numbers: ${(props: StyleProps) => props.numbers ? "block" : "none"};

  circle {
    fill: white;
  }
  
  .marks {
    transform: translate(20px, 20px);
    stroke-width: 0.2;
  }
  
  .minute,
  .hour
  {
    transform: translate(20px, 20px) rotate(0deg);
    transition: transform 1s;
  }
  
  .minute {
    transform: translate(20px, 20px) rotate(${(props: StyleProps) => 360 * props.hours + props.minutes * 6}deg);
    stroke-width: 0.6;
  }
  
  .hour {
    transform: translate(20px, 20px) rotate(${(props: StyleProps) => props.hours * 30 + props.minutes * .5}deg);
    stroke-width: 1;
  }
  
  .tiaText {
    font-size: 1px;
    font-family: sans-serif;
    transform: translate(14px, 19px) rotate(90deg);
    fill: #dfdfdf;
    stroke: none;
  }
  
  /* numbers */
  .numbers {
    display: var(--display--numbers);
    transform: translate(20px, 20px) rotate(90deg);
  }
  
  .numbers text {
    text-anchor: middle;
    font-size: 3px;
    font-family: sans-serif;
    fill: black;
    stroke: none;
    transform: translate(0, -15px);
    
  }
  
  .numbers > g:nth-child(1) {
    transform: rotate(30deg);
  }
  
  .numbers > g:nth-child(2) {
    transform: rotate(calc(2 * 30deg));
  }
  
  .numbers > g:nth-child(3) {
    transform: rotate(calc(3 * 30deg));
  }
  
  .numbers > g:nth-child(4) {
    transform: rotate(calc(4 * 30deg));
  }
  .numbers > g:nth-child(5) {
    transform: rotate(calc(5 * 30deg));
  }
  
  .numbers > g:nth-child(6) {
    transform: rotate(calc(6 * 30deg));
  }
  
  .numbers > g:nth-child(7) {
    transform: rotate(calc(7 * 30deg));
  }
  
  .numbers > g:nth-child(8) {
    transform: rotate(calc(8 * 30deg));
  }
  
  .numbers > g:nth-child(9) {
    transform: rotate(calc(9 * 30deg));
  }
  
  .numbers > g:nth-child(10) {
    transform: rotate(calc(10 * 30deg));
  }
  
  .numbers > g:nth-child(11) {
    transform: rotate(calc(11 * 30deg));
  }
  .numbers > g:nth-child(12) {
    transform: rotate(calc(12 * 30deg));
  }
  
  
  
  .pin {
    stroke: black;
    stroke-width: 0.2;
  }
  
  
  /* marks */
  .marks {
    display: var(--display--marks);
  }
  
  .marks > line:nth-child(1) {
    transform: rotate(30deg);
  }
  
  .marks > line:nth-child(2) {
    transform: rotate(calc(2 * 30deg));
  }
  
  .marks > line:nth-child(3) {
    transform: rotate(calc(3 * 30deg));
    stroke-width: 0.5;
  }
  
  .marks > line:nth-child(4) {
    transform: rotate(calc(4 * 30deg));
  }
  .marks > line:nth-child(5) {
    transform: rotate(calc(5 * 30deg));
  }
  
  .marks > line:nth-child(6) {
    transform: rotate(calc(6 * 30deg));
    stroke-width: 0.5;
  }
  
  .marks > line:nth-child(7) {
    transform: rotate(calc(7 * 30deg));
  }
  
  .marks > line:nth-child(8) {
    transform: rotate(calc(8 * 30deg));
  }
  
  .marks > line:nth-child(9) {
    transform: rotate(calc(9 * 30deg));
    stroke-width: 0.5;
  }
  
  .marks > line:nth-child(10) {
    transform: rotate(calc(10 * 30deg));
  }
  
  .marks > line:nth-child(11) {
    transform: rotate(calc(11 * 30deg));
  }
  .marks > line:nth-child(12) {
    transform: rotate(calc(12 * 30deg));
    stroke-width: 0.5;
  }

  `;

export type ICounterProps = {
  className?: string,
  hours?: number,
  minutes?: number,
  marks?: boolean,
  numbers?: boolean,
  size?: string,
}

const App: React.FC<ICounterProps> = ({
  className = '',
  hours = 0,
  minutes =  0,
  marks = false,
  numbers = false,
  size = "100vh",
}) => {
  console.log(hours, minutes);
  return (
    <SVG
      viewBox="0 0 40 40"
      className={className}
      hours={hours}
      minutes={minutes}
      marks={marks}
      numbers={numbers}
      size={size}
    >
      <circle cx="20" cy="20" r="19" />
      <g className="marks">
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
      </g>
      <g className="numbers">
        <g>
          <text x="0" y="0">1</text>
        </g>
        <g>
          <text x="0" y="0">2</text>
        </g>
        <g>
          <text x="0" y="0">3</text>
        </g>
        <g>
          <text x="0" y="0">4</text>
        </g>
        <g>
          <text x="0" y="0">5</text>
        </g>
        <g>
          <text x="0" y="0">6</text>
        </g>
        <g>
          <text x="0" y="0">7</text>
        </g>
        <g>

          <text x="0" y="0">8</text>
        </g>
        <g>
          <text x="0" y="0">9</text>
        </g>
        <g>
          <text x="0" y="0">10</text>
        </g>
        <g>
          <text x="0" y="0">11</text>
        </g>
        <g>
          <text x="0" y="0">12</text>
        </g>
      </g>
      <text x="0" y="0" className="tiaText">#Zo'C</text>
      <line x1="0" y1="0" x2="9" y2="0" className="hour" />
      <line x1="0" y1="0" x2="13" y2="0" className="minute" />
      <circle cx="20" cy="20" r="0.7" className="pin" />
    </SVG>
  )
}

export default App