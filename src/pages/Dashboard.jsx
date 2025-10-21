import React from 'react'

const Dashboard = () => {
    const now = new Date()
    const stats = [
        { id: 'users', label: 'Active Users', value: '1,254' },
        { id: 'sessions', label: 'Sessions / day', value: '3,987' },
        { id: 'errors', label: 'Errors', value: '3' },
    ]

    const recent = [
        { id: 1, text: 'Deployed release v1.4.0', when: '2h ago' },
        { id: 2, text: 'CI: tests passed', when: '4h ago' },
        { id: 3, text: 'Opened issue #42', when: 'Yesterday' },
    ]

    return (
        <main className="max-w-6xl mx-auto p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
                <p className="text-sm text-slate-500">Quick overview of app activity</p>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {stats.map(s => (
                    <div key={s.id} className="bg-white rounded-lg shadow p-4">
                        <div className="text-xs text-slate-500">{s.label}</div>
                        <div className="mt-2 text-2xl font-bold text-slate-900">{s.value}</div>
                        <div className="mt-2 text-xs text-slate-400">{now.toLocaleDateString()}</div>
                    </div>
                ))}
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-sm font-semibold text-slate-800 mb-3">Recent activity</h2>
                    <ul className="space-y-3">
                        {recent.map(r => (
                            <li key={r.id} className="flex items-start justify-between">
                                <div>
                                    <div className="text-sm text-slate-700">{r.text}</div>
                                    <div className="text-xs text-slate-500">{r.when}</div>
                                </div>
                                <div className="text-xs text-indigo-600 font-medium">View</div>
                            </li>
                        ))}
                    </ul>
                </div>

                <aside className="bg-white rounded-lg shadow p-4">
                    <h3 className="text-sm font-semibold text-slate-800 mb-2">Quick links</h3>
                    <nav className="flex flex-col gap-2 text-sm">
                        <a className="text-slate-700 hover:underline">Manage users</a>
                        <a className="text-slate-700 hover:underline">Reports</a>
                        <a className="text-slate-700 hover:underline">Integrations</a>
                        <a className="text-slate-700 hover:underline">Documentation</a>
                    </nav>
                </aside>
            </section>
        </main>
    )
}

export default Dashboard