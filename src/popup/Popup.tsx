import { useEffect, useState } from 'react'

function App() {
  const [url, seturl] = useState<string | undefined>(undefined)

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const activeTab = tabs[0]
      const urlComponents = new URL(activeTab.url as string).hostname.split('.')
      seturl(urlComponents.at(-2))
    })
  }, [])

  return (
    <main className="text-base bg-gray-900 text-neutral-200">
      {/* ToDo: email suggestions */}
      <ul className="divide-y divide-gray-500 dark:divide-gray-700">
        <li className="py-2 flex justify-between">
          <div>foo@bar.com</div>
          <div>📋 Copy</div>
        </li>
        <li className="py-2 flex justify-between">
          <div>bar@baz.com</div>
          <div>✅ Copied</div>
        </li>
      </ul>
    </main>
  )
}

export default App
