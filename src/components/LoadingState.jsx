import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingState = props => {
  return (
    <ContentLoader
      speed={2}
      width={350}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#5333ed"
      foregroundColor="#DA22FF"
      {...props}
    >
      <rect x="50" y="6" rx="4" ry="4" width="330" height="40" />
      <rect x="2" y="6" rx="4" ry="4" width="40" height="40" />
      <rect x="50" y="55" rx="4" ry="4" width="330" height="40" />
      <rect x="2" y="55" rx="4" ry="4" width="40" height="40" />
      <rect x="50" y="104" rx="4" ry="4" width="330" height="40" />
      <rect x="2" y="104" rx="4" ry="4" width="40" height="40" />
    </ContentLoader>
  )
}


export default LoadingState