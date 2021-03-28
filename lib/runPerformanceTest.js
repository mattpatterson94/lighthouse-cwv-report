export default async function runPerformanceTest(url, strategy, apiKey) {
  console.log('Starting performance test...', url)

  const response = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURI(url)}&strategy=${strategy || 'mobile'}&key=${apiKey}`)

  return response.json()
}
