import React,{useEffect, useState} from 'react'
import './App.css'

function App() {
	const [accrued,setAccrued] = useState({
		salary:null,
		year:null,
		month:null,
		day:null
	})
	const [result,setResult] = useState(null)

	const calculate = () => {
		let convert_years_to_month = (parseFloat(accrued.year)*12) + (parseFloat(accrued.month)); //total months
		let convert_days_to_month = (parseFloat(accrued.day)/30);
		let total_months = convert_years_to_month + convert_days_to_month;
		const result = accrued.salary * .93 * .14 * total_months;
		setResult(result)
	}

	const currency = (value) => {
        value = parseFloat(value);
        if (! isFinite(value) || (! value && value !== 0)){
            return '0';
        }
        var stringified = Math.abs(value).toFixed(2);
        var _int = stringified.slice(0, -1 - 2);
        var i = _int.length % 3;
        var head = i > 0
            ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
            : '';
        var _float = stringified.slice(-1 - 2);
        var sign = value < 0 ? '-' : '';
        return sign + 'MVR' +' '+ head +
            _int.slice(i).replace(/(\d{3})(?=\d)/g, '$1,') +
            _float;
    };

	useEffect(() => {
		calculate();
	},[accrued])

	return (
		<div id="app">
			<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
				<img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
				<div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
				<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-7xl sm:rounded-lg sm:px-10">
					<div className="mx-auto max-w-7xl">
					<h1 className="mb-4 antialiased text-2xl">Accrued Calculator</h1>
					<div>
						<div className="flex flex-col sm:flex-row gap-2">
						<div className="space-y-3">
							<label className="font-semibold">Salary</label>
							<input type="text" placeholder='Eg: 10000' defaultValue={accrued.salary} onChange={(e) => setAccrued({...accrued, salary: e.target.value})} className="w-full rounded-md border border-purple-300 p-1 px-2 shadow-md" name="salary" id="salary" />
						</div>
						<div className="space-y-3">
							<label className="font-semibold" htmlFor="year">Year</label>
							<input type="text" placeholder='10' defaultValue={accrued.year} onChange={(e) => setAccrued({...accrued, year: e.target.value})} className="w-full rounded-md border border-purple-300 p-1 px-2 shadow-md" name="year" id="year"  />
						</div>
						<div className="space-y-3">
							<label className="font-semibold" htmlFor="month">Month</label>
							<input type="text" placeholder='12' defaultValue={accrued.month} onChange={(e) => setAccrued({...accrued, month: e.target.value})} className="w-full rounded-md border border-purple-300 p-1 px-2 shadow-md" name="month" id="month" />
						</div>
						<div className="space-y-3">
							<label className="font-semibold" htmlFor="day">Day(s)</label>
							<input type="text" placeholder='8' defaultValue={accrued.day} onChange={(e) => setAccrued({...accrued, day: e.target.value})} className="w-full rounded-md border border-purple-300 p-1 px-2 shadow-md" name="day" id="day"  />
						</div>
						</div>
					</div>

					{result > 0 && 
					<div className="mx-auto text-center mt-10 border-2 border-green-500 rounded-md bg-green-200 py-2 ">
						<p className="font-semibold text-2xl text-green-600 py-1">{currency(result)}</p>
					</div>
					}
					</div>
				</div>
				</div>

		</div>
	)
}

export default App
