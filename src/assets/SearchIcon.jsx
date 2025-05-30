import React from 'react'

const SearchIcon = ({ size = 24, color = "#ffffff", className = "" }) => (
  <svg 
    viewBox="0 -0.5 21 21" 
    width={size} 
    height={size}
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <g fill="none" fillRule="evenodd">
      <g transform="translate(-299.000000, -280.000000)" fill={color}>
        <g transform="translate(56.000000, 160.000000)">
          <path d="M264,138.586 L262.5153,140 L258.06015,135.758 L259.54485,134.343 L264,138.586 Z M251.4,134 C247.9266,134 245.1,131.309 245.1,128 C245.1,124.692 247.9266,122 251.4,122 C254.8734,122 257.7,124.692 257.7,128 C257.7,131.309 254.8734,134 251.4,134 L251.4,134 Z M251.4,120 C246.7611,120 243,123.582 243,128 C243,132.418 246.7611,136 251.4,136 C256.0389,136 259.8,132.418 259.8,128 C259.8,123.582 256.0389,120 251.4,120 L251.4,120 Z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SearchIcon