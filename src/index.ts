render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                    <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
