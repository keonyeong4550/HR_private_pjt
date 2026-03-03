import React from 'react'

const DEPARTMENTS = [
  {
    id: 1,
    name: '개발팀',
    manager: '김철수',
    headcount: 45,
    description: '소프트웨어 개발 및 유지보수',
    color: '#2563eb',
  },
  {
    id: 2,
    name: '마케팅팀',
    manager: '이영희',
    headcount: 28,
    description: '마케팅 전략 수립 및 실행',
    color: '#a855f7',
  },
  {
    id: 3,
    name: '영업팀',
    manager: '박민수',
    headcount: 35,
    description: '고객 관리 및 영업 활동',
    color: '#10b981',
  },
  {
    id: 4,
    name: '인사팀',
    manager: '정수진',
    headcount: 18,
    description: '인사 관리 및 채용',
    color: '#f97316',
  },
  {
    id: 5,
    name: '재무팀',
    manager: '최동욱',
    headcount: 30,
    description: '재무 관리 및 회계',
    color: '#ef4444',
  },
]

function DepartmentManagementPage() {
  const total = DEPARTMENTS.length

  return (
    <div className="dept-page">
      <header className="dept-page__header">
        <div>
          <h1 className="dept-page__title">부서 관리</h1>
          <p className="dept-page__subtitle">전체 {total}개 부서</p>
        </div>
        <button className="dept-page__add" type="button">
          + 부서 추가
        </button>
      </header>

      <section className="dept-page__grid">
        {DEPARTMENTS.map((dept) => (
          <article key={dept.id} className="dept-card card">
            <div
              className="dept-card__bar"
              style={{ backgroundColor: dept.color }}
            />
            <div className="dept-card__body">
              <header className="dept-card__row dept-card__row--top">
                <h2 className="dept-card__name">{dept.name}</h2>
                <div className="dept-card__actions">
                  <button
                    type="button"
                    className="icon-button"
                    title="수정"
                  >
                    ✏️
                  </button>
                  <button
                    type="button"
                    className="icon-button icon-button--danger"
                    title="삭제"
                  >
                    🗑️
                  </button>
                </div>
              </header>

              <div className="dept-card__row">
                <span className="dept-card__label">팀장</span>
                <span className="dept-card__value">{dept.manager}</span>
              </div>

              <div className="dept-card__row">
                <span className="dept-card__label">인원</span>
                <span className="dept-card__value">
                  👥 {dept.headcount}명
                </span>
              </div>

              <div className="dept-card__row dept-card__row--description">
                <span className="dept-card__label">설명</span>
                <span className="dept-card__value">{dept.description}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default DepartmentManagementPage

