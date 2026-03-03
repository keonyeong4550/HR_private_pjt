import React from 'react'

function PlaceholderPage({ title }) {
  return (
    <div className="placeholder">
      <div className="card placeholder__card">
        <h1 className="placeholder__title">{title}</h1>
        <p className="placeholder__sub">이 화면은 곧 연결될 예정입니다.</p>
      </div>
    </div>
  )
}

export default PlaceholderPage

