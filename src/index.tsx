import * as React from 'react'
import './styles.scss'

export type ICounterProps = {
  className?: string
}

const App: React.FC<ICounterProps> = ({ className = '' }) => {

  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
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
    </svg>
  )
}

export default App