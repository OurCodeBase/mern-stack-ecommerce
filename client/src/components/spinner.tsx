export default function App({ size = 6 }) {
  return (
    <div className={`animate-spin inline-block size-${size} border-3 border-current border-t-transparent rounded-full`} role="status" aria-label="loading">
      <span className="sr-only">Loading...</span>
    </div>
  )
}
