import { useMemo, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import EmployeeManagementPage from './pages/EmployeeManagementPage.jsx'
import AttendanceManagementPage from './pages/AttendanceManagementPage.jsx'
import LeaveManagementPage from './pages/LeaveManagementPage.jsx'
import DepartmentManagementPage from './pages/DepartmentManagementPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'

function App() {
  const navItems = useMemo(
    () => [
      { key: 'dashboard', label: '대시보드' },
      { key: 'employees', label: '직원 관리' },
      { key: 'attendance', label: '근태 관리' },
      { key: 'leave', label: '휴가 관리' },
      { key: 'departments', label: '부서 관리' },
    ],
    [],
  )

  const [activeKey, setActiveKey] = useState('dashboard')

  return (
    <div className="app-shell">
      <Sidebar
        title="인사관리 총무"
        items={navItems}
        activeKey={activeKey}
        onChange={setActiveKey}
      />
      <main className="app-main" aria-label="콘텐츠">
        {activeKey === 'dashboard' && <DashboardPage />}

        {activeKey === 'employees' && <EmployeeManagementPage />}

        {activeKey === 'attendance' && <AttendanceManagementPage />}

        {activeKey === 'leave' && <LeaveManagementPage />}

        {activeKey === 'departments' && <DepartmentManagementPage />}

        {activeKey !== 'dashboard' &&
          activeKey !== 'employees' &&
          activeKey !== 'attendance' &&
          activeKey !== 'leave' &&
          activeKey !== 'departments' && (
            <PlaceholderPage
              title={navItems.find((x) => x.key === activeKey)?.label ?? ''}
            />
          )}
      </main>
    </div>
  )
}

export default App
