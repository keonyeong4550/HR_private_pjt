import React from 'react'

const SUMMARY = [
  { key: 'pending', label: '대기 중', value: '12' },
  { key: 'approved', label: '승인됨', value: '45' },
  { key: 'rejected', label: '반려됨', value: '3' },
]

const MOCK_LEAVES = [
  {
    id: 1,
    requester: '김철수',
    dept: '개발팀',
    type: '연차',
    start: '2026-03-10',
    end: '2026-03-12',
    days: '3일',
    reason: '개인 사유',
    status: '승인',
  },
  {
    id: 2,
    requester: '이영희',
    dept: '마케팅팀',
    type: '병가',
    start: '2026-03-05',
    end: '2026-03-05',
    days: '1일',
    reason: '병원 진료',
    status: '대기 중',
  },
  {
    id: 3,
    requester: '박민수',
    dept: '영업팀',
    type: '연차',
    start: '2026-03-15',
    end: '2026-03-19',
    days: '5일',
    reason: '가족 여행',
    status: '대기 중',
  },
  {
    id: 4,
    requester: '정수진',
    dept: '인사팀',
    type: '반차',
    start: '2026-03-08',
    end: '2026-03-08',
    days: '0.5일',
    reason: '개인 업무',
    status: '반려',
  },
]

function getLeaveStatusClass(status) {
  if (status === '승인') return 'badge badge--green'
  if (status === '대기 중') return 'badge badge--yellow'
  if (status === '반려') return 'badge badge--red'
  return 'badge'
}

function LeaveManagementPage() {
  return (
    <div className="leave">
      <header className="leave__header">
        <div>
          <h1 className="leave__title">휴가 관리</h1>
          <p className="leave__subtitle">휴가 신청 및 승인을 관리합니다</p>
        </div>
        <button className="leave__add" type="button">
          + 휴가 신청
        </button>
      </header>

      <section className="leave__summary" aria-label="휴가 요약">
        {SUMMARY.map((s) => (
          <article key={s.key} className="card leave__summary-card">
            <div className="leave__summary-label">{s.label}</div>
            <div className="leave__summary-value">{s.value}</div>
          </article>
        ))}
      </section>

      <div className="leave__table card">
        <div className="leave__thead">
          <div>신청자</div>
          <div>부서</div>
          <div>휴가 종류</div>
          <div>시작일</div>
          <div>종료일</div>
          <div>일수</div>
          <div>사유</div>
          <div>상태</div>
          <div>작업</div>
        </div>

        <div className="leave__tbody">
          {MOCK_LEAVES.map((row) => (
            <div key={row.id} className="leave__row">
              <div>{row.requester}</div>
              <div>{row.dept}</div>
              <div>{row.type}</div>
              <div>{row.start}</div>
              <div>{row.end}</div>
              <div>{row.days}</div>
              <div className="leave__reason">{row.reason}</div>
              <div>
                <span className={getLeaveStatusClass(row.status)}>
                  {row.status}
                </span>
              </div>
              <div className="leave__actions">
                <button type="button" className="icon-button" title="승인">
                  ✓
                </button>
                <button
                  type="button"
                  className="icon-button icon-button--danger"
                  title="반려"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LeaveManagementPage

