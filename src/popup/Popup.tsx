import { useEffect, useState } from 'react'
import ClipboardCheckIcon from '../components/Icons/ClipboardCheck'
import ClipboardPlusIcon from '../components/Icons/ClipboardPlus'

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
          <ClipboardPlusIcon />
        </li>
        <li className="py-2 flex justify-between">
          <div>bar@baz.com</div>
          <ClipboardCheckIcon />
        </li>
      </ul>
    </main>
  )
}

export default App
