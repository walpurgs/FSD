function App() {
	return (
		<div>
			<Suspense fallback={<LoaderPage />}>
				// общий layout
				<AppRouter />
				// общий layout
			</Suspense>
		</div>
	)
}

export default App
