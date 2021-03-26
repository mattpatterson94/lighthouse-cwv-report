export default async function runPerformanceTest(url, apiKey) {
  console.log('Starting performance test...', url)

  const response = await fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURI(url)}&key=${apiKey}`)

  return response.json()
}

//  AIzaSyCcQqhCjDJkM0M1YTXvOA8EDgrPTLaHVIU
