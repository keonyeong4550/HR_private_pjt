import React from 'react'

const MOCK_EMPLOYEES = [
  {
    id: 1,
    name: '김철수',
    email: 'kim@company.com',
    dept: '개발팀',
    title: '시니어 개발자',
    joinedAt: '2020-03-15',
    status: '재직',
  },
  {
    id: 2,
    name: '이영희',
    email: 'lee@company.com',
    dept: '마케팅팀',
    title: '마케팅 매니저',
    joinedAt: '2019-07-01',
    status: '재직',
  },
  {
    id: 3,
    name: '박민수',
    email: 'park@company.com',
    dept: '영업팀',
    title: '영업 대표',
    joinedAt: '2021-01-10',
    status: '재직',
  },
  {
    id: 4,
    name: '정수진',
    email: 'jung@company.com',
    dept: '인사팀',
    title: '인사 담당자',
    joinedAt: '2018-05-20',
    status: '퇴사',
  },
  {
    id: 5,
    name: '최동욱',
    email: 'choi@company.com',
    dept: '개발팀',
    title: '주니어 개발자',
    joinedAt: '2023-09-01',
    status: '재직',
  },
]

function EmployeeManagementPage() {
  return (
    <div className="employee">
      <header className="employee__header">
        <div>
          <h1 className="employee__title">직원 관리</h1>
          <p className="employee__subtitle">
            전체 직원 {MOCK_EMPLOYEES.length}명
          </p>
        </div>
        <button className="employee__add" type="button">
          + 직원 추가
        </button>
      </header>

      <div className="employee__toolbar">
        <input
          className="employee__search"
          type="text"
          placeholder="이름, 이메일, 부서로 검색..."
        />
      </div>

      <div className="employee__table card">
        <div className="employee__thead">
          <div>이름</div>
          <div>이메일</div>
          <div>부서</div>
          <div>직책</div>
          <div>입사일</div>
          <div>상태</div>
          <div>작업</div>
        </div>
        <div className="employee__tbody">
          {MOCK_EMPLOYEES.map((e) => (
            <div key={e.id} className="employee__row">
              <div>{e.name}</div>
              <div>{e.email}</div>
              <div>{e.dept}</div>
              <div>{e.title}</div>
              <div>{e.joinedAt}</div>
              <div>
                <span
                  className={
                    e.status === '재직'
                      ? 'badge badge--green'
                      : 'badge badge--red'
                  }
                >
                  {e.status}
                </span>
              </div>
              <div className="employee__actions">
                <button type="button" className="icon-button">
                  ✏️
                </button>
                <button
                  type="button"
                  className="icon-button icon-button--danger"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmployeeManagementPage

