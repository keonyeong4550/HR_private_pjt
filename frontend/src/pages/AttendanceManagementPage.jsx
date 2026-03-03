import React from 'react'

const SUMMARY = [
  { key: 'today', label: '금일 출근', value: '5명' },
  { key: 'normal', label: '정상 출근', value: '2명' },
  { key: 'late', label: '지각', value: '2명' },
  { key: 'absent', label: '결근', value: '1명' },
]

const MOCK_ATTENDANCE = [
  {
    id: 1,
    name: '김철수',
    dept: '개발팀',
    date: '2026-03-03',
    start: '09:00',
    end: '18:00',
    work: '9h 0m',
    status: '정상',
    reason: '-',
  },
  {
    id: 2,
    name: '이영희',
    dept: '마케팅팀',
    date: '2026-03-03',
    start: '08:45',
    end: '18:30',
    work: '9h 15m',
    status: '지각',
    reason: '교통 체증',
  },
  {
    id: 3,
    name: '박민수',
    dept: '영업팀',
    date: '2026-03-03',
    start: '08:40',
    end: '17:50',
    work: '9h 5m',
    status: '정상',
    reason: '-',
  },
  {
    id: 4,
    name: '정수진',
    dept: '인사팀',
    date: '2026-03-03',
    start: '-',
    end: '-',
    work: '0h 0m',
    status: '결근',
    reason: '병가',
  },
  {
    id: 5,
    name: '최동욱',
    dept: '개발팀',
    date: '2026-03-03',
    start: '09:00',
    end: '16:00',
    work: '7h 0m',
    status: '조퇴',
    reason: '개인 사유',
  },
  {
    id: 6,
    name: '강미영',
    dept: '재무팀',
    date: '2026-03-03',
    start: '08:10',
    end: '18:05',
    work: '8h 55m',
    status: '지각',
    reason: '지하철 지연',
  },
]

function getStatusClass(status) {
  if (status === '정상') return 'badge badge--green'
  if (status === '지각') return 'badge badge--yellow'
  if (status === '결근') return 'badge badge--red'
  if (status === '조퇴') return 'badge badge--orange'
  return 'badge'
}

function AttendanceManagementPage() {
  return (
    <div className="attendance">
      <header className="attendance__header">
        <div>
          <h1 className="attendance__title">근태 관리</h1>
          <p className="attendance__subtitle">
            직원들의 출퇴근 기록을 관리합니다
          </p>
        </div>
        <button className="attendance__add" type="button">
          + 근태 기록 추가
        </button>
      </header>

      <section className="attendance__summary" aria-label="근태 요약">
        {SUMMARY.map((s) => (
          <article key={s.key} className="card attendance__summary-card">
            <div className="attendance__summary-label">{s.label}</div>
            <div className="attendance__summary-value">{s.value}</div>
          </article>
        ))}
      </section>

      <section className="attendance__filters">
        <input
          className="attendance__search"
          type="text"
          placeholder="직원 이름으로 검색..."
        />
        <input className="attendance__date" type="date" />
        <select className="attendance__dept">
          <option>전체 부서</option>
          <option>개발팀</option>
          <option>마케팅팀</option>
          <option>영업팀</option>
          <option>인사팀</option>
          <option>재무팀</option>
        </select>
        <button className="attendance__export" type="button">
          ⬇ 엑셀 다운로드
        </button>
      </section>

      <div className="attendance__table card">
        <div className="attendance__thead">
          <div>직원</div>
          <div>부서</div>
          <div>날짜</div>
          <div>출근 시간</div>
          <div>퇴근 시간</div>
          <div>근무 시간</div>
          <div>상태</div>
          <div>사유</div>
          <div>작업</div>
        </div>
        <div className="attendance__tbody">
          {MOCK_ATTENDANCE.map((row) => (
            <div key={row.id} className="attendance__row">
              <div>{row.name}</div>
              <div>{row.dept}</div>
              <div>{row.date}</div>
              <div>{row.start}</div>
              <div>{row.end}</div>
              <div>{row.work}</div>
              <div>
                <span className={getStatusClass(row.status)}>
                  {row.status}
                </span>
              </div>
              <div>{row.reason}</div>
              <div className="attendance__actions">
                <button
                  type="button"
                  className="icon-button"
                  title="자세히 보기"
                >
                  👁️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AttendanceManagementPage

