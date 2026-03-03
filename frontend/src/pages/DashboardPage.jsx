import React, { useMemo } from 'react'

function DashboardPage() {
  const stats = useMemo(
    () => [
      { label: '총 직원', value: '156', sub: '+12% 전월 대비', tone: 'up' },
      { label: '금일 출근', value: '142', sub: '91% 전월 대비', tone: 'neutral' },
      { label: '휴가 중', value: '8', sub: '-3 전월 대비', tone: 'down' },
      { label: '이번 달 신규', value: '12', sub: '+4 전월 대비', tone: 'up' },
    ],
    [],
  )

  const activity = useMemo(
    () => [
      { name: '김현수', team: '개발팀', action: '출근', time: '09:00' },
      { name: '이영희', team: '마케팅팀', action: '휴가 신청', time: '08:45' },
      { name: '박민수', team: '영업팀', action: '출근', time: '08:30' },
      { name: '정수진', team: '인사팀', action: '퇴근', time: '18:00' },
    ],
    [],
  )

  const departments = useMemo(
    () => [
      { name: '개발팀', count: 45 },
      { name: '마케팅팀', count: 28 },
      { name: '영업팀', count: 35 },
      { name: '인사팀', count: 18 },
      { name: '재무팀', count: 30 },
    ],
    [],
  )

  const maxDept = Math.max(...departments.map((d) => d.count))

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div>
          <h1 className="dashboard__title">대시보드</h1>
          <p className="dashboard__subtitle">인사관리 현황을 한눈에 확인하세요</p>
        </div>
      </header>

      <section className="stats" aria-label="요약 지표">
        {stats.map((s) => (
          <article key={s.label} className="card stat">
            <div className="stat__top">
              <div className="stat__label">{s.label}</div>
              <span className="stat__icon" aria-hidden="true" />
            </div>
            <div className="stat__value">{s.value}</div>
            <div
              className={`stat__sub ${
                s.tone === 'up'
                  ? 'is-up'
                  : s.tone === 'down'
                    ? 'is-down'
                    : 'is-neutral'
              }`}
            >
              {s.sub}
            </div>
          </article>
        ))}
      </section>

      <section className="grid" aria-label="상세 패널">
        <article className="card panel">
          <h2 className="panel__title">최근 활동</h2>
          <ul className="activity" aria-label="최근 활동 목록">
            {activity.map((a) => (
              <li key={`${a.name}-${a.action}-${a.time}`} className="activity__row">
                <div className="activity__name">{a.name}</div>
                <div className="activity__meta">
                  <span className="activity__team">{a.team}</span>
                  <span className="activity__sep" aria-hidden="true">
                    ·
                  </span>
                  <span className="activity__action">{a.action}</span>
                </div>
                <div className="activity__time">{a.time}</div>
              </li>
            ))}
          </ul>
        </article>

        <article className="card panel">
          <h2 className="panel__title">부서별 인원</h2>
          <ul className="dept" aria-label="부서별 인원">
            {departments.map((d) => {
              const pct = maxDept ? Math.round((d.count / maxDept) * 100) : 0
              return (
                <li key={d.name} className="dept__row">
                  <div className="dept__name">{d.name}</div>
                  <div className="dept__bar" aria-hidden="true">
                    <div className="dept__fill" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="dept__count">{d.count}명</div>
                </li>
              )
            })}
          </ul>
        </article>
      </section>

      <button className="help-fab" type="button" aria-label="도움말">
        ?
      </button>
    </div>
  )
}

export default DashboardPage

