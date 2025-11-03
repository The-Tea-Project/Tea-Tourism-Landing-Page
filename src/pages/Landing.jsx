import { Link } from 'react-router-dom'

export default function Landing() {
	return (
		<main
			className="min-h-screen relative px-6 py-12 bg-cover bg-center"
			style={{ backgroundImage: "url('/assets/Logos/bg-landing.jpg')" }}
		>
			{/* light overlay to increase background lightness for readability */}
			<div className="absolute inset-0 bg-white/60 pointer-events-none"></div>

			{/* content above overlay */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
				{/* Logos row - three logos above the text */}
				<div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
					<img src="/assets/Logos/nitjsr.jpg" alt="logo-1" className="h-20 md:h-28 object-contain" />
					<img src="/assets/Logos/hefa.jpg" alt="logo-2" className="h-16 md:h-20 object-contain" />
					<img src="/assets/Logos/flag.jpg" alt="logo-3" className="h-16 md:h-20 object-contain" />
				</div>

				{/* Main heading text (matches the screenshot text) */}
				<div className="max-w-3xl text-center">
					<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#6b21a8] leading-tight">
						Smart and Effective IoT and GNSS
						Technology based Tea farming
						and Tourism for Tea Community
						Development
					</h1>

					<div className="mt-6 flex justify-center">
						<span className="bg-gray-100 text-sky-800 px-6 py-2 rounded-full text-sm md:text-base">
							A CSR activity of Higher Education Financial
							Agency (HEFA)
						</span>
					</div>

					<p className="mt-6 text-sky-700 font-medium">Implemented by NIT Jamshedpur</p>
				</div>

				{/* Login boxes */}
				<div className="w-full max-w-3xl mt-10">
					<div className="flex flex-col md:flex-row gap-6 justify-center">
						<Link to="/user" className="flex-1 block text-center p-6 rounded-lg border hover:shadow-lg transition bg-white">
							<div className="text-lg font-bold">User Login</div>
							<div className="mt-2 text-sm text-gray-500">Access the user portal</div>
						</Link>

						<Link to="/admin" className="flex-1 block text-center p-6 rounded-lg border hover:shadow-lg transition bg-white">
							<div className="text-lg font-bold">Admin Login</div>
							<div className="mt-2 text-sm text-gray-500">Access the admin dashboard</div>
						</Link>
					</div>
				</div>
			</div>
		</main>
	)
}
