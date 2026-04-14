export default function App() {
  const days = [
    { date: 13, weekday: 'Lun' },
    { date: 14, weekday: 'Mar' },
    { date: 15, weekday: 'Mié' },
    { date: 16, weekday: 'Jue' },
    { date: 17, weekday: 'Vie' },
    { date: 18, weekday: 'Sáb' },
    { date: 19, weekday: 'Dom' },
  ];

  const slots = [
    { label: 'Mañana', value: '08:00' },
    { label: 'Siesta 2', value: '10:20 - 10:55' },
    { label: 'Siesta 3', value: '' },
    { label: 'Siesta 4', value: '' },
    { label: 'Noche', value: '' },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-4 text-slate-900">
      <div className="mx-auto max-w-md">
        <div className="mb-4 rounded-2xl bg-blue-900 px-4 py-4 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <button className="rounded-xl bg-white/10 px-3 py-2 text-sm">◀</button>
            <div className="text-center">
              <h1 className="text-xl font-bold">Abril 2026</h1>
              <p className="text-sm text-blue-100">Agenda mensual de siestas</p>
            </div>
            <button className="rounded-xl bg-white/10 px-3 py-2 text-sm">▶</button>
          </div>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-3">
          <button className="rounded-2xl bg-white p-3 text-sm font-semibold shadow-sm">Vista semanal</button>
          <button className="rounded-2xl bg-white p-3 text-sm font-semibold shadow-sm">+ Nueva siesta</button>
        </div>

        <div className="space-y-4">
          {days.map((day, idx) => (
            <div key={day.date} className="overflow-hidden rounded-3xl bg-white shadow-md">
              <div className={`flex items-center justify-between px-4 py-3 ${idx === 1 ? 'bg-blue-500 text-white' : 'bg-sky-100 text-slate-800'}`}>
                <div>
                  <p className="text-sm font-medium">{day.weekday}</p>
                  <p className="text-2xl font-bold">{day.date}</p>
                </div>
                <button className={`rounded-xl px-3 py-2 text-sm font-medium ${idx === 1 ? 'bg-white/20 text-white' : 'bg-white text-slate-700'}`}>
                  Editar
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {slots.map((slot) => (
                  <div key={slot.label} className="grid grid-cols-[92px_1fr] items-center gap-3 px-4 py-3">
                    <div className="text-sm font-semibold text-slate-700">{slot.label}</div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                      {slot.value || 'Tocar para cargar horario'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-md">
          <h2 className="mb-3 text-base font-bold">Resumen del día</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-slate-50 p-3">
              <div className="text-slate-500">Cargadas</div>
              <div className="mt-1 text-2xl font-bold">2</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-3">
              <div className="text-slate-500">Pendientes</div>
              <div className="mt-1 text-2xl font-bold">3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
