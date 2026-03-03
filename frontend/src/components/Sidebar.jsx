import React from 'react'

function Sidebar({ title, items, activeKey, onChange }) {
  return (
    <aside className="sidebar" aria-label="사이드바">
      <div className="sidebar__top">
        <div className="sidebar__title">{title}</div>
        <button className="sidebar__hamburger" type="button" aria-label="메뉴">
          ☰
        </button>
      </div>

      <nav className="sidebar__nav" aria-label="메뉴">
        {items.map((item) => {
          const active = item.key === activeKey
          return (
            <button
              key={item.key}
              type="button"
              className={`sidebar__item ${active ? 'is-active' : ''}`}
              onClick={() => onChange(item.key)}
            >
              <span className="sidebar__dot" aria-hidden="true" />
              <span className="sidebar__label">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar

